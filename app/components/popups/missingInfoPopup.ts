import { toast } from "@/components/ui/use-toast";

export default function missingInfoPopup() {
   return toast({
        title: "Missing information!",
        variant: "destructive",
        description: `Please complete all the required fields!`,
      });
}