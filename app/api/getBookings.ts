import { TBooking } from "../utils/types";

const getBookings = async (sorter: string) => {
  let bookings!: TBooking[];
  console.log('3. called books with', sorter)
  await fetch(
    `/api/bookings?sort_by=${sorter}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.bookings);
      bookings = data.bookings;
    })
    .catch((err) => {
      console.log(err);
    });

  return bookings;
};

export default getBookings;
