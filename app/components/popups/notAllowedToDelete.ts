import { toast } from "@/components/ui/use-toast";

export default function notAllowedToDelete() {
   return toast({
        title: "Not allowed to delete!",
        variant: "destructive",
        description: `You are not the creator of this booking.`,
      });
}