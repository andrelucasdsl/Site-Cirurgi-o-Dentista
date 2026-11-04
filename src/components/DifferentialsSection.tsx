import { Check } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { DIFFERENTIALS } from "@/lib/site";

/**
 * Diferenciais confirmados do atendimento (PRD): somente pontos de processo
 * verificáveis — sem promessas de resultado ou afirmações clínicas.
 */
export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-titulo"
      className="bg-preto py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja">
            Por que nos procurar
          </p>
          <h2
            id="diferenciais-titulo"
            className="mt-3 text-3xl font-bold text-creme sm:text-4xl"
          >
            Um atendimento simples, do primeiro contato ao tratamento.
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIALS.map((differential) => (
            <li
              key={differential.title}
              className="rounded-2xl border border-creme/10 bg-white/5 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-laranja text-marrom">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-creme">
                {differential.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-creme/75">
                {differential.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <WhatsAppButton>Vamos conversar?</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
