import { toast } from "@/components/ui/use-toast";
import { SetStateAction } from "react";

const saveGithubAcctoDb = (name: string, email: string , setter: React.SetStateAction<number | null | undefined>) => {
  fetch(`/api/users/?name=${name}&email=${email}&password=${email}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        toast({
          title: data.error,
          variant: "destructive",
          description: `Please log in into your account or sign up using a different email.`,
        });
      }
      console.log(data)
      if (data.message) {
 
        toast({
          title: data.message,
          variant: "success",
          description: `Welcome to Luxuria Hotel.`,
        });
      }
    })
    .catch((err) => {
      toast({
        title: "Unexpected Error :(",
        variant: "destructive",
        description: `Sorry! A server error has occured, please try again later.`,
      });
    });
};
export default saveGithubAcctoDb;
