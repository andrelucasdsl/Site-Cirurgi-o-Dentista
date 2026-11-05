import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS_LINE,
  NAV_LINKS,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/site";
import { currentYear } from "@/lib/year";

export async function Footer() {
  const year = await currentYear();

  return (
    <footer className="bg-preto pb-24 pt-14 text-creme lg:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-wide">
              André Lucas Scalzer
              <br />
              Laizza Scalzer
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-laranja-suave">
              Odontologia · Teixeira de Freitas, BA
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-creme">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-creme/80">
              <li className="flex items-start gap-2">
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-laranja-suave"
                  aria-hidden="true"
                />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-laranja-suave"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-laranja-suave"
                  aria-hidden="true"
                />
                <span>Atendimento por WhatsApp com horário marcado</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-laranja-suave"
                  aria-hidden="true"
                />
                <span>{ADDRESS_LINE}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-creme">Navegação</h2>
            <ul className="mt-4 space-y-2 text-sm text-creme/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-laranja-suave"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="transition-colors hover:text-laranja-suave"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-lg bg-white/5 px-4 py-3 text-xs leading-relaxed text-creme/70">
          Identificação profissional: André Lucas Scalzer — CRO-BA 30069 ·
          Laizza Scalzer — CRO-BA 30100. Registros profissionais informados
          pelos próprios profissionais.
        </p>

        <div className="mt-6 border-t border-creme/10 pt-6 text-xs text-creme/60">
          <p>
            © {year} André Lucas Scalzer e Laizza Scalzer. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
