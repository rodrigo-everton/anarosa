import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
