"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import links from "../../links.json";

const navItens = [
  { name: "Home", href: "/" },
  { name: "Livros", href: links.amazon_livros },
  { name: "Mary Kay", href: links.marykay },
  { name: "Arquivos", href: "/arquivo"},
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousedown", handleClickOutside)
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-purple shadow-md">
      <nav className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between grid-row px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image
            src="rose.svg"
            alt="Rosa de Ana Rosa"
            width={120}
            height={40}
            className="h-10 w-auto object-contain bg-white border rounded-lg hover:bg-pink-secondary"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItens.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white m-2 font-semibold hover:text-pink-secondary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white text-white transition-colors hover:border-pink-secondary hover:text-pink-secondary md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {isMenuOpen && (
          <div ref={menuRef} className="absolute right-4 top-full mt-3 w-64 roundend-md border border-black-secondary bg-white p-3 shadow-lg md:hidden">
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