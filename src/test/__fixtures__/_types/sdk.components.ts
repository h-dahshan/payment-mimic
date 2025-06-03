import type {
  SdkComponents,
  NumberComponent,
  ExpiryComponent,
  CvvComponent,
  CardComponent,
} from "@/_types";
import {
  numberComponentMock,
  expiryComponentMock,
  cvvComponentMock,
  cardComponentMock,
} from "./components";

function createComponent(type: "number"): NumberComponent;
function createComponent(type: "expiry"): ExpiryComponent;
function createComponent(type: "cvv"): CvvComponent;
function createComponent(type: "card"): CardComponent;
function createComponent(type: string) {
  switch (type) {
    case "number":
      return numberComponentMock;
    case "expiry":
      return expiryComponentMock;
    case "cvv":
      return cvvComponentMock;
    case "card":
      return cardComponentMock;
  }
}

function getComponent(type: "number"): NumberComponent | null;
function getComponent(type: "expiry"): ExpiryComponent | null;
function getComponent(type: "cvv"): CvvComponent | null;
function getComponent(type: "card"): CardComponent | null;
function getComponent(type: string) {
  switch (type) {
    case "number":
      return numberComponentMock;
    case "expiry":
      return expiryComponentMock;
    case "cvv":
      return cvvComponentMock;
    case "card":
      return cardComponentMock;

    default:
      return null;
  }
}

export const sdkComponentsMock: SdkComponents = {
  createComponent,
  getComponent,
  validate: async () => ({ error: undefined }),
};
