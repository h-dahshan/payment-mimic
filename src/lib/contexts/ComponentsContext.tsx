import { createContext } from "react";

import { Sdk, SdkComponents } from "@/_types";

export type ComponentsContextValue = {
  sdk: Sdk | null;
  sdkComponents: SdkComponents | null;
};
export const ComponentsContext = createContext<null | ComponentsContextValue>(
  null
);
