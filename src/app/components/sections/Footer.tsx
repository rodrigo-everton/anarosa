"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import links from "../../links.json";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Livros", href: links.amazon_livros },
  { name: "Mary Kay", href: links.marykay },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-black-secondary/10 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/rose.svg"
                alt="Rosa de Ana Rosa"
                width={140}
                height={48}
                className="h-12 w-auto object-contain hover:bg-pink-secondary border rounded-lg"
              />
            </Link>

            <p className="mt-4 text-sm leading-6 text-black-secondary/70">
              Ana Rosa Carvalho de Abreu é uma escritora brasileira, servidora aposentada do Banco Central do Brasil e atuante em causas sociais.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-sm font-semibold text-black">Navegação</h2>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-black-secondary/70 transition-colors hover:text-pink-hover"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-black">Atendimento</h2>
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  href= {links.whatsapp}
                  className="gap-2"
                  variant="red"
                >
                  <Image
                    src="/whatsapp-logo.svg"
                    alt="WhatsApp Logo"
                    width={18}
                    height={18}
                    className="size-5 object-contain"
                  />
                  WhatsApp
                </Button>

                <a className="text-sm font-medium text-black-secondary/70 transition-colors">
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-black-secondary/10 pt-6 text-sm text-black-secondary/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Ana Rosa</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
