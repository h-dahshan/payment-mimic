import { renderHook } from "@testing-library/react";

import { usePrevious } from "./usePrevious";

describe("usePrevious", () => {
  it("should return the initial value on first render", async () => {
    const { result: init } = renderHook(() => usePrevious(1));

    expect(init.current).toBe(1);
  });

  it("returns the previous value after updates", () => {
    const { result: prevState, rerender } = renderHook(
      ({ value }) => usePrevious(value),
      { initialProps: { value: 1 } }
    );

    rerender({ value: 2 });
    expect(prevState.current).toBe(1);

    rerender({ value: 3 });
    expect(prevState.current).toBe(2);
  });
});
