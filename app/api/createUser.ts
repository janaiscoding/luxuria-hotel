import { toast } from "@/components/ui/use-toast";

const createUser = (name: string, email: string, password: string) => {
  fetch(`/api/users/?name=${name}&email=${email}&password=${password}`, {
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
export default createUser;
