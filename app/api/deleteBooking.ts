const deleteBooking = (id: number) => {
  fetch(`/api/bookings/?id=${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default deleteBooking;
