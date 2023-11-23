import { Input } from "@/components/ui/input";
const Newsletter = () => {
  return (
    <div className="flex flex-col gap-4 text-md">
      <p>Sign up for our newsletter</p>
      <Input type="email" placeholder="Your email..." className="border-slate-50/20" />
    </div>
  );
};
export default Newsletter;
