import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const InfoPopup = ({
  title,
  className,
  content,
}: {
  title: string;
  className: string;
  content: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className={className}>{title}</button>
      </PopoverTrigger>
      <PopoverContent className="w-80 z-50 bg-slate-50 text-md p-2 rounded-md shadow-md border border-solid border-orange-800">
        <p>{content}</p>
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopup;
