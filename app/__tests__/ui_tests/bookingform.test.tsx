/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import BookingForm from "@/app/components/booking_form/BookingForm";

describe("Booking form component", () => {
  it("Renders the correct booking form", () => {
    render(<BookingForm />);
    const form = screen.getByRole("form", { name: "Booking form" });
    expect(form).toBeInTheDocument();
  });
  it("Contains check in label and input", () => {
    render(<BookingForm />);
    const checkInLabel = screen.getByText(/check in/i);
    expect(checkInLabel).toBeInTheDocument();
  });
  it("Contains check out label and input", () => {
    render(<BookingForm />);
    const checkOutLabel = screen.getByText(/check out/i);
    expect(checkOutLabel).toBeInTheDocument();
  });
  it("Contains guests label and input", () => {
    render(<BookingForm />);
    const guestsLabel = screen.getByRole("combobox");
    expect(guestsLabel).toBeInTheDocument();
  });
  it("Contains book now button", () => {
    render(<BookingForm />);
    const bookNowButton = screen.getByRole("button", {
      name: /book/i,
    });
    expect(bookNowButton).toBeInTheDocument();
  });
  // it("Pressing button", async () => {
  //   const onSubmit = jest.fn();
  //   const user = userEvent.setup();
  //   render(<BookingForm />);
  //   const bookNowButton = screen.getByRole("button", {
  //     name: /book/i,
  //   });
  //   await user.selectOptions()
  //   await user.click(bookNowButton);

  //   expect(bookNowButton).toHaveBeenCalled();
  // });
});
