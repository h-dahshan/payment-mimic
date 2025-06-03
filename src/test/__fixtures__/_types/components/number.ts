/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NumberComponent, NumberComponentChangeEvent } from "@/_types";
import { baseComponentMock, baseComponentChangeEventMock } from "./base";

export const numberComponentMock: NumberComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "number" }) => void)
      | ((event: NumberComponentChangeEvent) => void)
  ): NumberComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "number" }) => void)
      | ((event: NumberComponentChangeEvent) => void)
  ): NumberComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "number" }) => void)
      | ((event: NumberComponentChangeEvent) => void)
  ): NumberComponent {
    return this;
  },
};

export const numberComponentChangeEventMock: NumberComponentChangeEvent = {
  ...baseComponentChangeEventMock,
  componentType: "number",
};
