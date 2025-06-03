/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { CardComponent, CardComponentChangeEvent } from "@/_types";
import { baseComponentMock, baseComponentChangeEventMock } from "./base";

export const cardComponentMock: CardComponent = {
  ...baseComponentMock,
  on(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "card" }) => void)
      | ((event: CardComponentChangeEvent) => void)
  ): CardComponent {
    return this;
  },
  once(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler:
      | ((event: { elementType: "card" }) => void)
      | ((event: CardComponentChangeEvent) => void)
  ): CardComponent {
    return this;
  },
  off(
    eventType: "mount" | "focus" | "blur" | "escape" | "change",
    handler?:
      | ((event: { elementType: "card" }) => void)
      | ((event: CardComponentChangeEvent) => void)
  ): CardComponent {
    return this;
  },
};

export const cardComponentChangeEventMock: CardComponentChangeEvent = {
  ...baseComponentChangeEventMock,
  componentType: "card",
};
