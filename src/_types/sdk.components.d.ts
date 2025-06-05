import { ComponentType, ComponentsTypesMap } from "./index";

/**
 * generic methods createComponent and getComponent
 * when T type is passed, T is from component types union,
 *  func. should return a component instance of same type
 */
export interface SdkComponents {
  /**
   * creates a HTML element as required by type
   */
  createComponent<T extends ComponentType>(type: T): ComponentsTypesMap[T];
  /**
   * retreives HTML element as required by type, if present
   */
  getComponent<T extends ComponentType>(type: T): ComponentsTypesMap[T] | null;
  /**
   * validates mounted HTML elements
   */
  validate(): Promise<{ error: string } | { error: undefined }>;
}
