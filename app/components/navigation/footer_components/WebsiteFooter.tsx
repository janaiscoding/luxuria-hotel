import Socials from "./Socials";

const WebsiteFooter = () => {
  return (
    <div className="border-t border-zinc-600 flex justify-between pt-10">
      <div className="flex gap-4 items-baseline">
        <h1 className="text-3xl font-bold text-neutral-50">Luxuria</h1>
        <p className="text-zinc-400 align-baseline">
          © {new Date().getFullYear()} Luxuria Hotel
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default WebsiteFooter;
