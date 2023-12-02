import { toast } from "@/components/ui/use-toast";

const deleteBooking = (id: number) => {
  fetch(`/api/bookings/?id=${id}`, {
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
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default deleteBooking;
