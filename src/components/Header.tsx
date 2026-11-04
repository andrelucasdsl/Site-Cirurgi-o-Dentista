"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { WhatsAppButton } from "./WhatsAppButton";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu ao pressionar Esc (acessibilidade por teclado).
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-marrom/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#topo" aria-label="Ir para o início da página">
          <BrandMark />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-marrom/80 transition-colors hover:text-laranja-texto"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton className="px-5 py-2.5 text-sm">
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-marrom/15 text-marrom transition-colors hover:border-laranja lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="border-t border-marrom/10 bg-white px-4 pb-4 sm:px-6 lg:hidden"
        >
          <ul className="divide-y divide-marrom/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-medium text-marrom transition-colors hover:text-laranja-texto"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-4 w-full">
            Agendar pelo WhatsApp
          </WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
