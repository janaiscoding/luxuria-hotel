import { toast } from "@/components/ui/use-toast";
import serverErrorPopup from "../components/popups/serverErrorPopup";

const createReservation = (
  guests: number,
  arrivalDate: Date,
  departureDate: Date,
  userID: number,
  handleSuccess: () => void
) => {
  // All must be present
  // todo: make sure arrival < departure -- complete.
  // Call the api route from @app/api/bookings/route.ts with the specified method
  fetch(
    `/api/bookings/?guests=${guests}&arrival=${arrivalDate}&departure=${departureDate}&userID=${userID}`,
    {
      method: "POST",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "Your booking was created!") {
        toast({
          title: `${data.message}`,
          variant: "success",
          description: `Your reservation for ${guests} was placed successfully.`,
        });
        handleSuccess()
      } else {
        serverErrorPopup();
      }
    })
    .catch(() => {
      serverErrorPopup();
    });
};
export default createReservation;
