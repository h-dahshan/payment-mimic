import { BaseComponent, BaseComponentChangeEvent } from "./base";

export interface NumberComponentChangeEvent extends BaseComponentChangeEvent {
  componentType: "number";
}

export interface NumberComponent extends BaseComponent {
  /**
   * mount event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "mount",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  once(
    eventType: "mount",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  off(
    eventType: "mount",
    handler?: (event: { elementType: "number" }) => void
  ): NumberComponent;

  /**
   * focus event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "focus",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  once(
    eventType: "focus",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  off(
    eventType: "focus",
    handler?: (event: { elementType: "number" }) => void
  ): NumberComponent;

  /**
   * change event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "change",
    handler: (event: NumberComponentChangeEvent) => void
  ): NumberComponent;
  once(
    eventType: "change",
    handler: (event: NumberComponentChangeEvent) => void
  ): NumberComponent;
  off(
    eventType: "change",
    handler?: (event: NumberComponentChangeEvent) => void
  ): NumberComponent;

  /**
   * blur event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "blur",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  once(
    eventType: "blur",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  off(
    eventType: "blur",
    handler?: (event: { elementType: "number" }) => void
  ): NumberComponent;

  /**
   * escape event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "escape",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  once(
    eventType: "escape",
    handler: (event: { elementType: "number" }) => void
  ): NumberComponent;
  off(
    eventType: "escape",
    handler?: (event: { elementType: "number" }) => void
  ): NumberComponent;
}
