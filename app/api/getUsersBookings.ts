import { SetStateAction } from "react";
import { TBooking } from "../utils/types";

const getUsersBookings = (
  userID: number,
  setter: React.Dispatch<SetStateAction<TBooking[]>>
) => {
  fetch(`/api/bookings/?user_id=${userID}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.bookings) {
        setter(data.bookings);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUsersBookings;
