import { BaseComponent, EventsTypesMap } from "./index";

export interface CardComponent extends BaseComponent {
  /**
   * attaches events on card component
   * @param eventType event type
   * @param handler event handler
   */
  on<E extends keyof EventsTypesMap<"card">>(
    eventType: E,
    handler: (event: EventsTypesMap<"card">[E]) => unknown
  ): CardComponent;

  /**
   * attaches an event once on card component
   * @param eventType event type
   * @param handler event handler
   */
  once<E extends keyof EventsTypesMap<"card">>(
    eventType: E,
    handler: (event: EventsTypesMap<"card">[E]) => unknown
  ): CardComponent;

  /**
   * removes attached event from card component
   * @param eventType event type
   * @param handler callback
   */
  off<E extends keyof EventsTypesMap<"card">>(
    eventType: E,
    handler?: (event: EventsTypesMap<"card">[E]) => unknown
  ): CardComponent;
}
