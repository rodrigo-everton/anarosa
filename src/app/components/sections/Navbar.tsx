"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
//import { Button } from "@/components/Button";

const navItens = [
  { name: "Home", href: "/" },
  { name: "Livros", href: "/livros" },
  { name: "Amazon", href: "/amazon" },
  { name: "Mary Kay", href: "https://loja.marykay.com.br/minha-vitrine?slug=marcas" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center text-xl font-bold text-black">
          <Image
            src="rose.svg"
            alt="Rosa de Ana Rosa"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItens.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black font-semibold hover:text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-black-secondary text-black transition-colors hover:border-pink hover:text-pink md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-4 top-full mt-3 w-64 roundend-md border border-black-secondary bg-white p-3 shadow-lg md:hidden">
            <div className="flex flex-col items-end gap-1">
              {navItens.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-md px-3 py-2 text-right text-sm font-semibold text-black-secondary transition-colors hover:bg-white-secondary hover:text-pink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}