import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countPElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countPElement).toBeInTheDocument();

    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButtonElement).toBeInTheDocument();

    const amountInputElement = screen.getByRole("spinbutton");
    expect(amountInputElement).toBeInTheDocument();

    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });
    expect(setButtonElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countPElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countPElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking button", async () => {
    render(<Counter />);

    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonElement);

    const countPElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countPElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking button twice", async () => {
    render(<Counter />);

    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(incrementButtonElement);

    const countPElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countPElement).toHaveTextContent("2");
  });

  test("renders a count of 10 when it is inputed in the number-type input and then set button is clicked", async () => {
    render(<Counter />);

    const amountInputElement = screen.getByRole("spinbutton");

    await user.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);

    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });

    await user.click(setButtonElement);

    const countPElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countPElement).toHaveTextContent(/^10$/);
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);

    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    const amountInputElement = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementButtonElement).toHaveFocus();

    await user.tab();
    expect(amountInputElement).toHaveFocus();

    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
