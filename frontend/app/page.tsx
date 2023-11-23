import About from "./components/about_section/About";
import Header from "./components/navigation/Header";
import Hero from "./components/Hero";
import Motive from "./components/Motive";
import Rooms from "./components/rooms_section/Rooms";
import SocialProof from "./components/social_proof/SocialProof";
import Contact from "./components/contact/Contact";
import Footer from "./components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GET } from "./api/get-all-bookings/route";

export default function Home() {
  return (
    <main className="font-lora">
      <Header />
      <Hero />
      <Fetcher />
      <Motive />
      <About />
      <Rooms />
      <SocialProof />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
const Fetcher = async () => {
  const bookings = await GET();
  console.log(bookings);
  return <div>hi</div>;
};
// Color pallete:
// white: slate-50, grey: gray-300
// black: neutral-900, hover: neutral-800
// orange: orange-300 hover: orange-400
