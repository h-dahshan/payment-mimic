/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { CardComponent, BaseChangeEvent } from "@/_types";
import { baseComponentMock, baseChangeEventMock } from "./base";

export const cardComponentMock: CardComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "card" }) => unknown)
      | ((event: BaseChangeEvent<"card">) => unknown)
  ): CardComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "card" }) => unknown)
      | ((event: BaseChangeEvent<"card">) => unknown)
  ): CardComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "card" }) => unknown)
      | ((event: BaseChangeEvent<"card">) => unknown)
  ): CardComponent {
    return this;
  },
};

export const cardChangeEventMock: BaseChangeEvent<"card"> = {
  ...baseChangeEventMock,
  componentType: "card",
};
