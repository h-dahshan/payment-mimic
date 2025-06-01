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

export interface BaseComponentChangeEvent {
  /**
   * the type of the component triggering the event
   */
  componentType: ComponentType;
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
