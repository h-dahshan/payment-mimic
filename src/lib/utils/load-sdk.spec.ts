import {
  findScript,
  injectScript,
  loadScript,
  loadSdk,
  SDK_SRC,
  clearSdkPromiseCache,
} from "./load-sdk";

// Helper to clear all script tags
function clearScripts() {
  document.querySelectorAll("script").forEach((s) => s.remove());
}
function clearPlayground() {
  clearScripts();
  clearSdkPromiseCache();
  delete window.sdkLoader;
}

describe("findScript", () => {
  beforeEach(clearPlayground);
  afterEach(clearPlayground);

  it("returns null if no matching script tag exists", () => {
    expect(findScript()).toBeNull();
  });

  it("returns the script element if it matches the SDK URL", () => {
    const script = document.createElement("script");
    script.src = SDK_SRC;
    document.body.appendChild(script);
    expect(findScript()).toBe(script);
  });

  it("ignores script tags with non-matching src", () => {
    const script = document.createElement("script");
    script.src = "https://other.com/v1/sdk.js";
    document.body.appendChild(script);
    expect(findScript()).toBeNull();
  });
});

describe("injectScript", () => {
  beforeEach(clearPlayground);
  afterEach(clearPlayground);

  it("injects a script tag with the correct src", () => {
    const script = injectScript();
    expect(script).toBeInstanceOf(HTMLScriptElement);
    expect(script.src).toBe(SDK_SRC);
    expect(document.querySelector(`script[src="${SDK_SRC}"]`)).toBe(script);
  });

  it("throws if document.head and document.body are missing", () => {
    const stubDocument = new Document();

    vi.stubGlobal("document", stubDocument);
    expect(() => injectScript()).toThrow(
      "SDK requires <head> or <body> element!"
    );
    vi.unstubAllGlobals();
  });
});

describe("loadScript", () => {
  beforeEach(clearPlayground);
  afterEach(clearPlayground);

  it("resolves with window.sdk if already present", async () => {
    window.sdkLoader = vi.fn();
    const sdkLoader = await loadScript();
    expect(sdkLoader).toBe(window.sdkLoader);
  });

  it("injects and resolves when script loads and window.sdk is set", async () => {
    const promise = loadScript();
    const script = document.querySelector(`script[src="${SDK_SRC}"]`)!;
    window.sdkLoader = vi.fn();
    script.dispatchEvent(new Event("load"));
    const sdkLoader = await promise;
    expect(sdkLoader).toBe(window.sdkLoader);
  });

  it("rejects if script fails to load", async () => {
    const promise = loadScript();
    const script = document.querySelector(`script[src="${SDK_SRC}"]`)!;
    script.dispatchEvent(new Event("error"));
    await expect(promise).rejects.toThrow("Failed to load the SDK!");
  });

  it("rejects if script loads but window.sdk is not set", async () => {
    const promise = loadScript();
    const script = document.querySelector(`script[src="${SDK_SRC}"]`)!;
    script.dispatchEvent(new Event("load"));
    await expect(promise).rejects.toThrow("Cannot find the SDK!");
  });
});

describe("loadSdk", () => {
  beforeEach(clearPlayground);
  afterEach(clearPlayground);

  it("returns null if not in browser", async () => {
    vi.stubGlobal("window", undefined);
    const result = await loadSdk("key");
    vi.unstubAllGlobals();

    expect(result).toBeNull();
  });

  it("calls sdkLoader with the provided key", async () => {
    const sdkLoader = vi.fn().mockReturnValue("sdk-instance");
    window.sdkLoader = sdkLoader;
    const result = await loadSdk("my-key");
    expect(sdkLoader).toHaveBeenCalledWith("my-key");
    expect(result).toBe("sdk-instance");
  });
});
