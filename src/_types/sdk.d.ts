import { SdkComponents } from "./sdk.components";

export interface Sdk {
  /**
   * makes an instance of components manager
   */
  components(): SdkComponents;

  /**
   * perform the payment against entered card info
   */
  grantPayment(options: {
    components: SdkComponents;
    paymentSecret: string;
  }): Promise<>;
}

export interface SdkLoader {
  (key: string): Sdk;
}
