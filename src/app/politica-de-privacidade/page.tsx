import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ADDRESS_LINE, WHATSAPP_DISPLAY } from "@/lib/site";
import { currentYear } from "@/lib/year";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do site de André Lucas Scalzer e Laizza Scalzer, odontologia em Teixeira de Freitas – BA.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default async function PoliticaDePrivacidadePage() {
  const year = await currentYear();

  return (
    <article className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-laranja-texto">
          Privacidade
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Política de Privacidade
        </h1>

        <div className="prose-headings:mt-8 mt-8 space-y-6 leading-relaxed text-marrom/80">
          <p className="text-sm text-marrom/60">
            Última atualização: {year}.
          </p>

          <section aria-labelledby="priv-1">
            <h2 id="priv-1" className="text-xl font-semibold">
              1. Sobre este site
            </h2>
            <p className="mt-2">
              Este site institucional apresenta os serviços odontológicos de
              André Lucas Scalzer e Laizza Scalzer, com atendimento em Teixeira
              de Freitas – BA, e facilita o contato por meio do WhatsApp.
            </p>
          </section>

          <section aria-labelledby="priv-2">
            <h2 id="priv-2" className="text-xl font-semibold">
              2. Dados coletados
            </h2>
            <p className="mt-2">
              O site não possui formulários de cadastro, não solicita dados
              pessoais e não realiza coleta de dados de saúde. Nenhuma
              informação digitada por você é armazenada por este site.
            </p>
            <p className="mt-2">
              Ao clicar em um botão de WhatsApp, você é direcionado ao aplicativo
              WhatsApp, operado pela Meta Platforms. A partir desse momento,
              suas mensagens e dados passam a ser tratados conforme a política
              de privacidade do WhatsApp, disponível em{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-laranja-texto underline hover:text-marrom"
              >
                whatsapp.com/legal/privacy-policy
              </a>
              . Pedimos que dados sensíveis de saúde não sejam enviados no
              primeiro contato.
            </p>
          </section>

          <section aria-labelledby="priv-3">
            <h2 id="priv-3" className="text-xl font-semibold">
              3. Cookies e ferramentas de medição
            </h2>
            <p className="mt-2">
              O site não utiliza cookies de publicidade nem ferramentas de
              rastreamento. Caso sejam adicionadas ferramentas de métricas ou
              cookies não essenciais no futuro, este documento será atualizado e
              o consentimento será solicitado antes da ativação.
            </p>
          </section>

          <section aria-labelledby="priv-4">
            <h2 id="priv-4" className="text-xl font-semibold">
              4. Mapa e serviços de terceiros
            </h2>
            <p className="mt-2">
              O site incorpora um mapa do Google Maps com a localização do
              consultório. Ao carregar, o mapa pode transmitir dados de
              navegação (como endereço IP) ao Google, conforme a política de
              privacidade do Google. O link de localização também direciona ao
              Google Maps, com a mesma finalidade.
            </p>
          </section>

          <section aria-labelledby="priv-5">
            <h2 id="priv-5" className="text-xl font-semibold">
              5. Seus direitos
            </h2>
            <p className="mt-2">
              Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode
              solicitar informações sobre tratamento de dados ou exercer seus
              direitos pelo WhatsApp {WHATSAPP_DISPLAY} ou no endereço{" "}
              {ADDRESS_LINE}.
            </p>
          </section>

          <section aria-labelledby="priv-6">
            <h2 id="priv-6" className="text-xl font-semibold">
              6. Atualizações desta política
            </h2>
            <p className="mt-2">
              Esta política pode ser atualizada para refletir mudanças no site
              ou na legislação. A versão vigente é sempre esta página.
            </p>
          </section>

          <div className="pt-4">
            <WhatsAppButton>Voltar ao atendimento</WhatsAppButton>
          </div>
        </div>
      </div>
    </article>
  );
}
