import { Sdk } from "@/_types/sdk";

// type guard / narrowing
export const isObject = (
  something: unknown
): something is { [key in PropertyKey]: unknown } => {
  // ensures it's an object not null with object prototype
  return something !== null && typeof something === "object";
};

// type guard / narrowing
export const isPromise = (
  something: unknown
): something is Promise<unknown> => {
  /**
   * why checking this way?! duck typing
   * if it walks like a duck and quacks like a duck, it's pobably a duck
   * more safer than 'instanceof', deals with any (then)able despite its origin
   */

  return isObject(something) && typeof something.then === "function";
};

// guard, has some valid SDK members
export const isSdk = (something: unknown): something is Sdk => {
  return (
    isObject(something) &&
    typeof something.components === "function" &&
    typeof something.grantPayment === "function"
  );
};

// guard, only return null or an instance of SDK
export const checkSdk = (something: unknown): null | Sdk => {
  if (something === null || isSdk(something)) {
    return something;
  }

  throw new Error("Cannot load the SDK!");
};

type sdkEval =
  | { is: "none"; sdk: null }
  | { is: "sync"; sdk: Sdk }
  | { is: "async"; sdkPromise: Promise<Sdk | null> };
export const evaluateSdk = (something: unknown): sdkEval => {
  // this evaluator takes something, aiming it's the SDK instance

  // if something is a promise
  if (isPromise(something)) {
    return {
      // tell the flow is async
      is: "async",
      // resolve and check the resulted value
      sdkPromise: Promise.resolve(something).then((val) => checkSdk(val)),
    };
  }

  // maybe an instance, may be null, check if it's SDK instance
  const sdk = checkSdk(something);

  // if something is a null
  if (sdk === null) {
    // tell there's none
    return { is: "none", sdk: null };
  }

  // gotcha, SDK, tell it's sync and an instance
  return { is: "sync", sdk };
};
