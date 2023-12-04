import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "@/app/components/authentication/SignupForm";
import exp from "constants";

describe("Sign up form", () => {
  it("Renders the correct form", () => {
    render(<SignupForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
