import { useRef, useEffect } from "react";
import { Component, EventType } from "@/_types";

export const useAttachEvent = (
  component: Component | null,
  event: EventType,
  callback?: (...args: unknown[]) => unknown
) => {
  const isCallbackHere = typeof callback === "function";
  const callbackRef = useRef(callback);

  // sets callback to ref, on each change
  // this avoids entering next effect on each change
  useEffect(() => {
    if (!isCallbackHere) return;
    callbackRef.current = callback;
  }, [isCallbackHere, callback]);

  // sets an event listener with latest callback
  // cleans up on each run, remove event listener
  useEffect(() => {
    if (!component || !isCallbackHere) return;

    const wrappedCallback = (...args: unknown[]) => {
      if (callbackRef.current) {
        callbackRef.current(...args);
      }
    };

    // attach the listener
    component.on(event, wrappedCallback);

    return () => {
      // detach the listener
      component.off(event, wrappedCallback);
    };
  }, [isCallbackHere, component, event]);
};
