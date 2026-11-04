import { ArrowRight, MapPin } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { WhatsAppButton } from "./WhatsAppButton";
import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white">
      {/* Grafismos abstratos: curvas em laranja e creme */}
      <div
        className="decor-blob absolute -right-24 -top-24 h-72 w-72 bg-creme"
        aria-hidden="true"
      />
      <div
        className="decor-blob absolute -bottom-32 -left-24 h-80 w-80 bg-laranja/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-creme px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-laranja-texto">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Odontologia · Teixeira de Freitas, BA
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Seu sorriso merece cuidado em cada detalhe.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-marrom/80 lg:mx-0">
            Conheça nossos tratamentos odontológicos e entre em contato para
            receber informações sobre avaliação e atendimento.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <WhatsAppButton message={WHATSAPP_DEFAULT_MESSAGE}>
              Agendar avaliação
            </WhatsAppButton>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-marrom/20 px-6 py-3.5 font-semibold text-marrom transition-colors hover:border-laranja hover:text-laranja-texto"
            >
              Conhecer tratamentos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-2 mx-auto w-full max-w-md lg:max-w-none">
          <PhotoPlaceholder
            label="Fotografia real dos profissionais"
            className="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
