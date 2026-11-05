import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { WhatsAppButton } from "./WhatsAppButton";
import { RESULT_CASES } from "@/lib/site";

const RESULTS_DIR = path.join(process.cwd(), "public", "resultados");
const PHOTO_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

/** Procura um arquivo em public/resultados/<nome>.<ext>. */
function findResultFile(baseName: string): string | null {
  for (const ext of PHOTO_EXTENSIONS) {
    const file = path.join(RESULTS_DIR, `${baseName}${ext}`);
    if (fs.existsSync(file)) return `/resultados/${baseName}${ext}`;
  }
  return null;
}

/** Foto única já montada com antes e depois (formato preferido). */
function findCombinedPhoto(slug: string): string | null {
  return findResultFile(slug);
}

/** Fotos separadas de antes e depois (formato legado). */
function findSplitPhoto(slug: string, kind: "antes" | "depois"): string | null {
  return findResultFile(`${slug}-${kind}`);
}

function Placeholder({ note }: { note: string }) {
  return (
    <div
      className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border-2 border-dashed border-creme/25 bg-white/5 p-4 text-center text-xs text-creme/50"
      aria-hidden="true"
    >
      {note}
    </div>
  );
}

function SplitPhoto({
  src,
  alt,
  label,
}: {
  src: string | null;
  alt: string;
  label: string;
}) {
  return (
    <div className="relative">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          sizes="(max-width: 640px) 45vw, 22vw"
          className="aspect-square w-full rounded-lg object-cover"
        />
      ) : (
        <Placeholder note={`Espaço para a foto ${label.toLowerCase()}`} />
      )}
      <span className="absolute left-2 top-2 rounded-full bg-preto/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-creme">
        {label}
      </span>
    </div>
  );
}

/**
 * Seção "Nossos resultados": galeria de casos reais. Cada caso exibe uma
 * foto única já montada com antes e depois (caso1.jpg, caso2.jpg, ...) ou,
 * na ausência dela, o par separado casoN-antes/casoN-depois.
 * As fotos são detectadas em public/resultados/ (ver LEIA-ME.txt).
 */
export function ResultsSection() {
  return (
    <section
      id="resultados"
      aria-labelledby="resultados-titulo"
      className="bg-preto py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja">
            Seu sorriso, nossa prioridade
          </p>
          <h2
            id="resultados-titulo"
            className="mt-3 text-3xl font-bold uppercase text-creme sm:text-4xl"
          >
            Cuidado humanizado, excelência em cada detalhe e compromisso com a
            sua saúde.
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULT_CASES.map((caso) => {
            const combined = findCombinedPhoto(caso.slug);
            const antes = findSplitPhoto(caso.slug, "antes");
            const depois = findSplitPhoto(caso.slug, "depois");
            const alt = caso.title
              ? `${caso.title} — antes e depois do tratamento`
              : "Caso real atendido no consultório — antes e depois do tratamento";

            return (
              <li
                key={caso.slug}
                className="rounded-2xl border border-creme/10 bg-white/5 p-4"
              >
                {combined ? (
                  <Image
                    src={combined}
                    alt={alt}
                    width={844}
                    height={1055}
                    sizes="(max-width: 640px) 90vw, 30vw"
                    className="aspect-[4/5] w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <SplitPhoto
                      src={antes}
                      alt={
                        caso.title
                          ? `${caso.title} — antes do tratamento`
                          : "Foto do caso antes do tratamento"
                      }
                      label="Antes"
                    />
                    <SplitPhoto
                      src={depois}
                      alt={
                        caso.title
                          ? `${caso.title} — depois do tratamento`
                          : "Foto do caso depois do tratamento"
                      }
                      label="Depois"
                    />
                  </div>
                )}
                {caso.title && (
                  <p className="mt-3 text-center text-sm font-semibold text-creme">
                    {caso.title}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-xs text-creme/60">
          Imagens de casos reais atendidos no consultório, publicadas com
          autorização.
        </p>

        <div className="mt-8">
          <WhatsAppButton>Vamos conversar?</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
