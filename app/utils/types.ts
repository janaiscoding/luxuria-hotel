type TUser = {
  name: string;
  email: string;
};

type TBooking = {
  booking_id: number;
  arrival_date: string;
  departure_date: string;
  guests_number: number;
  user_id: number;
};
export type { TUser, TBooking };
