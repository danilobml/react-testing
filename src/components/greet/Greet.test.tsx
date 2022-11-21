import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders Hello", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders name props", () => {
    render(<Greet name="name" />);
    const textElement = screen.getByText("Hello name");
    expect(textElement).toBeInTheDocument();
  });
});
