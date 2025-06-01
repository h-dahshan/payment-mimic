import { BaseComponent, BaseComponentChangeEvent } from "./base";

export interface CvvComponentChangeEvent extends BaseComponentChangeEvent {
  componentType: "cvv";
}

export interface CvvComponent extends BaseComponent {
  /**
   * mount event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "mount",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  once(
    eventType: "mount",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  off(
    eventType: "mount",
    handler?: (event: { elementType: "cvv" }) => void
  ): CvvComponent;

  /**
   * focus event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "focus",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  once(
    eventType: "focus",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  off(
    eventType: "focus",
    handler?: (event: { elementType: "cvv" }) => void
  ): CvvComponent;

  /**
   * change event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "change",
    handler: (event: CvvComponentChangeEvent) => void
  ): CvvComponent;
  once(
    eventType: "change",
    handler: (event: CvvComponentChangeEvent) => void
  ): CvvComponent;
  off(
    eventType: "change",
    handler?: (event: CvvComponentChangeEvent) => void
  ): CvvComponent;

  /**
   * blur event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "blur",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  once(
    eventType: "blur",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  off(
    eventType: "blur",
    handler?: (event: { elementType: "cvv" }) => void
  ): CvvComponent;

  /**
   * escape event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "escape",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  once(
    eventType: "escape",
    handler: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
  off(
    eventType: "escape",
    handler?: (event: { elementType: "cvv" }) => void
  ): CvvComponent;
}
