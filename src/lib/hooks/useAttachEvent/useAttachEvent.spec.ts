import type { EventType, Component } from "@/_types";

import { renderHook, act } from "@testing-library/react";

import { useAttachEvent } from "./useAttachEvent";

describe("useAttachEvent", () => {
  it("attaches and detaches event listeners", () => {
    const component = {
      on: vi.fn(),
      off: vi.fn(),
    } as unknown as Component;
    const event: EventType = "focus";
    const handler = vi.fn();

    const { unmount } = renderHook(() =>
      useAttachEvent(component, event, handler)
    );

    expect(component.on).toHaveBeenCalledExactlyOnceWith(
      event,
      expect.any(Function)
    );
    unmount();
    expect(component.off).toHaveBeenCalledExactlyOnceWith(
      event,
      expect.any(Function)
    );
  });

  it("calls the callback when the event fires", () => {
    let actuator: (...args: unknown[]) => unknown;
    const component = {
      // @ts-expect-error arg just for mock
      on: vi.fn().mockImplementation((e, callback) => {
        actuator = callback;
      }),
      // @ts-expect-error arg just for mock
      off: vi.fn().mockImplementation((e, callback) => {
        actuator = callback;
      }),
    } as unknown as Component;

    const handler = vi.fn();
    const event: EventType = "change";

    renderHook(() => useAttachEvent(component, event, handler));
    act(() => {
      if (typeof actuator === "function") {
        actuator("arg1", "arg2"); // warpper must call my handler
      }
    });

    expect(handler).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("updates the callback if it changes", () => {
    let actuator: (...args: unknown[]) => void;
    const component = {
      on: vi.fn().mockImplementation((_, cb) => {
        actuator = cb;
      }),
      off: vi.fn().mockImplementation(() => {}),
    } as unknown as Component;

    const firstHandler = vi.fn();
    const secondHandler = vi.fn();
    const event: EventType = "blur";

    const { rerender } = renderHook(
      ({ handler }) => useAttachEvent(component, event, handler),
      { initialProps: { handler: firstHandler } }
    );
    act(() => {
      if (typeof actuator === "function") {
        actuator("foo");
      }
    });
    expect(firstHandler).toHaveBeenCalledWith("foo");

    rerender({ handler: secondHandler });
    act(() => {
      if (typeof actuator === "function") {
        actuator("bar");
      }
    });
    expect(secondHandler).toHaveBeenCalledWith("bar");
  });

  it("does nothing if component is null", () => {
    const handler = vi.fn();
    const event: EventType = "mount";
    renderHook(() => useAttachEvent(null, event, handler));
    // No error, no attach
  });

  it("does nothing if callback is not a function", () => {
    const component = {
      on: vi.fn(),
      off: vi.fn(),
    } as unknown as Component;
    renderHook(() => useAttachEvent(component, "focus", undefined));
    expect(component.on).not.toHaveBeenCalled();
  });
});
