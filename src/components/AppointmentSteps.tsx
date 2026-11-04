import { APPOINTMENT_STEPS } from "@/lib/site";

export function AppointmentSteps() {
  return (
    <section
      id="como-agendar"
      aria-labelledby="etapas-titulo"
      className="bg-creme py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-laranja-texto">
            Como agendar
          </p>
          <h2 id="etapas-titulo" className="mt-3 text-3xl font-bold sm:text-4xl">
            Solicitar uma avaliação é simples.
          </h2>
          <p className="mt-4 text-marrom/75">
            O atendimento começa por uma mensagem. Veja as etapas:
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPOINTMENT_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-marrom/10 bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-laranja font-display text-lg font-bold text-marrom"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-marrom/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
