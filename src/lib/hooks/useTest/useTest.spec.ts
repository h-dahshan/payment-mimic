import { renderHook, act } from "@testing-library/react";

import { useTest } from "./useTest";

describe("useTest", () => {
  it("should hold passed init state", () => {
    const { result } = renderHook(() => useTest({ name: "Dahshan" }));

    expect(result.current.testState.name).toBe("Dahshan");
  });

  it("should change the state", () => {
    const { result } = renderHook(() => useTest({ name: "Dahshan" }));
    act(() => result.current.setTestState({ name: "Bimboo" }));

    expect(result.current.testState.name).toBe("Bimboo");
  });
});
