import React from "react";

import { SdkComponents } from "@/_types";

import { ComponentsContext, ComponentsContextValue } from "@lib/contexts";

/**
 * returns the SDK's Components instance previously provided
 */
export const useSdkComponents = (): null | SdkComponents => {
  const context = React.useContext<null | ComponentsContextValue>(
    ComponentsContext
  );

  if (context === null) {
    throw new Error(
      "SDK's Components is not available here, hence, you cannot use `useSdkComponents!`"
    );
  }

  return context.sdkComponents;
};
