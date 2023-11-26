import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Rooms from "../components/rooms_section/Rooms";
import SelectorTab from "../components/rooms_section/SelectorTab";

describe("Rooms component", () => {
  it("Renders rooms section title", () => {
    render(<Rooms />);
    const title = screen.getByRole("heading", { name: /rooms & suites/i });
    expect(title).toBeInTheDocument();
  });
  it("Renders selector tab with the list of 4 room categories", () => {
    render(<Rooms />);
    const list = screen.getAllByRole("listitem").length;
    expect(list).toEqual(4);
  });
});
