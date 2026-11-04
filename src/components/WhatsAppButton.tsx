import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type WhatsAppButtonProps = {
  children?: ReactNode;
  /** Mensagem inicial do WhatsApp. Usa a mensagem padrão se omitida. */
  message?: string;
  className?: string;
};

/**
 * Botão padrão de conversão: abre o WhatsApp com a mensagem configurada.
 * Usado no cabeçalho, hero, tratamentos e contato.
 */
export function WhatsAppButton({
  children = "Agendar pelo WhatsApp",
  message,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-laranja px-6 py-3.5 font-semibold text-marrom shadow-sm transition-colors hover:bg-laranja-suave ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

/**
 * Botão flutuante de WhatsApp (somente celular).
 * Posicionado acima do conteúdo e com espaçamento extra no rodapé para
 * não cobrir informações.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-laranja text-marrom shadow-lg transition-transform hover:scale-105 lg:hidden"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
