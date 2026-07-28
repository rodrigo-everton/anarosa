import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar";
import { Stores } from "./components/sections/Stores";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stores></Stores>
      <Footer></Footer>
    </div>
  );
}
