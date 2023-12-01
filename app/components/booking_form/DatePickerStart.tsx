"use client";

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
import { useEffect, useState } from "react";

export function DatePickerStart({
  date,
  end,
  setter,
  content,
}: {
  date: Date | undefined;
  end: Date | undefined;
  setter: React.Dispatch<React.SetStateAction<Date | undefined>>;
  content: string;
}) {
  // If end date isn't provided, we just can't select days before today
  // If end date is provided, we can only pick days from today to end

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
          disabled={
            end
              ? {
                  before: new Date(), // anything before today (can't book in the past obviously)
                  after: end,
                }
              : { before: new Date() }
          }
          mode="single"
          selected={date}
          onSelect={setter}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
