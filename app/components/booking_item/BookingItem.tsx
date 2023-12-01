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
    <div className="flex text-center">
      <p className="border border-slate-800 p-2 basis-full">{arrivalDate}</p>
      <p className="border border-slate-800 p-2 basis-full">{departureDate}</p>
      <p className="border border-slate-800 p-2 basis-full">{booking.guests_number} </p>
      <p className="border border-slate-800 p-2 basis-full hover:cursor-pointer hover:text-orange-600">
        Cancel
      </p>
    </div>
  );
};

export default BookingItem;
