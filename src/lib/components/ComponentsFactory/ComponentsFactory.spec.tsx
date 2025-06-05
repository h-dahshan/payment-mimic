import { render } from "@testing-library/react";

import * as hooks from "@lib/hooks";
import {
  sdkComponentsMock,
  numberComponentMock,
  expiryComponentMock,
  cvvComponentMock,
  cardComponentMock,
} from "@/test/__fixtures__/_types";

import { createComponent } from "./ComponentsFactory";

type ComponentType = "number" | "expiry" | "cvv" | "card";
const componentMocks = {
  number: numberComponentMock,
  expiry: expiryComponentMock,
  cvv: cvvComponentMock,
  card: cardComponentMock,
};

describe("ComponentsFactory", () => {
  const useAttachEvent = vi.fn();
  const useSdkComponents = vi.fn(() => sdkComponentsMock);

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    vi.spyOn(hooks, "useAttachEvent").mockImplementation(useAttachEvent);
    vi.spyOn(hooks, "useSdkComponents").mockImplementation(useSdkComponents);
  });

  (Object.keys(componentMocks) as ComponentType[]).forEach((type) => {
    it(`creates and mounts a ${type} component and attaches all events`, () => {
      const MyComponent = createComponent(type);
      const props = {
        id: `${type}-id`,
        className: `${type}-class`,
        onMount: vi.fn(),
        onFocus: vi.fn(),
        onChange: vi.fn(),
        onBlur: vi.fn(),
        onEscape: vi.fn(),
      };
      const { container } = render(<MyComponent {...props} />);

      expect(useSdkComponents).toHaveBeenCalled();
      expect(container.querySelector(`#${type}-id`)).toHaveClass(
        `${type}-class`
      );

      expect(useAttachEvent).toHaveBeenCalledWith(
        componentMocks[type],
        "mount",
        props.onMount
      );
      expect(useAttachEvent).toHaveBeenCalledWith(
        componentMocks[type],
        "focus",
        props.onFocus
      );
      expect(useAttachEvent).toHaveBeenCalledWith(
        componentMocks[type],
        "change",
        props.onChange
      );
      expect(useAttachEvent).toHaveBeenCalledWith(
        componentMocks[type],
        "blur",
        props.onBlur
      );
      expect(useAttachEvent).toHaveBeenCalledWith(
        componentMocks[type],
        "escape",
        props.onEscape
      );
    });
  });

  it("does not attach events if no callbacks are provided", () => {
    const MyComponent = createComponent("number");
    render(<MyComponent />);

    expect(useAttachEvent).toHaveBeenCalledWith(
      numberComponentMock,
      "mount",
      undefined
    );
    expect(useAttachEvent).toHaveBeenCalledWith(
      numberComponentMock,
      "focus",
      undefined
    );
    expect(useAttachEvent).toHaveBeenCalledWith(
      numberComponentMock,
      "change",
      undefined
    );
    expect(useAttachEvent).toHaveBeenCalledWith(
      numberComponentMock,
      "blur",
      undefined
    );
    expect(useAttachEvent).toHaveBeenCalledWith(
      numberComponentMock,
      "escape",
      undefined
    );
  });
});
