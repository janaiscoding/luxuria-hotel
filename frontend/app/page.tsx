import About from "./components/about_section/About";
import Header from "./components/navigation/Header";
import Hero from "./components/Hero";
import Motive from "./components/Motive";
import Rooms from "./components/rooms_section/Rooms";
import SocialProof from "./components/social_proof/SocialProof";
import Contact from "./components/contact/Contact";
import Footer from "./components/navigation/Footer";
import prisma from '../lib/prisma';

export default function Home() {
  return (
    <main className="luxuria_app">
      <Header />
      <Hero />
      <Motive />
      <About />
      <Rooms />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
}

// Color pallete: 
// white: slate-50, grey: gray-300
// black: neutral-900, hover: neutral-800
// orange: orange-300 hover: orange-400