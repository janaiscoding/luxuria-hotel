import { toast } from "@/components/ui/use-toast";

const createReservation = async (
  guests: number,
  arrivalDate: Date,
  departureDate: Date
) => {
  // all must be present
  // todo: make sure arrival < departure
  // Call the api route from @app/api/create-booking/route.ts with the specified method
  const res = await fetch(
    `/api/create-booking/?guests=${guests}&arrival=${arrivalDate}&departure=${departureDate}`,
    {
      method: "POST",
    }
  );
  // Success
  if (res.ok) {
    // Display UI toast notification
    toast({
      title: "We received your reservation",
      variant: "success",
      description: `Reservation for ${guests} persons, on the date of ${arrivalDate} was submitted successfully!`,
    });
  } else {
    // Db error
    toast({
      title: "Unexpected Error.",
      variant: "destructive",
      description: `Sorry! A server error has occured, please try again later.`,
    });
  }
};
export default createReservation;
