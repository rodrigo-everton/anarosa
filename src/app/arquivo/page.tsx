import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Footer } from "../components/sections/Footer";
import { Navbar } from "../components/sections/Navbar";

export const metadata: Metadata = {
  title: "Arquivo",
  description: "Registros de Ana Rosa preservados no Web Archive.",
};

const archivedItems = [
  {
    title: "Website Pessoal de 1999",
    description: "Registro preservado para consulta no Web Archive.",
    image: "",
    href: "https://web.archive.org/web/19991002182034/http://www.angelfire.com/ar/rosa01/",
  },
  {
    title: "Website Pessoal em 2001",
    description: "Registro preservado para consulta no Web Archive.",
    image: "",
    href: "https://web.archive.org/web/20010720161304/http://www.angelfire.com/ar/rosa01/",
  },
  {
    title: "Blog Google em 2009",
    description: "Registro preservado para consulta no Web Archive.",
    image: "",
    href: "https://web.archive.org/web/20091221232552/http://www.paginadedireito.com/",
  },
];

export default function ArquivoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <section aria-labelledby="archive-title" className="mx-auto w-full max-w-7xl">
          <div className="rounded-3xl mx-auto max-w-2xl text-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 bg-white-secondary">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red">
              Memória e história
            </p>
            <h1
              id="archive-title"
              className="mt-3 text-4xl font-bold leading-tight text-black sm:text-5xl"
            >
              Arquivo
            </h1>
            <p className="mt-5 text-base leading-7 text-black-secondary/65 sm:text-lg">
              Conheça registros de Ana Rosa preservados no Web Archive.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {archivedItems.map(({ title, description, image, href }) => (
              <article
                key={title}
                className="group flex overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="flex w-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-secondary/35 to-purple-secondary/30">
                    {image ? (
                      <Image
                        src={image}
                        alt={`Imagem de ${title}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full flex-col items-center justify-center gap-3 text-purple/55">
                        <span className="flex size-16 items-center justify-center rounded-2xl bg-white/60 ring-1 ring-white/80">
                          <ImageIcon aria-hidden="true" className="size-7" />
                        </span>
                        <span className="text-sm font-semibold">Espaço para foto</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h2 className="text-2xl font-bold text-black">{title}</h2>
                    <p className="mt-3 flex-1 leading-7 text-black-secondary/65">
                      {description}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                      aria-label={`Ver ${title} no Web Archive`}
                    >
                      Ver no Web Archive
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
