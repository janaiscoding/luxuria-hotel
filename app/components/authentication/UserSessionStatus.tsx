import { useSession } from "next-auth/react";
import ProfileClient from "../navigation/ProfileClient";
import AuthComponent from "./AuthComponent";

const UserSessionStatus = () => {
  const session = useSession();

  return (
    <>
      {session.status === "loading" && "Loading"}
      {session.status === "authenticated" && (
        <ProfileClient user={session.data.user} />
      )}
      {session.status === "unauthenticated" && <AuthComponent />}
    </>
  );
};

export default UserSessionStatus;
