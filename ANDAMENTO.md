# ANDAMENTO — continuar de onde paramos

> Última atualização: 05/11/2026 (mapa interativo ativado)
> Dev server: http://localhost:3000 (ver se está rodando; se não, rodar
> `npm run dev` ou clicar em PREVISUALIZAR-SITE.bat)

### Alterações de 05/11
- [x] **Novo tratamento**: "Lentes em resina" (card + ícone `Gem` + meta
      description + FAQ atualizados em `src/lib/site.ts` e `TreatmentCard.tsx`)
- [x] **Frase da seção "Quem atende você"** substituída ("trabalham juntos...
      atendimento humanizado... saúde e bem-estar") em `ProfessionalsSection.tsx`
- [x] **Mapa interativo ATIVADO** — pin validado em
      `src/lib/site.ts` (`MAPS_COORDS = "-17.5402956,-39.7387319"`,
      `MAPS_EMBED_ENABLED = true`, `MAPS_LINK` = local oficial no Google
      Maps); iframe no `ContactSection.tsx`; aviso removido; política de
      privacidade item 4 atualizada

## ✅ O que já foi feito (E NÃO está no GitHub ainda)

O repositório remoto está no commit `d02ea1e` ("first commit"). **Tudo abaixo
foi feito depois e precisa de build + commit + push** (é só pedir):

### Alterações no código
- [x] **Fotos dos profissionais** aplicadas (andre.jpg 853×1280, laizza.jpg
      1122×1402) em `public/fotos/`, formato 4:5 corte pelo topo
- [x] **CROs**: André — CRO-BA 30069 · Laizza — CRO-BA 30100 (cards +
      rodapé + README)
- [x] **Seção "Por que nos procurar" → transformada**:
      - `DifferentialsSection.tsx` **DELETADO**
      - novo `ResultsSection.tsx` com galeria de fotos
      - selo (laranja): **"Seu sorriso, nossa prioridade"**
      - título grande: **"Cuidado humanizado, excelência em cada detalhe e
        compromisso com a sua saúde."**
      - frase "Sempre pensando no melhor..." e "Nossos resultados" REMOVIDAS
- [x] **3 fotos de antes/depois** (já montadas numa imagem só com labels
      Antes/Depois) em `public/resultados/`:
      - `caso1.jpg` (15.48.11), `caso2.jpg` (15.48.22), `caso3.jpg` (15.48.24)
      - todos 844×1055, ~60–80 KB
      - `ResultsSection.tsx` adaptado: foto única por caso (com fallback
        para o formato par `casoN-antes`/`casoN-depois` caso use no futuro)
- [x] **Ícone novo**: marca "AeL Odontologia" extraída da imagem colada,
      aparada e salva como `public/marca-ael.png` (320×204, 17 KB);
      `BrandMark.tsx` agora usa `next/image` em vez do SVG genérico;
      favicon trocado: `src/app/icon.svg` deletado → `src/app/icon.png`
      (512×512, 45 KB)

### Git local (pendente de push)
```
 M README.md                    (pendências atualizadas)
 D src/app/icon.svg             (favicon antigo)
 M src/app/page.tsx             (ResultsSection no lugar de Differentials)
 M src/components/BrandMark.tsx (marca nova via next/image)
 D src/components/DifferentialsSection.tsx
 M src/components/Footer.tsx    (CRO-BA)
 M src/components/ProfessionalsSection.tsx (fotos + CROs)
 M src/lib/site.ts              (RESULT_CASES)
?? public/                      (fotos/ + resultados/ + marca-ael.png)
?? src/app/icon.png
?? src/components/ResultsSection.tsx
```

## 📋 Pendências conhecidas (PRD)

1. **Autorização dos pacientes** para as fotos de antes/depois — frase
   "publicadas com autorização" está na seção, mas **ainda não confirmada**
2. **Títulos dos casos** — `RESULT_CASES` em `src/lib/site.ts` está só com
   slugs (caso1/2/3); se quiser nome do procedimento em cada, é só informar
3. **Diferenciais removidos** — o cliente não respondeu se quer religá-los
   em outro lugar (a PRD prevê seção de diferenciais)
4. **Nome da marca** (pendente desde o início — por isso nomes dos
   profissionais como identificação)
5. **Horários de atendimento** (dados reais)
6. **Foto do hero** — cliente disse que ainda não vai enviar
7. **Domínio** — atualizar `SITE_URL` em `src/lib/site.ts` (hoje
   `https://example.com`)
8. ~~**Validação do pin do mapa**~~ — ✅ **CONCLUÍDO**: pin validado
   (coordenadas `-17.5402956,-39.7387319`, endereço R. do Haiti, 127
   confere) e **mapa interativo ATIVADO** no site (`MAPS_EMBED_ENABLED =
   true`), link oficial do local configurado e política de privacidade
   (item 4) atualizada
9. **Nome da marca** — o Google Maps mostra o local como **"Ateliê Oral"**;
   confirmar com os profissionais se esse é o nome a usar no site

## 🔧 Comandos úteis

- **Preview**: abrir http://localhost:3000 (dev server já rodando) ou
  clicar duas vezes em `PREVISUALIZAR-SITE.bat`
- **Node portátil**: `%TEMP%\opencode\nodejs\node-v26.13.0-win-x64\npm.cmd`
- **Git portátil**: `%TEMP%\opencode\git\cmd\git.exe`
- **Build + publicar**: pedir ao assistente (gera build, commit e push
  via código de dispositivo do GitHub — app oficial `178c6fc778ccc68e1d6a`,
  escopo `repo`)

## 💡 Dica: imagens coladas no chat

Imagens coladas aqui **não viram arquivo automaticamente**. Para achar:
estão no banco `~\.local\share\opencode\opencode.db` (+ `-wal`), tabela
`session_message`, campo `data` (JSON com `{data: <base64>, mime:
"image/..."}`). Script pronto: `%TEMP%\opencode\extract-user-images.js`
(roda com o node portátil; copiar db+wal para `%TEMP%\opencode\sqlitedb\`
antes — ver `%TEMP%\opencode\scan-db.js`).
