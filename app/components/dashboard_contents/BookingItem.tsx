import { TBooking } from "@/app/utils/types";
import { format } from "date-fns";
import CancelReservationPopup from "./CancelReservationPopup";

const BookingItem = ({
  booking,
  onDelete,
}: {
  booking: TBooking;
  onDelete: (id: number) => void;
}) => {
  const departureDate = format(
    new Date(booking.departure_date),
    "dd-MMM-yyyy"
  );

  const arrivalDate = format(
    new Date(booking.arrival_date),
    "dd-MMM-yyyy"
  );

  return (
    <div className="flex text-center">
      <p className="border border-slate-200 p-2 basis-full">{arrivalDate}</p>
      <p className="border border-slate-200 p-2 basis-full">{departureDate}</p>
      <p className="border border-slate-200 p-2 basis-full">
        {booking.guests_number}{" "}
      </p>

      <CancelReservationPopup
        onDelete={onDelete}
        booking_id={booking.booking_id}
      />
    </div>
  );
};

export default BookingItem;
