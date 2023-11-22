/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../components/Hero";

describe("Hero Component", () => {
  it("Renders the correct heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /enjoy a unique experience/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("Renders a link for /rooms", () => {
    render(<Hero />);
    const link = screen.getByRole("link");
    expect(link.textContent).toMatch(/rooms/i);
    expect(link).toHaveAttribute("href", "/rooms");
  });
});
