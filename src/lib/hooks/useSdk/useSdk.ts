import React from "react";

import { Sdk } from "@/_types";

import { ComponentsContext, ComponentsContextValue } from "@lib/contexts";

/**
 * returns the SDK instance previously provided
 */
export const useSdk = (): null | Sdk => {
  const context = React.useContext<null | ComponentsContextValue>(
    ComponentsContext
  );

  if (context === null) {
    throw new Error(
      "SDK is not available here, hence, you cannot use `useSdk`!"
    );
  }

  return context.sdk;
};
