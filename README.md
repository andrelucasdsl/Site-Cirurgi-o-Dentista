# Site odontológico — André Lucas Scalzer e Laizza Scalzer

Site institucional (página única) para atendimento odontológico em
Teixeira de Freitas – BA. Mobile-first, com foco em conversão pelo WhatsApp.

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components)
- **TypeScript**
- **Tailwind CSS 4** com tokens de cores próprios
- **Lucide** para ícones
- Animações em CSS (com suporte a `prefers-reduced-motion`)

## Como rodar

```bash
npm install
npm run dev    # desenvolvimento em http://localhost:3000
npm run build  # build de produção
npm run start  # serve o build de produção
npm run lint   # ESLint
```

> Obs.: este ambiente não tinha Node.js instalado. Uma versão portátil foi
> usada em `%TEMP%\opencode\nodejs` para desenvolver o projeto. Em outra
> máquina, basta ter Node.js 20.9+.

## Identidade visual

Tokens em `src/app/globals.css` (`@theme`):

| Token                | Cor      | Uso                                   |
| -------------------- | -------- | ------------------------------------- |
| `--color-laranja`    | `#FF5A00`| Fundos de botão, ícones, destaque     |
| `--color-laranja-texto` | `#C2410C` | Texto pequeno e ícones sobre claro (contraste AA) |
| `--color-laranja-suave` | `#FF8A4C` | Hover de botão e detalhes sobre escuro |
| `--color-marrom`     | `#3B241E`| Títulos, textos, texto sobre laranja  |
| `--color-creme`      | `#FFF4EC`| Fundos secundários e cards            |
| `--color-preto`      | `#111111`| Blocos de contraste (diferenciais, rodapé) |

Nota de acessibilidade: o laranja puro `#FF5A00` não atinge contraste AA
com texto branco (≈3,1:1). Por isso os botões usam fundo laranja com texto
marrom-escuro (≈4,6:1) e textos pequenos em laranja usam o tom mais escuro
`#C2410C` (≈4,8:1 sobre creme/branco). Títulos usam Oswald e textos usam
Montserrat (via `next/font`, auto-hospedadas).

## WhatsApp

- Número: **(73) 99831-4984** → `wa.me/5573998314984`
- Mensagem inicial configurada em `src/lib/site.ts`
  (`WHATSAPP_DEFAULT_MESSAGE`). Cada card de tratamento envia uma mensagem
  específica (`treatmentWhatsappMessage`).
- Botão no cabeçalho, hero, diferenciais, tratamentos, contato e botão
  flutuante no celular (`lg:hidden`).
- Teste manual: https://wa.me/5573998314984?text=Ol%C3%A1!%20Vim%20pelo%20site

## Estrutura

```
src/
  app/
    layout.tsx                     # Fontes, metadados, skip link, header/footer
    page.tsx                       # Página única + JSON-LD (schema.org Dentist)
    globals.css                    # Tokens de cor, animações, a11y
    sitemap.ts / robots.ts         # SEO
    icon.svg                       # Favicon provisório (substituir pela marca)
    opengraph-image.tsx            # Imagem social gerada
    politica-de-privacidade/       # Página da política de privacidade
  components/
    Header.tsx                     # Cabeçalho fixo + menu mobile
    HeroSection.tsx
    ProfessionalsSection.tsx
    TreatmentsGrid.tsx / TreatmentCard.tsx
    ResultsSection.tsx                   # "Nossos resultados" (antes e depois)
    AppointmentSteps.tsx
    FAQAccordion.tsx
    ContactSection.tsx
    WhatsAppButton.tsx             # Botão padrão + flutuante
    Footer.tsx
    BrandMark.tsx                  # Identificação provisória
    PhotoPlaceholder.tsx           # Espaço para fotos reais
  lib/
    site.ts                        # Todo o conteúdo e configurações centralizados
    year.ts                        # Ano atual com "use cache"
```

## Pendências da PRD (bloqueiam a publicação)

Nada abaixo foi inventado. Os itens ficam com placeholders visíveis no site
até serem resolvidos.

1. **Nome da marca** — confirmar se será "Odonto Vitta", os nomes dos
   profissionais ou outra marca. Atual: nomes dos profissionais como
   identificação (`BrandMark.tsx`).
2. **CRO e identificação profissional** — ✅ informados pelos profissionais:
   André Lucas Scalzer **CRO-BA 30069** e Laizza Scalzer **CRO-BA 30100**
   (exibidos em `ProfessionalsSection.tsx` e `Footer.tsx`). Antes de
   publicar, confirmar o formato/UF (ex.: CRO-BA) junto ao CRO competente.
3. **Horários de atendimento** — o site diz apenas "consulte pelo WhatsApp";
   substituir em `ContactSection.tsx`, `FAQS` e JSON-LD quando informados.
4. **Fotografias reais** — substituir `PhotoPlaceholder` por `next/image`
   com as fotos aprovadas (hero e seção sobre). Subir em WebP/AVIF.
5. **Fotos de antes e depois** — a seção "Nossos resultados" lê as fotos de
   `public/resultados/` (`caso1-antes.jpg`, `caso1-depois.jpg`, ...).
   Confirmar **autorização expressa dos pacientes** antes de publicar
   (exigência da PRD e das normas profissionais).
5. **Mapa** — validar o ponto exato e incorporar o iframe do Google Maps em
   `ContactSection.tsx` (hoje há apenas link de busca).
6. **Domínio** — definir e registrar. Depois, atualizar `SITE_URL` em
   `src/lib/site.ts` (afeta canonical, Open Graph, sitemap e robots).
7. **Favicon/logo provisório** — `src/app/icon.svg` e o desenho em
   `BrandMark.tsx` são temporários; substituir pelo logotipo aprovado.
8. **Revisão de conteúdo** — textos dos tratamentos e biografias devem ser
   revisados pelos dentistas; conferir conformidade com normas do CFO/CRO
   antes de publicar.

## Checklist de publicação

- [ ] Todos os itens acima resolvidos
- [ ] `SITE_URL` com o domínio real
- [ ] Testar todos os links de WhatsApp em celular
- [ ] Testar navegação por teclado e foco visível
- [ ] Lighthouse (Core Web Vitals) no build de produção
- [ ] Validar JSON-LD no Rich Results Test do Google
- [ ] Politica de privacidade revisada
