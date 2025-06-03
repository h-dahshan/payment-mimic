import { BaseComponent, EventsTypesMap } from "./index";

/**
 * generic methods on, once, and off
 *  - EventsTypesMap of T="number" -> has events whose types inside are "number"
 *  - for E which extends keys of EventsTypesMap, which are the spread of event types union
 *    mount, blur, change, etc...
 *  - now the generic method, will take eventType and handler of this eventType
 *    will be mapped automatically
 *  - implement this interface, create an instance, and try calling these methods
 */
export interface NumberComponent extends BaseComponent {
  /**
   * attaches events on number component
   * @param eventType event type
   * @param handler event handler
   */
  on<E extends keyof EventsTypesMap<"number">>(
    eventType: E,
    handler: (event: EventsTypesMap<"number">[E]) => unknown
  ): NumberComponent;

  /**
   * attaches an event once on number component
   * @param eventType event type
   * @param handler event handler
   */
  once<E extends keyof EventsTypesMap<"number">>(
    eventType: E,
    handler: (event: EventsTypesMap<"number">[E]) => unknown
  ): NumberComponent;

  /**
   * removes attached event from number component
   * @param eventType event type
   * @param handler callback
   */
  off<E extends keyof EventsTypesMap<"number">>(
    eventType: E,
    handler?: (event: EventsTypesMap<"number">[E]) => unknown
  ): NumberComponent;
}
