import { PhotoPlaceholder } from "./PhotoPlaceholder";

const PROFESSIONALS = [
  {
    name: "André Lucas Scalzer",
    role: "Cirurgião-dentista",
    bio: "Atendimento odontológico com avaliação individual e orientação clara em cada etapa do tratamento.",
  },
  {
    name: "Laizza Scalzer",
    role: "Cirurgião-dentista",
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
            André Lucas Scalzer e Laizza Scalzer atendem juntos em Teixeira de
            Freitas, com foco em avaliação e informação clara antes de cada
            procedimento.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROFESSIONALS.map((professional) => (
            <li
              key={professional.name}
              className="flex flex-col rounded-2xl border border-marrom/10 bg-white p-6 shadow-sm"
            >
              <PhotoPlaceholder
                label={professional.name}
                note="Fotografia, CRO, formação e especializações serão inseridos após confirmação dos profissionais."
                className="aspect-[4/3] w-full"
              />
              <h3 className="mt-5 text-2xl font-semibold">
                {professional.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-laranja-texto">
                {professional.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-marrom/75">
                {professional.bio}
              </p>
              <p className="mt-4 rounded-lg bg-creme px-4 py-3 text-xs leading-relaxed text-marrom/70">
                Registro profissional (CRO) e dados de identificação serão
                exibidos nesta área após a confirmação.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
