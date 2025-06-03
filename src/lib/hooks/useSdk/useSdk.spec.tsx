import { render } from "@testing-library/react";

import { useSdk } from "./useSdk";

import { ComponentsContext, ComponentsContextValue } from "@lib/contexts";
import { sdkMock, sdkComponentsMock } from "@/test/__fixtures__/_types";

function WrapperWithHook() {
  const sdk = useSdk();
  return <div data-testid="sdk">{sdk ? "truthy" : "null"}</div>;
}

describe("useSdk", () => {
  it("throws if used outside of ComponentsContext.Provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<WrapperWithHook />)).toThrow(
      "SDK is not available here, hence, you cannot use `useSdk`!"
    );
    spy.mockRestore();
  });

  it("returns sdk if provided in context", () => {
    const value: ComponentsContextValue = {
      sdk: sdkMock,
      sdkComponents: sdkComponentsMock,
    };
    const { getByTestId } = render(
      <ComponentsContext.Provider value={value}>
        <WrapperWithHook />
      </ComponentsContext.Provider>
    );
    expect(getByTestId("sdk").textContent).toBe("truthy");
  });
});
