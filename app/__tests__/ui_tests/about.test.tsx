import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../components/about_section/About";

describe("About Component", () => {
  it("Renders the correct heading title", () => {
    render(<About />);
    const aboutTitle = screen.getByRole("heading").textContent;
    expect(aboutTitle).toMatch(/perfect/i);
  });
  it("Contains an image", () => {
    render(<About />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
