import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "@/app/components/authentication/SignupForm";


describe("Sign up form", () => {
  it("Renders the correct form", () => {
    render(<SignupForm />);
    const form = screen.getByRole("signup-form");
    expect(form).toBeInTheDocument();
  });
});
