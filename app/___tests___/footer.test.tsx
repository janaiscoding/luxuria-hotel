import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/navigation/Footer";

describe("Footer component", () => {
  it("Renders the website footer correctly", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});


