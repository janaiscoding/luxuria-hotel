import { TBooking } from "../utils/types";

const getBookings = async () => {
  let bookings!: TBooking[];

  await fetch(`/api/bookings`)
    .then((res) => res.json())
    .then((data) => {
      bookings = data.bookings;
    })
    .catch((err) => {
      console.log(err);
    });

  return bookings;
};

export default getBookings;
