/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { CvvComponent, CvvComponentChangeEvent } from "@/_types";
import { baseComponentMock, baseComponentChangeEventMock } from "./base";

export const cvvComponentMock: CvvComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "cvv" }) => void)
      | ((event: CvvComponentChangeEvent) => void)
  ): CvvComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "cvv" }) => void)
      | ((event: CvvComponentChangeEvent) => void)
  ): CvvComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "cvv" }) => void)
      | ((event: CvvComponentChangeEvent) => void)
  ): CvvComponent {
    return this;
  },
};

export const cvvComponentChangeEventMock: CvvComponentChangeEvent = {
  ...baseComponentChangeEventMock,
  componentType: "cvv",
};
