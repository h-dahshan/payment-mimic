import { Sdk } from "@/_types/sdk";

export type SdkLoader = (key: string) => Sdk;

// export interface SdkLoader {
//   (key: string): Sdk;
// }

declare global {
  interface Window {
    sdkLoader?: SdkLoader;
  }
}
