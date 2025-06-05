import { render, screen, waitFor } from "@testing-library/react";

import { ComponentsProvider } from "./ComponentsProvider";
import { useSdk } from "@lib/hooks/useSdk/useSdk";
import { useSdkComponents } from "@lib/hooks/useSdkComponents/useSdkComponents";

import { sdkMock } from "@/test/__fixtures__/_types";

describe("ComponentsProvider", () => {
  function Consumer() {
    const sdk = useSdk();
    const sdkComponents = useSdkComponents();

    return (
      <>
        <div data-testid="sdk">{sdk ? "present" : "null"}</div>
        <div data-testid="sdk-components">
          {sdkComponents ? "present" : "null"}
        </div>
      </>
    );
  }

  it("provides sdk and sdkComponents when sdk is sync", () => {
    render(
      <ComponentsProvider sdk={sdkMock}>
        <Consumer />
      </ComponentsProvider>
    );
    expect(screen.getByTestId("sdk").textContent).toBe("present");
    expect(screen.getByTestId("sdk-components").textContent).toBe("present");
  });

  it("provides nulls when sdk is null", () => {
    render(
      <ComponentsProvider sdk={null}>
        <Consumer />
      </ComponentsProvider>
    );
    expect(screen.getByTestId("sdk").textContent).toBe("null");
    expect(screen.getByTestId("sdk-components").textContent).toBe("null");
  });

  it("provides sdk and sdkComponents when sdk is async (promise)", async () => {
    const asyncSdk = Promise.resolve(sdkMock);
    render(
      <ComponentsProvider sdk={asyncSdk}>
        <Consumer />
      </ComponentsProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("sdk").textContent).toBe("present");
      expect(screen.getByTestId("sdk-components").textContent).toBe("present");
    });
  });

  it("warns if sdk prop changes after initial set", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { rerender } = render(
      <ComponentsProvider sdk={sdkMock}>
        <Consumer />
      </ComponentsProvider>
    );
    rerender(
      <ComponentsProvider sdk={{ ...sdkMock }}>
        <Consumer />
      </ComponentsProvider>
    );
    expect(spy).toHaveBeenCalledWith(
      "You cannot change the `sdk` prop after setting it."
    );
    spy.mockRestore();
  });
});
