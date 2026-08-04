import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar";
import { Socials } from "./components/sections/Socials";
import { Stores } from "./components/sections/Stores";

export default function Home() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stores></Stores>
      <Socials></Socials>
      <Footer></Footer>
    </div>
  );
}
