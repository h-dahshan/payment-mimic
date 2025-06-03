import { BaseComponent, EventsTypesMap } from "./index";

export interface CvvComponent extends BaseComponent {
  /**
   * attaches events on cvv component
   * @param eventType event type
   * @param handler event handler
   */
  on<E extends keyof EventsTypesMap<"cvv">>(
    eventType: E,
    handler: (event: EventsTypesMap<"cvv">[E]) => unknown
  ): CvvComponent;

  /**
   * attaches an event once on cvv component
   * @param eventType event type
   * @param handler event handler
   */
  once<E extends keyof EventsTypesMap<"cvv">>(
    eventType: E,
    handler: (event: EventsTypesMap<"cvv">[E]) => unknown
  ): CvvComponent;

  /**
   * removes attached event from cvv component
   * @param eventType event type
   * @param handler callback
   */
  off<E extends keyof EventsTypesMap<"cvv">>(
    eventType: E,
    handler?: (event: EventsTypesMap<"cvv">[E]) => unknown
  ): CvvComponent;
}
