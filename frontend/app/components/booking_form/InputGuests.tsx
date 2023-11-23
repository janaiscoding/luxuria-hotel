import { Input } from "@/components/ui/input";
import { SetStateAction } from "react";

export function InputGuests({
  setter,
}: {
  setter: React.Dispatch<SetStateAction<number | undefined>>;
}) {
  return (
    <Input
      type="number"
      placeholder="Persons"
      onChange={(e) => setter(parseInt(e.target.value))}
    />
  );
}
