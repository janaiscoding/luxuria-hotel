import WhyChoose from "./components/About";
import BookingForm from "./components/BookingForm";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      {/* <BookingForm />  */}
      <WhyChoose />
    </main>
  );
}
