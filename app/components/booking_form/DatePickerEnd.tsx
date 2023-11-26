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
import { DateBefore } from "react-day-picker";

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
  // https://react-day-picker.js.org/basics/modifiers#disabling-days
  // On departure I want to disable the option to pick from the past until the arrival date (start) if specified
  // If not specified, disable all days until today.
  const beforeMatcher: DateBefore = start
    ? { before: start }
    : { before: new Date() };

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
          disabled={beforeMatcher}
          mode="single"
          selected={date}
          onSelect={setter}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
