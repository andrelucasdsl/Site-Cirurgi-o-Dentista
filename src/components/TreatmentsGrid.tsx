import { TreatmentCard } from "./TreatmentCard";
import { TREATMENTS } from "@/lib/site";

export function TreatmentsGrid() {
  return (
    <section
      id="tratamentos"
      aria-labelledby="tratamentos-titulo"
      className="bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja-texto">
            Tratamentos
          </p>
          <h2
            id="tratamentos-titulo"
            className="mt-3 text-3xl font-bold sm:text-4xl"
          >
            Cuidado para diferentes necessidades.
          </h2>
          <p className="mt-4 text-marrom/75">
            Conheça os tratamentos realizados no consultório. Cada caso passa
            por avaliação antes da definição do procedimento.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <li key={treatment.id} className="flex">
              <TreatmentCard treatment={treatment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
