import { BaseComponent, EventsTypesMap } from "./index";

export interface ExpiryComponent extends BaseComponent {
  /**
   * attaches events on expiry component
   * @param eventType event type
   * @param handler event handler
   */
  on<E extends keyof EventsTypesMap<"expiry">>(
    eventType: E,
    handler: (event: EventsTypesMap<"expiry">[E]) => unknown
  ): ExpiryComponent;

  /**
   * attaches an event once on expiry component
   * @param eventType event type
   * @param handler event handler
   */
  once<E extends keyof EventsTypesMap<"expiry">>(
    eventType: E,
    handler: (event: EventsTypesMap<"expiry">[E]) => unknown
  ): ExpiryComponent;

  /**
   * removes attached event from expiry component
   * @param eventType event type
   * @param handler callback
   */
  off<E extends keyof EventsTypesMap<"expiry">>(
    eventType: E,
    handler?: (event: EventsTypesMap<"expiry">[E]) => unknown
  ): ExpiryComponent;
}
