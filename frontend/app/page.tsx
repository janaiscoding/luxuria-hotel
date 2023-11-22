import About from "./components/about-main";
import AboutMain from "./components/about-main";
import Stats from "./components/about_section/stats";
import Header from "./components/navigation/Header";
import Hero from "./components/Hero";
import Motive from "./components/Motive";
import Rooms from "./components/rooms_section/Rooms";
import Testimonials from "./components/testimonial_section/Testimonials";
import BookingForm from "./components/ui/booking-form";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Motive />
      <About />
      <Rooms />
      <Testimonials />
    </main>
  );
}

// Color pallete: 
// white: slate-50, grey: gray-300
// black: neutral-900, hover: neutral-800
// orange: orange-300 hover: orange-400