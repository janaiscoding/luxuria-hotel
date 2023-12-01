import { Input } from "@/components/ui/input";
import { SetStateAction } from "react";

export function InputGuests({
  setter,
}: {
  setter: React.Dispatch<SetStateAction<number | undefined>>;
}) {
  // Might change to dropdown selection group.
  // Because usually hotel reservations are from 1 to 4 persons.
  const handleChange = (e: any) => {
    setter(parseInt(e.target.value));
  };

  return (
    <Input
      id="IGN"
      type="number"
      placeholder="Persons"
      className="w-1/3"
      min={1}
      max={4}
      onChange={(e) => handleChange(e)}
    />
  );
}
