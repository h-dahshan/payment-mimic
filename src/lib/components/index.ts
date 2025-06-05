import { createComponent } from "./ComponentsFactory";

export * from "./ComponentsProvider";
export * from "./_TestComponent";

export const Number = createComponent("number");
export const Expiry = createComponent("expiry");
export const Cvv = createComponent("cvv");
export const Card = createComponent("card");
