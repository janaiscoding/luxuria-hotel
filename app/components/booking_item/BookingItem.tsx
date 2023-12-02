import { TBooking } from "@/app/utils/types";
import { format } from "date-fns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BookingItem = ({
  booking,
  onDelete,
}: {
  booking: TBooking;
  onDelete: (id: number) => void;
}) => {
  const departureDate = format(
    new Date(booking.departure_date),
    "cccc, dd MMM yyyy"
  );

  const arrivalDate = format(
    new Date(booking.arrival_date),
    "cccc, dd MMM yyyy"
  );
  const handleDelete = () => {
    // in order to secure this, we need to make sure that we're on the correct user
    // we do not want to let other users delete other people's bookings do we?
    // we already know we can delete with our booking_id BUT we validate on our client session that this is correct and allowed
    onDelete(booking.booking_id);
  };
  return (
    <div className="flex text-center">
      <p className="border border-slate-800 p-2 basis-full">{arrivalDate}</p>
      <p className="border border-slate-800 p-2 basis-full">{departureDate}</p>
      <p className="border border-slate-800 p-2 basis-full">
        {booking.guests_number}{" "}
      </p>

      <Dialog>
        <DialogTrigger className="border border-slate-800 p-2 basis-full hover:cursor-pointer hover:text-orange-600">
          Cancel Reservation
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will cancel your reservation.
            </DialogDescription>
            <div className="flex gap-2 justify-evenly my-4">
                <DialogClose asChild>
                  <button
                    className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800 rounded-md"
                    onClick={handleDelete}
                  >
                    Yes
                  </button>
                </DialogClose>

                <DialogClose asChild>
                  <button className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800 rounded-md">
                    NO
                  </button>
                </DialogClose>
              </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingItem;
