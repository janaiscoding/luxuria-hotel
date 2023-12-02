import { TBooking } from "@/app/utils/types";
import { format } from "date-fns";
import CloseIcon from "../ui/close-icon";
import { toast } from "@/components/ui/use-toast";
import notAllowedToDelete from "../popups/notAllowedToDelete";

const BookingItem = ({
  booking,
  onDelete,
  sessionUser,
}: {
  booking: TBooking;
  onDelete: (id: number) => void;
  sessionUser: number | undefined;
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
      <p
        className="border border-slate-800 p-2 basis-full hover:cursor-pointer hover:text-orange-600"
        onClick={handleDelete}
      >
        Cancel
      </p>
    </div>
  );
};

export default BookingItem;
