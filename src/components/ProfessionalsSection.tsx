import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

const PHOTO_DIR = path.join(process.cwd(), "public", "fotos");
const PHOTO_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

/** Procura a foto real em public/fotos/<slug>.<ext>. Retorna null se não houver. */
function findPhoto(slug: string): string | null {
  for (const ext of PHOTO_EXTENSIONS) {
    if (fs.existsSync(path.join(PHOTO_DIR, `${slug}${ext}`))) {
      return `/fotos/${slug}${ext}`;
    }
  }
  return null;
}

const PROFESSIONALS = [
  {
    slug: "andre",
    name: "André Lucas Scalzer",
    role: "Cirurgião-dentista",
    cro: "CRO-BA 30069",
    bio: "Atendimento odontológico com avaliação individual e orientação clara em cada etapa do tratamento.",
  },
  {
    slug: "laizza",
    name: "Laizza Scalzer",
    role: "Cirurgião-dentista",
    cro: "CRO-BA 30100",
    bio: "Atendimento odontológico com avaliação individual e orientação clara em cada etapa do tratamento.",
  },
];

/**
 * Apresentação dos profissionais.
 * CRO, formação e especializações permanecem pendentes (PRD) e não foram
 * inventados — serão exibidos aqui assim que forem confirmados.
 */
export function ProfessionalsSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-creme py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja-texto">
            Quem atende você
          </p>
          <h2
            id="sobre-titulo"
            className="mt-3 text-3xl font-bold sm:text-4xl"
          >
            Cuidado próximo, feito por duas mãos.
          </h2>
          <p className="mt-4 text-marrom/75">
            André Lucas Scalzer e Laizza Scalzer trabalham juntos em Teixeira
            de Freitas, oferecendo um atendimento humanizado, com atenção
            individualizada, transparência e segurança em cada etapa do
            tratamento. Nosso compromisso é compreender suas necessidades e
            proporcionar um cuidado odontológico de qualidade, sempre
            priorizando sua saúde e bem-estar.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROFESSIONALS.map((professional) => {
            const photo = findPhoto(professional.slug);

            return (
              <li
                key={professional.name}
                className="flex flex-col rounded-2xl border border-marrom/10 bg-white p-6 shadow-sm"
              >
                {photo ? (
                  <Image
                    src={photo}
                    alt={`Fotografia de ${professional.name}`}
                    width={800}
                    height={1000}
                    sizes="(max-width: 640px) 90vw, 45vw"
                    className="aspect-[4/5] w-full rounded-3xl object-cover object-top"
                  />
                ) : (
                  <PhotoPlaceholder
                    label={professional.name}
                    note="Fotografia, CRO, formação e especializações serão inseridos após confirmação dos profissionais."
                    className="aspect-[4/5] w-full"
                  />
                )}
                <h3 className="mt-5 text-2xl font-semibold">
                  {professional.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-laranja-texto">
                  {professional.role}
                </p>
                <p className="mt-1 text-sm font-medium text-marrom/80">
                  {professional.cro}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-marrom/75">
                  {professional.bio}
                </p>
                <p className="mt-4 rounded-lg bg-creme px-4 py-3 text-xs leading-relaxed text-marrom/70">
                  Formação e especializações serão exibidos nesta área após a
                  confirmação dos profissionais.
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
