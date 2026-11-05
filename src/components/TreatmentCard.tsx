import type { LucideIcon } from "lucide-react";
import { Activity, ArrowUpRight, Gem, Layers, ShieldCheck, Sparkles, Syringe } from "lucide-react";
import { treatmentWhatsappMessage, whatsappLink, type Treatment } from "@/lib/site";

const TREATMENT_ICONS: Record<string, LucideIcon> = {
  clareamento: Sparkles,
  limpeza: ShieldCheck,
  restauracoes: Layers,
  endodontia: Activity,
  "cirurgia-oral": Syringe,
  "lentes-resina": Gem,
};

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = TREATMENT_ICONS[treatment.id] ?? Sparkles;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-marrom/10 bg-creme p-6 transition-all hover:-translate-y-1 hover:border-laranja/60 hover:shadow-lg">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-laranja/15 text-laranja-texto">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-4 text-xl font-semibold">{treatment.name}</h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-marrom/75">
        {treatment.description}
      </p>

      <a
        href={whatsappLink(treatmentWhatsappMessage(treatment))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 self-start font-semibold text-laranja-texto transition-colors hover:text-marrom"
        aria-label={`Tenho interesse em ${treatment.name} — falar pelo WhatsApp`}
      >
        Tenho interesse
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
