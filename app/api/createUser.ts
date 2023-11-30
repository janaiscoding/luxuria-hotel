import { toast } from "@/components/ui/use-toast";

const createUser = (name: string, email: string, password: string) => {
  fetch(`/api/users/?name=${name}&email=${email}&password=${password}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   toast({
      //     title: `${data.message}`,
      //     variant: "success",
      //     description: `The reservation for ${guests} was placed successfully.`,
      //   });
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
