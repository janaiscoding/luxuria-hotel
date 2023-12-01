const getUserIdFromEmail = async (email: string ) => {
  let userID;
 await fetch(`/api/users/${email}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      userID = data.userID.user_id;
      // create github acc
      //@ts-ignore
    })
    .catch((err) => {
      console.log(err);
    });

  return userID;
};

export default getUserIdFromEmail;
