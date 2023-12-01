import { toast } from "@/components/ui/use-toast";

export default function loginPopup () {
    return toast({
        title: "Please sign in! :) Sorry~",
        variant: "destructive",
        description: `Sign in in top right of the screen to be able to place a reservation!`,
      });
}

