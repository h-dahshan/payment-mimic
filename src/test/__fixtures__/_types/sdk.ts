import type { Sdk, SdkLoader } from "@/_types";
import { sdkComponentsMock } from "./sdk.components";

export const sdkMock: Sdk = {
  components: () => sdkComponentsMock,
  grantPayment: async () => ({}),
};

export const sdkLoaderMock: SdkLoader = () => sdkMock;
