type TUser = {
  name: string;
  email: string;
};

type TBooking = {
  id: number;
  arrivaldate: string;
  departuredate: string;
  guestsnumber: number;
};
export type { TUser, TBooking };
