/**
 * Identificação principal do site.
 * A marca comercial final está pendente de confirmação; por isso, os nomes
 * dos profissionais são usados como identificação provisória.
 */
export function BrandMark() {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="64" height="64" rx="14" fill="#FF5A00" />
        <path
          d="M32 14c-4.5 0-6.5-3-11.5-3C14.5 11 11 15.5 11 23c0 9.5 3.8 13.5 5.8 23 .9 4.2 1.7 8.5 4.4 8.5 2.6 0 3.2-3.4 4-8.2.8-4.8 1.2-7.3 6.8-7.3s6 2.5 6.8 7.3c.8 4.8 1.4 8.2 4 8.2 2.7 0 3.5-4.3 4.4-8.5 2-9.5 5.8-13.5 5.8-23 0-7.5-3.5-12-9.5-12-5 0-7 3-11.5 3z"
          fill="#FFFFFF"
        />
      </svg>
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
