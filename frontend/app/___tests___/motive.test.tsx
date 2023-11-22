/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Motive from "../components/Motive";

describe("Motive component", () => {
  it("Renders the heading for the motives", () => {
    render(<Motive />);
    const title = screen.getByRole("heading", { name: /why choose/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders the list which contains 3 motives", () => {
    render(<Motive />);
    const list = screen.getAllByRole("listitem").length;
    expect(list).toEqual(3);
  });
});
