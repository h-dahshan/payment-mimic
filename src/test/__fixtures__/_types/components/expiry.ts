/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ExpiryComponent, ExpiryComponentChangeEvent } from "@/_types";
import { baseComponentMock, baseComponentChangeEventMock } from "./base";

export const expiryComponentMock: ExpiryComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "expiry" }) => void)
      | ((event: ExpiryComponentChangeEvent) => void)
  ): ExpiryComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "expiry" }) => void)
      | ((event: ExpiryComponentChangeEvent) => void)
  ): ExpiryComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "expiry" }) => void)
      | ((event: ExpiryComponentChangeEvent) => void)
  ): ExpiryComponent {
    return this;
  },
};

export const expiryComponentChangeEventMock: ExpiryComponentChangeEvent = {
  ...baseComponentChangeEventMock,
  componentType: "expiry",
};
