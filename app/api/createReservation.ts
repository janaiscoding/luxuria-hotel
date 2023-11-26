import { toast } from "@/components/ui/use-toast";

const createReservation = (
  guests: number,
  arrivalDate: Date,
  departureDate: Date
) => {
  // All must be present
  // todo: make sure arrival < departure -- complete.
  // Call the api route from @app/api/create-booking/route.ts with the specified method
  fetch(
    `/api/create-booking/?guests=${guests}&arrival=${arrivalDate}&departure=${departureDate}`,
    {
      method: "POST",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      toast({
        title: `${data.message}`,
        variant: "success",
        description: `The reservation for ${guests} was placed successfully.`,
      });
    })
    .catch((err) => {
      toast({
        title: "Unexpected Error :(",
        variant: "destructive",
        description: `Sorry! A server error has occured, please try again later.`,
      });
    });
};
export default createReservation;
