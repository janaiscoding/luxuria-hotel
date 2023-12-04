/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookingForm from "../../components/ui/booking-form";

describe("Booking form component", () => {
  it("Renders the correct booking form", () => {
    render(<BookingForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("Contains check in label", () => {
    render(<BookingForm />);
    const checkInLabel = screen.getByText(/check in/i)
    expect(checkInLabel).toBeInTheDocument();
  });
  it("Contains check out label", () => {
    render(<BookingForm />);
    const checkOutLabel = screen.getByText(/check out/i)
    expect(checkOutLabel).toBeInTheDocument();
  });
  it("Contains book now button", () => {
    render(<BookingForm />);
    const bookNowButton = screen.getByRole("button", {
        name: /book now/i
    })
    expect(bookNowButton).toBeInTheDocument();
  });
});
