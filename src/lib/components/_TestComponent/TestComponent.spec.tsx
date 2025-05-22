import { render, screen } from "@testing-library/react";

import { TestComponent } from "./TestComponent";

describe("TestComponnet", () => {
  it("should render hello msg to a user", () => {
    const name = "Dahshan";

    render(<TestComponent name={name} />);
    expect(screen.getByText("Hello Dahshan")).toBeInTheDocument();
  });
});
