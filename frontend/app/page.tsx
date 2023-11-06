
import BookingForm from "./components/BookingForm";
import Header from "./components/navigation/Header";
import HeroMain from "./components/hero_section/HeroMain";
import AboutMain from "./components/about_section/AboutMain";
import RoomsMain from "./components/rooms_section/RoomsMain";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroMain />
      {/* <BookingForm />  */}
      <AboutMain />
      <RoomsMain />
    </main>
  );
}
