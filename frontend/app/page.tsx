
import BookingForm from "./components/BookingForm";
import Header from "./components/navigation/Header";
import HeroMain from "./components/hero_section/HeroMain";
import Rooms from "./components/about_section/Rooms";
import AboutMain from "./components/about_section/AboutMain";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroMain />
      {/* <BookingForm />  */}
      <AboutMain />

    </main>
  );
}
