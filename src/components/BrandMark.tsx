import Image from "next/image";

/**
 * Identificação principal do site.
 * Usa a marca gráfica enviada pelos profissionais: "A&L Odontologia"
 * (nome confirmado pelos profissionais em 12/11/2026; "Ateliê Oral" é o
 * nome do local de atendimento, não da marca).
 */
export function BrandMark() {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/marca-ael.png"
        alt="A&L Odontologia"
        width={320}
        height={204}
        className="h-10 w-auto shrink-0"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-sm font-semibold uppercase tracking-wide text-marrom sm:text-base">
          André Lucas Scalzer · Laizza Scalzer
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-laranja-texto sm:block">
          Odontologia · Teixeira de Freitas, BA
        </span>
      </span>
    </span>
  );
}
