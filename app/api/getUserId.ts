const getUserIdFromEmail =  (email: string | null | undefined) => {
   fetch(`/api/users/${email}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      return data.userID.user_id;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUserIdFromEmail;
