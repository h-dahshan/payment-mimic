import type {
  NumberComponent,
  ExpiryComponent,
  CvvComponent,
  CardComponent,
} from "./components";

export interface SdkComponents {
  /**
   * creates card number HTML input element
   */
  createComponent(type: "number"): NumberComponent;
  /**
   * creates card expiry HTML input element
   */
  createComponent(type: "expiry"): ExpiryComponent;
  /**
   * creates card cvv HTML input element
   */
  createComponent(type: "cvv"): CvvComponent;
  /**
   * creates card HTML input elements group
   */
  createComponent(type: "card"): CardComponent;

  /**
   * retreives card number HTML input element, if present
   */
  getComponent(type: "number"): NumberComponent | null;
  /**
   * retreives card expiry HTML input element, if present
   */
  getComponent(type: "expiry"): ExpiryComponent | null;
  /**
   * retreives card cvv HTML input element, if present
   */
  getComponent(type: "cvv"): CvvComponent | null;
  /**
   * retreives card HTML input elements group, if present
   */
  getComponent(type: "card"): CardComponent | null;

  /**
   * validates mounted components
   */
  validate(): Promise<{ error: string } | { error: undefined }>;
}
