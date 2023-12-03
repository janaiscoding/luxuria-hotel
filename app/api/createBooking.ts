import { toast } from "@/components/ui/use-toast";
import serverErrorPopup from "../components/popups/serverErrorPopup";
import loginPopup from "../components/popups/loginPopup";

const createBooking = (
  bookingObj: {
    guestsNumber: number;
    arrivalDate: Date;
    departureDate: Date;
  },
  handleSuccess: () => void
) => {
  // Call the api route from @app/api/bookings/route.ts with the specified method
  fetch(`/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingObj),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        toast({
          title: `${data.message}`,
          variant: "success",
          description: `Your reservation for ${bookingObj.guestsNumber} was placed successfully.`,
        });
        handleSuccess();
      } else {
        loginPopup();
      }
    })
    .catch((err) => {
      // console.log(err);
      serverErrorPopup();
      console.log(err);
    });
};
export default createBooking;
