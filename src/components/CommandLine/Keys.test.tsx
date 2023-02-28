import { render, screen } from "@testing-library/react";
import { Keys } from "./Keys";

describe("Keys component", () => {
  const keys = "Ctrl+Alt+Delete";
  const keysWithThen = "Ctrl+Alt Delete";

  it("renders the correct number of characters", () => {
    const charCount = keys.replace(/\+/g, "").length;
    render(<Keys keys={keys} />);
    const charElements = screen.queryAllByTestId("char");
    expect(charElements).toHaveLength(charCount);
  });

  it("renders the 'then' text", () => {
    render(<Keys keys={keysWithThen} />);
    const thenElements = screen.queryAllByTestId("then");
    expect(thenElements).toHaveLength(1);
  });
});
