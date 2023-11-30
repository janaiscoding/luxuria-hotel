
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "@/app/components/authentication/SignupForm";


describe("Sign up form", () => {
  it("Renders the correct heading title", () => {
    render(<SignupForm />);

  });

});
