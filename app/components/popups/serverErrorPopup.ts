import { toast } from "@/components/ui/use-toast";

export default function serverErrorPopup() {
  return toast({
    title: "Unexpected Error :(",
    variant: "destructive",
    description: `Sorry! A server error has occured, please try again later.`,
  });
}
