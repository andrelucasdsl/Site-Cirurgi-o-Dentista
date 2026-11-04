/**
 * Ano atual, memoizado com "use cache" (Cache Components).
 * Evita o valor instável `new Date()` durante o prerender.
 */
export async function currentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}
