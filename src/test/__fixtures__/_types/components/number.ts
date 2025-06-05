/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { NumberComponent, BaseChangeEvent } from "@/_types";
import { baseComponentMock, baseChangeEventMock } from "./base";

export const numberComponentMock: NumberComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "number" }) => unknown)
      | ((event: BaseChangeEvent<"number">) => unknown)
  ): NumberComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "number" }) => unknown)
      | ((event: BaseChangeEvent<"number">) => unknown)
  ): NumberComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "number" }) => unknown)
      | ((event: BaseChangeEvent<"number">) => unknown)
  ): NumberComponent {
    return this;
  },
};

export const numberComponentChangeEventMock: BaseChangeEvent<"number"> = {
  ...baseChangeEventMock,
  componentType: "number",
};
