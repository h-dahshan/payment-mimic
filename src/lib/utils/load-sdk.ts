import { Sdk } from "@/_types/sdk";

import { SdkLoader } from "@/_types/sdk";
declare global {
  interface Window {
    sdkLoader?: SdkLoader;
  }
}

// the domain on which we host assets, privately hosted
export const ORIGIN = "https://example.com";
export const SDK_SRC = `${ORIGIN}/v1/sdk.js`;
const SDK_URL_REGEX = /^https:\/\/example\.com\/v1\/sdk\.js$/;

let sdkPromise: Promise<SdkLoader | null> | null = null;
export const clearSdkPromiseCache = () => {
  sdkPromise = null;
};

/**   SDK Script Tag Check    **/

export const findScript = (): HTMLScriptElement | null => {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    // find all script tags, starting '^' with the origin
    `script[src^="${ORIGIN}"]`
  );

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (!SDK_URL_REGEX.test(script.src)) continue;
    return script;
  }

  return null;
};

/**   SDK Script Tag Injection    **/

export const injectScript = (): HTMLScriptElement => {
  const script = document.createElement("script");
  script.src = SDK_SRC;

  const headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error("SDK requires <head> or <body> element!");
  }
  headOrBody.appendChild(script);

  return script;
};

/**   SDK Loading    **/

let onErrorHandler: ((cause?: unknown) => void) | null = null;
let onLoadHandler: (() => void) | null = null;

const onError = (reject: (reason?: unknown) => void) => (cause?: unknown) => {
  reject(new Error("Failed to load the SDK!", { cause }));
};
const onLoad =
  (
    resolve: (value: SdkLoader | Promise<SdkLoader | null>) => void,
    reject: (reason?: unknown) => void
  ) =>
  () => {
    if (window.sdkLoader) {
      resolve(window.sdkLoader);
    } else {
      reject(new Error("Cannot find the SDK!"));
    }
  };
export const loadScript = () => {
  // if a promise is there, an attempt is made, return it
  if (sdkPromise !== null) return sdkPromise;

  // make a new attempt to load the SDK
  sdkPromise = new Promise((resolve, reject) => {
    // if window of document aren't there, not a browser, return null
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    // if the loader is granted before, return it
    if (window.sdkLoader) {
      resolve(window.sdkLoader);
      return;
    }

    // let's inject the script obtainer, from secured server
    try {
      // check if the script tag was injected before in DOM
      let script = findScript();

      if (!script) {
        // if not present, inject a new script tag
        script = injectScript();
      } else if (script && onLoadHandler !== null && onErrorHandler !== null) {
        // if present, we need to reload

        // remove event listeners
        script.removeEventListener("load", onLoadHandler);
        script.removeEventListener("error", onErrorHandler);
        // reload script to trigger 'load' event
        script.parentNode?.removeChild(script);
        script = injectScript();
      }

      // make load/error handlers
      onLoadHandler = onLoad(resolve, reject);
      onErrorHandler = onError(reject);
      // attach event handlers to script
      script.addEventListener("load", onLoadHandler);
      script.addEventListener("error", onErrorHandler);
    } catch (error) {
      reject(error);
    }
  });

  // resets sdkPromise on error
  return sdkPromise?.catch((error) => {
    sdkPromise = null;
    return Promise.reject(error);
  });
};

export const loadSdk: (
  ...args: Parameters<SdkLoader>
) => Promise<Sdk | null> = (...args) => {
  return loadScript().then((sdkLoader) => {
    if (sdkLoader === null) return null;

    return sdkLoader(...args);
  });
};
