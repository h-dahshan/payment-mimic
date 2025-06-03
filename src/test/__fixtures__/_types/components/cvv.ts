/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { CvvComponent, BaseChangeEvent } from "@/_types";
import { baseComponentMock, baseChangeEventMock } from "./base";

export const cvvComponentMock: CvvComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "cvv" }) => unknown)
      | ((event: BaseChangeEvent<"cvv">) => unknown)
  ): CvvComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "cvv" }) => unknown)
      | ((event: BaseChangeEvent<"cvv">) => unknown)
  ): CvvComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "cvv" }) => unknown)
      | ((event: BaseChangeEvent<"cvv">) => unknown)
  ): CvvComponent {
    return this;
  },
};

export const cvvChangeEventMock: BaseChangeEvent<"cvv"> = {
  ...baseChangeEventMock,
  componentType: "cvv",
};
