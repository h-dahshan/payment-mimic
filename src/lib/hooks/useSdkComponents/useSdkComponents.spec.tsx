import { render } from "@testing-library/react";

import { useSdkComponents } from "./useSdkComponents";

import { ComponentsContext, ComponentsContextValue } from "@lib/contexts";
import { sdkComponentsMock } from "@/test/__fixtures__/_types";

function WrapperWithHook() {
  const sdkComponents = useSdkComponents();
  return (
    <div data-testid="sdk-components">{sdkComponents ? "truthy" : "null"}</div>
  );
}

describe("useSdkComponents", () => {
  it("throws if used outside of ComponentsContext.Provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<WrapperWithHook />)).toThrow(
      "SDK's Components is not available here, hence, you cannot use `useSdkComponents!`"
    );
    spy.mockRestore();
  });

  it("returns sdkComponents if provided in context", () => {
    const value: ComponentsContextValue = {
      sdk: null,
      sdkComponents: sdkComponentsMock,
    };
    const { getByTestId } = render(
      <ComponentsContext.Provider value={value}>
        <WrapperWithHook />
      </ComponentsContext.Provider>
    );
    expect(getByTestId("sdk-components").textContent).toBe("truthy");
  });
});
