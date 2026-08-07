import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import Image from "next/image";
import links from "../../links.json";

const email = links.email;

const contactLinks = [
  {
    title: "E-mail",
    description: "Para convites, parcerias e outros assuntos.",
    label: email,
    href: `mailto:${email}?subject=Contato%20pelo%20site`,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    description: "Envie uma mensagem e converse diretamente.",
    label: "Iniciar conversa",
    href: links.whatsapp,
    icon: "/whatsapp-logo.svg",
  },
];

const socialLinks = [
  { label: "Instagram", href: links.instagram, icon: "/instagram_icon.svg" },
  { label: "Facebook", href: links.facebook, icon: "/facebook_icon.svg" },
  { label: "LinkedIn", href: links.linkedin, icon: "/linkedin_icon.svg" },
];

export function Contact() {
  return (
    <main className="m-2 px-4 py-6 sm:px-6 sm:py-8 md:m-4 lg:px-8 lg:py-10">
      <section
        aria-labelledby="contact-title"
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 ring-1 ring-black/5"
      >
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 size-72 rounded-full bg-pink-secondary/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 left-1/3 size-64 rounded-full bg-purple-secondary/25 blur-3xl"
        />

        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between bg-red px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                <Mail aria-hidden="true" className="size-6" />
              </div>
              <h2 className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                Entre em contato
              </h2>
              <h1
                id="contact-title"
                className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
              >
                Vamos conversar?
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">
                Será um prazer receber sua mensagem. Escolha o canal que preferir
                para falar com Ana Rosa.
              </p>
            </div>

            <div className="mt-10 border-t border-white/20 pt-7">
              <p className="text-sm font-semibold text-white/70">
                Acompanhe também nas redes sociais
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${label} de Ana Rosa`}
                    title={label}
                    className="flex size-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-pink-hover hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-red">
              Canais de atendimento
            </p>
            <h2 className="mt-3 text-2xl font-bold text-black sm:text-3xl">
              Como você prefere falar?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-black-secondary/65">
              Clique em uma das opções abaixo para enviar sua mensagem.
            </p>

            <div className="mt-8 grid gap-4">
              {contactLinks.map(
                ({ title, description, label, href, icon }) => (
                  <a
                    key={title}
                    href={href}
                    target={title === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      title === "WhatsApp" ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white-secondary p-5 transition hover:-translate-y-0.5 hover:border-red/30 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red sm:p-6"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-red text-white sm:size-14">
                      {typeof icon === "string" ? (
                        <Image
                          src={icon}
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 object-contain"
                        />
                      ) : (
                        <Mail aria-hidden="true" className="size-6" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-bold text-black">
                        {title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-black-secondary/60">
                        {description}
                      </span>
                      <span className="mt-2 block break-all text-sm font-semibold text-red sm:break-normal">
                        {label}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-black-secondary/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red"
                    />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
