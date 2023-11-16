import About from "./components/about-main";
import AboutMain from "./components/about-main";
import Header from "./components/header";
import Hero from "./components/hero-main";
import Motive from "./components/motive-main";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Motive />
      <About />
    </main>
  );
}
