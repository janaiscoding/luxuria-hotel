import About from "./components/about-main";
import AboutMain from "./components/about-main";
import Stats from "./components/about_section/stats";
import Header from "./components/header";
import Hero from "./components/hero-main";
import Motive from "./components/motive-main";
import Rooms from "./components/rooms-main";
import Testimonials from "./components/testimonials-main";

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
