import { ArrowUpRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { ADDRESS_LINE, MAPS_LINK, WHATSAPP_DISPLAY } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="bg-creme py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja-texto">
            Contato
          </p>
          <h2 id="contato-titulo" className="mt-3 text-3xl font-bold sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mt-4 text-marrom/75">
            Entre em contato para consultar horários e informações sobre os
            tratamentos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-marrom/10 bg-white p-8">
            <WhatsAppButton className="w-full sm:w-auto">
              Falar pelo WhatsApp
            </WhatsAppButton>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-laranja-texto"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold text-marrom">
                    WhatsApp
                  </dt>
                  <dd className="text-marrom/75">{WHATSAPP_DISPLAY}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-laranja-texto"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold text-marrom">
                    Horários de atendimento
                  </dt>
                  <dd className="text-marrom/75">
                    Consulte a disponibilidade pelo WhatsApp.
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-marrom/10 bg-white p-8">
            <h3 className="text-xl font-semibold">Onde estamos</h3>
            <div className="mt-4 flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-laranja-texto"
                aria-hidden="true"
              />
              <p className="text-marrom/75">{ADDRESS_LINE}</p>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-laranja-texto transition-colors hover:text-marrom"
            >
              Ver localização no mapa
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <p className="mt-6 rounded-lg bg-creme px-4 py-3 text-xs leading-relaxed text-marrom/70">
              O mapa interativo será incorporado ao site após a validação do
              ponto exato de localização do consultório.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
