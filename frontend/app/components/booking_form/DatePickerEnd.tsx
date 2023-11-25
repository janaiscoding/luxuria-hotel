"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerEnd({
  start,
  date,
  setter,
  content,
}: {
  start: Date | undefined;
  date: Date | undefined;
  setter: React.Dispatch<React.SetStateAction<Date | undefined>>;
  content: string;
}) {
  //https://react-day-picker.js.org/basics/modifiers#disabling-days
  const disabledDays = [
    new Date(2023, 5, 10),
    new Date(2023, 5, 12),
    new Date(2023, 5, 20),
    { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{content}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={disabledDays}
          mode="single"
          selected={date}
          onSelect={setter}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
