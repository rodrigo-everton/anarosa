import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
