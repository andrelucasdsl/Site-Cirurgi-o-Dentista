import { Camera } from "lucide-react";

type PhotoPlaceholderProps = {
  /** Texto principal do espaço reservado. */
  label: string;
  /** Nota explicativa (pendência de foto). */
  note?: string;
  className?: string;
};

/**
 * Espaço reservado para as fotografias reais dos profissionais e do
 * consultório. As fotos serão inseridas após aprovação (pendência da PRD).
 * Nenhuma imagem ilustrativa genérica é usada no lugar de fotos reais.
 */
export function PhotoPlaceholder({
  label,
  note = "Espaço reservado para a fotografia aprovada pelos profissionais.",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <figure
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border-2 border-dashed border-laranja/50 bg-creme p-8 text-center ${className}`}
    >
      <span
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-laranja/10"
        aria-hidden="true"
      />
      <span
        className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-laranja/10"
        aria-hidden="true"
      />
      <Camera
        className="relative h-10 w-10 text-laranja-texto"
        aria-hidden="true"
      />
      <figcaption className="relative">
        <span className="block font-display text-lg font-semibold text-marrom">
          {label}
        </span>
        <span className="mt-1 block text-sm text-marrom/70">{note}</span>
      </figcaption>
    </figure>
  );
}
