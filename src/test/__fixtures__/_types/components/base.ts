import type { BaseComponent, BaseChangeEvent } from "@/_types";

export const baseComponentMock: BaseComponent = {
  mount: () => {},
  unmount: () => {},
  focus: () => {},
  blur: () => {},
  clear: () => {},
};

export const baseChangeEventMock: BaseChangeEvent<"number"> = {
  componentType: "number",
  value: "",
  isEmpty: true,
  isCompleted: false,
  validationError: undefined,
};
