/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { ExpiryComponent, BaseChangeEvent } from "@/_types";
import { baseComponentMock, baseChangeEventMock } from "./base";

export const expiryComponentMock: ExpiryComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "expiry" }) => unknown)
      | ((event: BaseChangeEvent<"expiry">) => unknown)
  ): ExpiryComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "expiry" }) => unknown)
      | ((event: BaseChangeEvent<"expiry">) => unknown)
  ): ExpiryComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "expiry" }) => unknown)
      | ((event: BaseChangeEvent<"expiry">) => unknown)
  ): ExpiryComponent {
    return this;
  },
};

export const expiryChangeEventMock: BaseChangeEvent<"expiry"> = {
  ...baseChangeEventMock,
  componentType: "expiry",
};
