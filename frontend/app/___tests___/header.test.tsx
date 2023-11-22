/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../components/navigation/Header";

describe("Header, navigation component", () => {
  it("Renders the correct logo", () => {
    render(<Header />);
    const logo = screen.getByRole("link", {
      name: /luxuria/i,
    });
    expect(logo).toBeInTheDocument();
  });
  it("Renders the list of 4 navigation list elements", () => {
    render(<Header />);
    const list = screen.getAllByRole("listitem").length;
    expect(list).toEqual(4);
  });
  it("Contains sign in button", () => {
    render(<Header />);
    const button = screen.getByRole("button", {
      name: /sign in/i,
    });
    expect(button).toBeInTheDocument();
  });
});
