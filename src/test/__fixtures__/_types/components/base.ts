import type {
  ComponentType,
  BaseComponent,
  BaseComponentChangeEvent,
} from "@/_types";

export const baseComponentMock: BaseComponent = {
  mount: () => {},
  unmount: () => {},
  focus: () => {},
  blur: () => {},
  clear: () => {},
};

export const baseComponentChangeEventMock: BaseComponentChangeEvent = {
  componentType: "number" as ComponentType,
  value: "",
  isEmpty: true,
  isCompleted: false,
  validationError: undefined,
};
