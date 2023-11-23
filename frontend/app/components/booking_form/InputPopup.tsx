import { Input } from "@/components/ui/input";
import { SetStateAction } from "react";

export function InputPopup({
  setter,
}: {
  setter: React.Dispatch<SetStateAction<number | undefined>>;
}) {
  return (
    <Input
      type="number"
      placeholder="Persons"
      className="w-full"
      onChange={(e) => setter(parseInt(e.target.value))}
    />
  );
}
