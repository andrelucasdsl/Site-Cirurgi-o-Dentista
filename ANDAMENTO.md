# ANDAMENTO — continuar de onde paramos

> Última atualização: 17/11/2026 (APÓS publicação no GitHub)
>
> ## 🟢 SITUAÇÃO ATUAL
> - **GitHub em dia**: commit `cf59580` ("Atualiza galeria de resultados,
>   textos dos profissionais e marca") publicado e **confirmado no remoto**
>   (53 arquivos) — inclui tudo de 12/11 e 17/11
> - **Para retomar**: abrir http://localhost:3000 (se não subir, rodar
>   `npm run dev` ou clicar em `PREVISUALIZAR-SITE.bat`)
> - **Para publicar de novo**: pedir build + push (aparece um código de
>   8 dígitos em github.com/login/device — vale 15 min, fazer na hora;
>   app oficial GitHub CLI `178c6fc778ccc68e1d6a`, escopo `repo`)
> - ⚠️ **Aviso Next.js**: a versão 16.4.3 tem vulnerabilidade conhecida —
>   build/dev às vezes param no aviso de upgrade; é só **rodar o comando
>   de novo** que passa. Upgrade de segurança ainda NÃO foi aplicado
>   (cliente não decidiu se roda em worktree)
>
> ### Histórico publicado
> - **`cf59580` (17/11)**: galeria com 4 casos + legendas (Limpeza +
>   Clareamento com marca d'água corrigida, Clareamento, Restaurações,
>   Tratamento de Canal); bios do André e da Laizza; caixa de
>   formação removida; marca "A&L Odontologia"; `DIFFERENTIALS` removido
> - **`0dda299` (05/11)**: fotos (hero, André, Laizza), CROs, seção de
>   resultados, marca + favicon, mapa interativo, lentes em resina,
>   texto "Quem atende você"

## ✅ O que já foi feito (E NÃO está no GitHub ainda)

As alterações abaixo **já foram publicadas** no commit `0dda299` (05/11/2026)
— este bloco fica como histórico do que mudou desde o "first commit":

### Alterações no código (PUBLICADAS)
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
- [x] **Capa (hero)**: `public/fotos/hero.jpg` (1086×1448, 181 KB) no lugar
      do espaço reservado (`HeroSection.tsx`)
- [x] **Mapa interativo** e **Lentes em resina** (ver histórico acima)

## 📋 Pendências (atualizado em 12/11/2026 com as respostas do cliente)

1. ~~**Autorização dos pacientes**~~ — ✅ **CONCLUÍDO**: cliente confirmou
   em 12/11/2026 que **todas as fotos de casos são autorizadas** pelos
   pacientes; a frase "publicadas com autorização" está correta
2. ~~**Títulos dos casos**~~ — ✅ **CONCLUÍDO**: legendas aplicadas
   (Limpeza + Clareamento, Clareamento, Restaurações, Tratamento de Canal)
3. ~~**Diferenciais removidos**~~ — ✅ **CONCLUÍDO**: cliente confirmou em
   12/11/2026 que **fica sem a seção de diferenciais**; constante morta
   `DIFFERENTIALS` removida do código
4. ~~**Nome da marca**~~ — ✅ **CONCLUÍDO**: marca é **"A&L Odontologia"**.
   "Ateliê Oral" é apenas o nome do local de atendimento (como aparece no
   Google Maps) — não usar como marca do site
5. ~~**Horários de atendimento**~~ — ✅ **RESOLVIDO**: cliente confirmou
   que **atendimento só com horário marcado pelo WhatsApp** — o site já
   diz isso (contato, FAQ e rodapé), sem horários fixos publicados;
   `openingHours` fica de fora do JSON-LD de propósito
6. ~~**Foto do hero**~~ — ✅ **CONCLUÍDA** (commit `0dda299`)
7. **Domínio** — **ÚLTIMA pendência da PRD** (orientação do cliente em
   12/11: será a última coisa). Atualizar `SITE_URL` em `src/lib/site.ts`
   (hoje `https://example.com`) — afeta canonical, Open Graph e sitemap
8. ~~**Validação do pin do mapa**~~ — ✅ **CONCLUÍDO** (mapa interativo
   ativo + política de privacidade atualizada)
9. ~~**Marca d'água da foto "Limpeza + Clareamento"**~~ — ✅ **CONCLUÍDO**:
   cliente reenviou a foto com "A&L Odontologia" e foi publicada no
   commit `cf59580`

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
