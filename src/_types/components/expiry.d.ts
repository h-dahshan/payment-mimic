import { BaseComponent, BaseComponentChangeEvent } from "./base";

export interface ExpiryComponentChangeEvent extends BaseComponentChangeEvent {
  componentType: "expiry";
}

export interface ExpiryComponent extends BaseComponent {
  /**
   * mount event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "mount",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  once(
    eventType: "mount",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  off(
    eventType: "mount",
    handler?: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;

  /**
   * focus event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "focus",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  once(
    eventType: "focus",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  off(
    eventType: "focus",
    handler?: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;

  /**
   * change event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "change",
    handler: (event: ExpiryComponentChangeEvent) => void
  ): ExpiryComponent;
  once(
    eventType: "change",
    handler: (event: ExpiryComponentChangeEvent) => void
  ): ExpiryComponent;
  off(
    eventType: "change",
    handler?: (event: ExpiryComponentChangeEvent) => void
  ): ExpiryComponent;

  /**
   * blur event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "blur",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  once(
    eventType: "blur",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  off(
    eventType: "blur",
    handler?: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;

  /**
   * escape event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "escape",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  once(
    eventType: "escape",
    handler: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
  off(
    eventType: "escape",
    handler?: (event: { elementType: "expiry" }) => void
  ): ExpiryComponent;
}
