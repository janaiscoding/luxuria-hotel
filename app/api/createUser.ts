import { toast } from "@/components/ui/use-toast";

const createUser = (name: string, email: string, password: string) => {
  const userObj = { name, email, password };
  
  fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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
