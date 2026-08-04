import { ArrowUpRight } from "lucide-react";
import links from "../../links.json";
import InstagramPost from "../InstagramPost";

const socials = [
  {
    title: "Instagram",
    href: links.instagram,
    Componente: InstagramPost,
  },
  //{
  //  title: "Facebook",
  //  href: links.facebook,
  //  Componente: FacebookPost,
  //}
];

export function Socials() {
  return (
    <section id="redes-sociais" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 overflow-hidden rounded-3xl bg-red px-6 py-8 shadow-xl shadow-black/10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:items-center lg:gap-16 lg:px-14">
        <div className="max-w-xl text-white">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
            Redes sociais
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Acompanhe Ana Rosa mais de perto
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
            Veja novidades, eventos, livros e momentos especiais publicados no
            Instagram.
          </p>

          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-red transition hover:-translate-y-0.5 hover:bg-white-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Seguir no Instagram
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="min-w-0 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 sm:p-4">
          {socials.map((social) => {
            const Componente = social.Componente;

            return (
              <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-xl bg-white" key={social.title}>
                <Componente url={social.href} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
