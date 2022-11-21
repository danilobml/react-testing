import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Users } from "./Users";
import { mockData } from "../../mocks/mockData";
import { server } from "../../mocks/server";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);

    const headingElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(mockData.length);
  });

  test("renders an error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const errorMsgElement = await screen.findByText(/Error/);
    expect(errorMsgElement).toBeInTheDocument();
  });
});
