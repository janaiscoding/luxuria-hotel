import { TBooking } from "@/app/utils/types";
import { format } from "date-fns";
import CloseIcon from "../ui/close-icon";

const BookingItem = ({ booking }: { booking: TBooking }) => {
  const departureDate = format(
    new Date(booking.departure_date),
    "cccc, dd MMM yyyy"
  );

  const arrivalDate = format(
    new Date(booking.arrival_date),
    "cccc, dd MMM yyyy"
  );

  return (
    <div className="flex gap-1 bg-slate-700 text-slate-50 p-2 rounded-md ">
      <p>
        {arrivalDate} - {departureDate},
      </p>
      <p>for {booking.guests_number} people</p>
      <CloseIcon />
    </div>
  );
};

export default BookingItem;
