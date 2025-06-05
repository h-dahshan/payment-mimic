export type ComponentType = "number" | "expiry" | "cvv" | "card";
export type EventType = "mount" | "focus" | "change" | "blur" | "escape";

export interface BaseComponent {
  /**
   * mounts the component
   */
  mount(element: string | HTMLElement);
  /**
   * unmounts the component
   */
  unmount();

  /**
   * focuses the component
   */
  focus();
  /**
   * blurs the component
   */
  blur();

  /**
   * clears the value(s) of the component
   */
  clear();
}

/**
 * generic interface accepts T, T is from components union
 *  the resulting interface will contain componentType of T
 */
export interface BaseChangeEvent<T extends ComponentType> {
  /**
   * the type of the component triggering the event
   */
  componentType: T;
  /**
   * current value of the component
   */
  value: string;
  /**
   * is current value empty?
   */
  isEmpty: boolean;
  /**
   * is current value completed?
   */
  isCompleted: boolean;
  /**
   * current value validation error
   */
  validationError: undefined | { message: string };
}
