import Image from "next/image";
import lobby from "@/public/gallery/lobby.jpg";
import ContactInfo from "./ContactInfo";
const Contact = () => {
  return (
    <section
      id="contact"
      className="flex lg:flex-row flex-col gap-10 py-0 px-0"
    >
      <Image src={lobby} alt="lobby" className="w-1/2"/>
      <ContactInfo />
    </section>
  );
};

export default Contact;
