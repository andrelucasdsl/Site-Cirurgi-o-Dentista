// ---------------------------------------------------------------------------
// Configurações centrais do site.
// IMPORTANTE: itens pendentes da PRD (domínio, marca, CRO, horários, fotos)
// estão comentados abaixo. Nada foi inventado — revise antes de publicar.
// ---------------------------------------------------------------------------

/**
 * Domínio definitivo ainda não definido (pendência da PRD).
 * Substitua pelo domínio real antes de publicar. Este valor é usado no
 * canonical, Open Graph e sitemap.
 */
export const SITE_URL = "https://example.com";

/** Nome exibido como identificação principal (marca comercial pendente). */
export const SITE_NAME = "André Lucas Scalzer e Laizza Scalzer";

export const SITE_TITLE =
  "André Lucas Scalzer e Laizza Scalzer | Odontologia em Teixeira de Freitas – BA";

export const SITE_DESCRIPTION =
  "Consultório odontológico de André Lucas Scalzer e Laizza Scalzer em Teixeira de Freitas – BA. Clareamento, limpeza e prevenção, restaurações, endodontia, cirurgia oral e lentes em resina. Agende pelo WhatsApp.";

export const SITE_KEYWORDS = [
  "cirurgião-dentista em Teixeira de Freitas",
  "dentista em Teixeira de Freitas",
  "clareamento dental em Teixeira de Freitas",
  "limpeza e prevenção odontológica",
  "restaurações dentárias",
  "tratamento endodôntico",
  "endodontia em Teixeira de Freitas",
  "cirurgia oral",
  "odontologia Teixeira de Freitas BA",
];

// ---------------------------------------------------------------------------
// WhatsApp
// ---------------------------------------------------------------------------

/** Somente dígitos, com DDI e DDD. */
export const WHATSAPP_NUMBER = "5573998314984";

export const WHATSAPP_DISPLAY = "(73) 99831-4984";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de informações sobre tratamentos e horários disponíveis.";

/** Gera o link direto do WhatsApp com a mensagem inicial configurada. */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ---------------------------------------------------------------------------
// Localização
// ---------------------------------------------------------------------------

export const ADDRESS_LINE =
  "R. do Haiti, 127 – Belas Vista, Teixeira de Freitas – BA, 45990-301";

/** Coordenadas exatas do consultório (pin validado no Google Maps). */
export const MAPS_COORDS = "-17.5402956,-39.7387319";

/** Link oficial do local no Google Maps (Ateliê Oral), sem parâmetros de
 *  rastreamento. */
export const MAPS_LINK =
  "https://www.google.com/maps/place/Ateli%C3%AA+Oral+(Dentista+em+Teixeira+de+Freitas)/@-17.5402956,-39.7413068,17z/data=!4m16!1m9!3m8!1s0x7354522b8f34401:0x7b25244d602939f2!2sAteli%C3%AA+Oral+(Dentista+em+Teixeira+de+Freitas)!8m2!3d-17.5402956!4d-39.7387319!9m1!1b1!16s%2Fg%2F11h6l03jc3!3m5!1s0x7354522b8f34401:0x7b25244d602939f2!8m2!3d-17.5402956!4d-39.7387319!16s%2Fg%2F11h6l03jc3";

/** Mapa interativo embutido (iframe do Google Maps) — ATIVADO após a
 *  validação do ponto exato (pin conferido com o endereço do consultório). */
export const MAPS_EMBED_ENABLED = true;

/** URL do iframe com o pin fixado nas coordenadas exatas. */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_COORDS,
)}&hl=pt-BR&z=17&output=embed`;

// ---------------------------------------------------------------------------
// Navegação
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-agendar", label: "Como agendar" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

// ---------------------------------------------------------------------------
// Tratamentos (serviços confirmados na PRD + procedimentos informados pelos
// profissionais)
// ---------------------------------------------------------------------------

export type Treatment = {
  id: string;
  name: string;
  description: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "clareamento",
    name: "Clareamento dental",
    description:
      "Procedimento para clareamento da cor dos dentes, sempre após avaliação para verificar as condições da dentição.",
  },
  {
    id: "limpeza",
    name: "Limpeza e prevenção",
    description:
      "Limpeza profissional e orientação de cuidados para manter a saúde bucal em dia.",
  },
  {
    id: "restauracoes",
    name: "Restaurações",
    description:
      "Recuperação da estrutura de dentes deteriorados, devolvendo forma e função ao dente.",
  },
  {
    id: "endodontia",
    name: "Endodontia",
    description:
      "Tratamento de canal, indicado quando a polpa dentária está inflamada ou infectada.",
  },
  {
    id: "cirurgia-oral",
    name: "Cirurgia oral",
    description:
      "Procedimentos cirúrgicos na região bucal, sempre após avaliação individual do caso.",
  },
  {
    id: "lentes-resina",
    name: "Lentes em resina",
    description:
      "Procedimento estético que utiliza resina com carga em cerâmica para melhorar a forma, o tamanho e a aparência dos dentes, proporcionando mais harmonia ao sorriso após avaliação individualizada.",
  },
];

export function treatmentWhatsappMessage(treatment: Treatment) {
  return `Olá! Vim pelo site e gostaria de informações sobre ${treatment.name.toLowerCase()}. Poderiam me passar horários disponíveis?`;
}

// ---------------------------------------------------------------------------
// Casos com fotos de antes e depois (seção "Nossos resultados")
// As fotos ficam em public/resultados/<slug>-antes.ext e <slug>-depois.ext
// O título de cada caso é exibido somente quando preenchido aqui.
// ---------------------------------------------------------------------------

export type ResultCase = {
  slug: string;
  /** Ex.: "Clareamento dental". Deixe vazio para não exibir título. */
  title?: string;
};

export const RESULT_CASES: ResultCase[] = [
  { slug: "caso1" },
  { slug: "caso2" },
  { slug: "caso3" },
];

// ---------------------------------------------------------------------------
// Diferenciais (apenas pontos confirmados — sem promessas de resultado)
// ---------------------------------------------------------------------------

export const DIFFERENTIALS = [
  {
    title: "Atendimento em Teixeira de Freitas",
    description:
      "Consultório na R. do Haiti, 127 – Belas Vista, com localização de fácil acesso.",
  },
  {
    title: "Contato direto pelo WhatsApp",
    description:
      "Agendamento e informações por mensagem, sem burocracia e sem formulários.",
  },
  {
    title: "Avaliação individual",
    description:
      "Cada caso é avaliado antes da definição do tratamento mais adequado.",
  },
  {
    title: "Informação clara",
    description:
      "Explicamos cada procedimento para que você decida com tranquilidade.",
  },
] as const;

// ---------------------------------------------------------------------------
// Etapas para solicitar uma avaliação
// ---------------------------------------------------------------------------

export const APPOINTMENT_STEPS = [
  {
    title: "Fale pelo WhatsApp",
    description: `Envie uma mensagem para ${WHATSAPP_DISPLAY} contando o que você precisa.`,
  },
  {
    title: "Consulte os horários",
    description:
      "Confirme na conversa as datas e os horários disponíveis para o atendimento.",
  },
  {
    title: "Faça a avaliação",
    description:
      "Compareça ao consultório para a avaliação do seu caso com um dos profissionais.",
  },
  {
    title: "Siga com o tratamento",
    description:
      "Receba orientações sobre os próximos passos do seu tratamento odontológico.",
  },
] as const;

// ---------------------------------------------------------------------------
// Perguntas frequentes
// ---------------------------------------------------------------------------

export const FAQS = [
  {
    question: "Como faço para agendar uma avaliação?",
    answer:
      "Basta entrar em contato pelo WhatsApp. Enviamos as informações sobre atendimento e horários disponíveis diretamente na conversa.",
  },
  {
    question: "Quais tratamentos são realizados?",
    answer:
      "Atendemos clareamento dental, limpeza e prevenção, restaurações, endodontia, cirurgia oral e lentes em resina. Em caso de dúvidas, fale conosco pelo WhatsApp.",
  },
  {
    question: "Preciso marcar horário com antecedência?",
    answer:
      "Sim. O atendimento é feito com horário marcado; consulte os horários disponíveis pelo WhatsApp antes de comparecer.",
  },
  {
    question: "Quais são os horários de atendimento?",
    answer:
      "Os horários de atendimento são informados pelo WhatsApp no momento do agendamento.",
  },
  {
    question: "Onde fica o consultório?",
    answer: `O consultório fica na ${ADDRESS_LINE}.`,
  },
  {
    question: "É necessário fazer uma avaliação antes do tratamento?",
    answer:
      "Sim. Cada caso é avaliado individualmente antes da definição do tratamento.",
  },
] as const;
