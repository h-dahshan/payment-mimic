import { BaseComponent, BaseComponentChangeEvent } from "./base";

export interface CardComponentChangeEvent extends BaseComponentChangeEvent {
  componentType: "card";
}

export interface CardComponent extends BaseComponent {
  /**
   * mount event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "mount",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  once(
    eventType: "mount",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  off(
    eventType: "mount",
    handler?: (event: { elementType: "card" }) => void
  ): CardComponent;

  /**
   * focus event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "focus",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  once(
    eventType: "focus",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  off(
    eventType: "focus",
    handler?: (event: { elementType: "card" }) => void
  ): CardComponent;

  /**
   * change event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "change",
    handler: (event: CardComponentChangeEvent) => void
  ): CardComponent;
  once(
    eventType: "change",
    handler: (event: CardComponentChangeEvent) => void
  ): CardComponent;
  off(
    eventType: "change",
    handler?: (event: CardComponentChangeEvent) => void
  ): CardComponent;

  /**
   * blur event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "blur",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  once(
    eventType: "blur",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  off(
    eventType: "blur",
    handler?: (event: { elementType: "card" }) => void
  ): CardComponent;

  /**
   * escape event handlers, on each, once per lifecycle, off
   */
  on(
    eventType: "escape",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  once(
    eventType: "escape",
    handler: (event: { elementType: "card" }) => void
  ): CardComponent;
  off(
    eventType: "escape",
    handler?: (event: { elementType: "card" }) => void
  ): CardComponent;
}
