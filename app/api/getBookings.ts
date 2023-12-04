import { TBooking } from "../utils/types";

const getBookings = async (sortParam: string) => {
  let bookings!: TBooking[];

  await fetch(`/api/bookings?sort_by=${sortParam}`)
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
