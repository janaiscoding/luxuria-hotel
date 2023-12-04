import { toast } from "@/components/ui/use-toast";

const deleteBooking = (id: number, fetchBookings: () => void) => {
  fetch(`/api/bookings/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        toast({
          title: `${data.message}`,
          variant: "success",
          description: `Hopefully you will book with us in the future again!`,
        });
        fetchBookings();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default deleteBooking;
