import {
  useMemo,
  useState,
  useEffect,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from "react";

import { Sdk } from "@/_types";

import { evaluateSdk } from "@lib/utils";
import { usePrevious } from "@lib/hooks";
import { ComponentsContext, ComponentsContextValue } from "@lib/contexts";

type ComponentsProviderProps = {
  sdk: Promise<Sdk | null> | Sdk | null;
  children: ReactNode;
};
export const ComponentsProvider: FunctionComponent<
  PropsWithChildren<ComponentsProviderProps>
> = ({ sdk: sdkSomehow, children }: ComponentsProviderProps) => {
  // evaluate the SDK from the somehow passed SDK
  const sdkEval = useMemo(() => evaluateSdk(sdkSomehow), [sdkSomehow]);

  // initialzie the provider's context
  const [context, setContext] = useState<ComponentsContextValue>(() => ({
    // if all is evaluated, set them directly
    sdk: sdkEval.is === "sync" ? sdkEval.sdk : null,
    sdkComponents: sdkEval.is === "sync" ? sdkEval.sdk.components() : null,
  }));

  // check and initialize the provider's context, for promise-like passed SDK
  useEffect(() => {
    // if context is there, abort
    if (context.sdk) return;

    const safelySetContext = (sdk: Sdk) => {
      setContext((oldCtx) => {
        // only set it once, at any time, in any condition
        if (oldCtx.sdk && oldCtx.sdkComponents) return oldCtx;
        return { sdk, sdkComponents: sdk.components() };
      });
    };

    // for async flow, set the init state when the promise resolves
    if (sdkEval.is === "async") {
      sdkEval.sdkPromise.then((sdk) => {
        if (sdk) safelySetContext(sdk);
      });
    } else if (sdkEval.is === "sync") {
      safelySetContext(sdkEval.sdk);
    }
  }, [sdkEval, context]);

  // warn on changes to sdk prop, and discard
  const prevSdkSomehow = usePrevious(sdkSomehow);
  useEffect(() => {
    if (prevSdkSomehow !== null && prevSdkSomehow !== sdkSomehow) {
      console.warn("You cannot change the `sdk` prop after setting it.");
    }
  }, [prevSdkSomehow, sdkSomehow]);

  return (
    <ComponentsContext.Provider value={context}>
      {children}
    </ComponentsContext.Provider>
  );
};
