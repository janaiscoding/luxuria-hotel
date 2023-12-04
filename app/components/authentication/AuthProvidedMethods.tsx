import { signIn } from "next-auth/react";
import InfoPopup from "../ui/InfoPopup";

const AuthProvidedMethods = () => {
  const handleGithub = () => {
    signIn("github", { callbackUrl: "/" });
  };
  return (
    <div className="flex justify-evenly w-full">
      {/* <button
        className="basis-full border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
        onClick={handleGithub}
      >
        GitHub*
      </button> */}
      <InfoPopup
        title="GitHub*"
        className={
          "basis-full border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md hover:cursor-pointer text-center"
        }
        content="The project is still under development, so the GitHub app is linked with localhost. The correct callback link should be available soon."
      />

      <button
        onClick={() =>
          signIn("credentials", {
            email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
            password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
            callbackUrl: "/",
            redirect: false,
          })
        }
        className="basis-full border border-solid h-9 py-1 px-3 bg-neutral-900 text-slate-50 hover:bg-neutral-800 shadow-sm rounded-md"
        type="submit"
      >
        Demo
      </button>
    </div>
  );
};

export default AuthProvidedMethods;
