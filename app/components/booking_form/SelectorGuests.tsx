import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SetStateAction } from "react";

const SelectorGuests = ({
  myKey,
  guestsNumber,
  setter,
}: {
  myKey: number;
  guestsNumber: number | undefined;
  setter: React.Dispatch<SetStateAction<number | undefined>>;
}) => {
  return (
    <Select
      key={myKey}
      value={guestsNumber?.toString()}
      onValueChange={(value) => setter(parseInt(value))}
    >
      <SelectTrigger className="w-[280px] text-muted-foreground hover:text-accent-foreground">
        <SelectValue placeholder="Persons" />
      </SelectTrigger>
      <SelectContent className="hover:cursor-pointer">
        <SelectItem value="1" className="hover:cursor-pointer">
          1 person
        </SelectItem>
        <SelectItem value="2" className="hover:cursor-pointer">
          2 persons
        </SelectItem>
        <SelectItem value="3" className="hover:cursor-pointer">
          3 persons
        </SelectItem>
        <SelectItem value="4" className="hover:cursor-pointer">
          4 persons
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectorGuests;
