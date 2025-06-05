import { NumberComponent } from "./number";
import { ExpiryComponent } from "./expiry";
import { CvvComponent } from "./cvv";
import { CardComponent } from "./card";
import { ComponentType, BaseChangeEvent } from "./base";

// components union, a component may be one of them
export type Component =
  | NumberComponent
  | ExpiryComponent
  | CvvComponent
  | CardComponent;
// components map, pointed by component 'types' union
export type ComponentsTypesMap = {
  number: NumberComponent;
  expiry: ExpiryComponent;
  cvv: CvvComponent;
  card: CardComponent;
};
// generic events map, constructed based on component 'type'
export type EventsTypesMap<T extends ComponentType> = {
  // if T='number' is passed, event type with componentType equal 'number'
  mount: { componentType: T };
  focus: { componentType: T };
  blur: { componentType: T };
  escape: { componentType: T };
  // if T='number' is passed, change event type with componentType inside it equals 'number'
  change: BaseChangeEvent<T>;
};

export * from "./base";
export * from "./number";
export * from "./expiry";
export * from "./cvv";
export * from "./card";
