import { Metadata } from "next";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { Navbar } from "../components/sections/Navbar";

export const metadata: Metadata = {
  title: "Contatos | Website Pessoal da Ana Rosa",
  description:
    "Contacte Ana Rosa através desta página. Aqui estão links para seu e-mail e as redes sociais dela: Facebook, Instagram, Linkedin, Whatsapp",

  alternates: {
    canonical: "/contato",
  },

  openGraph: {
    title: "Contatos | Website Pessoal da Ana Rosa",
    description:
      "Contacte Ana Rosa através desta página. Aqui estão links para seu e-mail e as redes sociais dela: Facebook, Instagram, Linkedin, Whatsapp",
    url: "/contato",
  },
};

export default function Contato() {

  return (
    <div>
      <Navbar></Navbar>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}