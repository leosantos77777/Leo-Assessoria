import { Plan, MetricCard, WhatsAppFeedback, NicheItem } from '../types';

export const PLANS: Plan[] = [
  {
    id: 'estruturacao',
    name: 'Estruturação Estratégica',
    price: 'Sob Diagnóstico',
    period: 'Solução Específica',
    description: 'Identificação de gargalos, desenho de funil e alinhamento tático entre marketing e comercial.',
    ctaText: 'Quero diagnosticar minha operação',
    features: [
      'Diagnóstico profundo dos gargalos atuais',
      'Desenho do fluxo de captação e conversão',
      'Direcionamento para equipe de vendas',
      'Plano de ação prioritário de execução',
    ],
  },
  {
    id: 'assessoria',
    name: 'Assessoria de Marketing & Vendas',
    price: 'Operação Contínua',
    period: 'Solução Principal',
    isPopular: true,
    tag: '★ Operação Completa',
    description: 'Uma operação contínua para conectar aquisição, CRM, processo comercial e dados com previsibilidade.',
    ctaText: 'Quero diagnosticar minha operação',
    features: [
      'Aquisição qualificada multicanal',
      'Estruturação e acompanhamento de CRM',
      'Processo comercial e rotina de follow-up',
      'Monitoramento de métricas e receita',
      'Acompanhamento estratégico contínuo',
    ],
  },
  {
    id: 'crm',
    name: 'Implantação de CRM',
    price: 'Sob Diagnóstico',
    period: 'Solução Específica',
    description: 'Organização de atendimento, funil visual e automações para nenhum lead depender da memória.',
    ctaText: 'Quero diagnosticar minha operação',
    features: [
      'Configuração de pipeline de vendas',
      'Automações de primeiro contato',
      'Rastreamento de histórico e motivos de perda',
      'Indicadores de tempo de resposta da equipe',
    ],
  },
];

export const REAL_METRICS: MetricCard[] = [
  {
    id: 'tempo-mercado',
    title: 'Anos de Experiência',
    subtitle: 'Consistência e evolução constante no digital',
    statusText: 'No campo de batalha',
    badge: 'Senioridade',
    category: 'geral',
    metrics: [
      { label: 'Tempo de Mercado', value: '+5 Anos', highlight: true },
      { label: 'Foco de Atuação', value: 'Estratégia e Escala de Vendas' }
    ]
  },
  {
    id: 'receita-gerada',
    title: 'Receitas Gerenciadas',
    subtitle: 'Faturamento real gerado para clientes',
    statusText: 'Resultado Comprovado',
    badge: 'Alto Impacto',
    category: 'vendas',
    metrics: [
      { label: 'Receita Total Gerada', value: '+5 Milhões', highlight: true },
      { label: 'Impacto Direto', value: 'Crescimento de parceiros' }
    ]
  },
  {
    id: 'investimento-ads',
    title: 'Verba Gerenciada em Anúncios',
    subtitle: 'Orçamento otimizado com foco em ROI',
    statusText: 'Escala Ativa',
    badge: 'Eficiência',
    category: 'meta-ads',
    metrics: [
      { label: 'Total Investido', value: '+2 Milhões', highlight: true },
      { label: 'Otimização', value: 'Redução drástica de CAC' }
    ]
  },
  {
    id: 'clientes-atendidos',
    title: 'Empresas Atendidas',
    subtitle: 'Negócios transformados em escala global',
    statusText: 'Brasil e Mundo',
    badge: 'Internacional',
    category: 'geral',
    metrics: [
      { label: 'Clientes Satisfeitos', value: '+50 Empresas', highlight: true },
      { label: 'Abrangência', value: 'Brasil e Exterior' }
    ]
  }
];

export const WHATSAPP_FEEDBACKS: WhatsAppFeedback[] = [
  {
    id: 'feed-1',
    clientName: 'Cliente Comercial',
    clientRole: 'Vendas Diretas',
    phonePreview: '+55 11 •••••-••••',
    dateOrTime: '09:58',
    avatarText: 'CC',
    quoteSummary: '5 vendas fechadas a partir de 7 contatos gerados!',
    highlightMetric: '71% de taxa de conversão',
    messages: [
      { isMe: false, text: 'Ontem aqui constou 7 contatos no WhatsApp', time: '09:57' },
      { isMe: false, text: 'Alguns retornando o contato outros novos contatos', time: '09:57' },
      { isMe: false, text: 'Sim, dos mesmos fechei 5 vendas! 🎯', time: '09:58' },
    ]
  },
  {
    id: 'feed-2',
    clientName: 'Thiago & Equipe',
    clientRole: 'Serviços de Alto Ticket',
    phonePreview: '+55 31 •••••-••••',
    dateOrTime: '20:59',
    avatarText: 'TH',
    quoteSummary: 'Fez 2 vendas na semana totalizando R$ 11.000,00!',
    highlightMetric: 'R$ 11.000,00 em 1 semana',
    messages: [
      { isMe: false, text: 'Thiago acabou de me ligar 📞', time: '20:58' },
      { isMe: false, text: 'Fez 2 vendas essa semana agora que passou', time: '20:59' },
      { isMe: false, text: 'Pelos anúncios', time: '20:59' },
      { isMe: false, text: 'Totalizando 11 mil reais 💰', time: '20:59' },
      { isMe: false, text: 'Só para fazer um feedback', time: '20:59' },
      { isMe: true, text: 'Excelente!! 🚀🚀', time: '21:59' }
    ]
  },
  {
    id: 'feed-3',
    clientName: 'Dra. Tays Lima',
    clientRole: 'Clínica & Consultório',
    phonePreview: '+351 912 652 919',
    dateOrTime: '13:55',
    avatarText: 'TL',
    quoteSummary: '9 contatos, 2 consultas convertidas e 5 propostas enviadas em 2 semanas.',
    highlightMetric: 'Retorno internacional constante',
    messages: [
      { isMe: false, text: 'Oie pessoal, conforme falei com o Leo agora pouco nessas ultimas 2 semanas temos recebido contatos, entraram 9 e convertemos 2 consultas e também encaminhamos pelo menos 5 propostas que estamos aguardando o retorno.', time: '13:55' },
      { isMe: false, text: 'O feedback é positivo, vamos continuar!', time: '13:55' },
      { isMe: false, text: 'Você pode encaminhar a proposta para o meta ads de acordo com a estratégia que o Leo apresentou pf?', time: '13:55' }
    ]
  },
  {
    id: 'feed-4',
    clientName: 'Karine Sackt',
    clientRole: 'Agência & Desenvolvimento',
    phonePreview: '+55 31 •••••-••••',
    dateOrTime: '16:11',
    avatarText: 'KS',
    quoteSummary: 'Fechou R$ 3.500 no dia. O valor de 2 meses de tráfego já se pagou no mesmo dia!',
    highlightMetric: 'Tráfego pago no 1º dia',
    messages: [
      { isMe: false, text: 'Ele e o amigo dele fecharam duas landing pages = R$3500 no total', time: '16:10' },
      { isMe: false, text: 'O valor para o tráfego de dois meses já se pagou hoje 🚀🔥', time: '16:10' },
      { isMe: true, text: 'Que ótimoooo 🚀🚀 Fico feliz demais de verdade', time: '16:38' }
    ]
  },
  {
    id: 'feed-5',
    clientName: 'Lucas Oliveira',
    clientRole: 'E-commerce & Varejo',
    phonePreview: '+55 44 99159-0628',
    dateOrTime: '09:26',
    avatarText: 'LO',
    quoteSummary: 'Média constante de 5 vendas por dia geradas pelos relatórios e otimizações.',
    highlightMetric: '5 vendas todos os dias',
    messages: [
      { isMe: false, text: 'Bom dia, Leo, obrigado pelo relatório, este mês está performando legal, estamos com uma média de 5 vendas dias', time: '09:26' },
      { isMe: true, text: 'Show de bola, vamos acelerar ainda mais!', time: '09:30' }
    ]
  },
  {
    id: 'feed-6',
    clientName: 'Amábile Rodrigues',
    clientRole: 'Serviços Especializados',
    phonePreview: '+55 13 98153-9029',
    dateOrTime: '11:37',
    avatarText: 'AR',
    quoteSummary: 'Primeiro fechamento rápido pelo site com atendimento diferenciado no WhatsApp.',
    highlightMetric: 'Conversão rápida no Direct/WhatsApp',
    messages: [
      { isMe: false, text: 'Boa notícia! Primeiro fechamento a partir do site! É atendimento a um casal, surgiu a demanda e resolvi começar a atender. O interessante é que o contato que a pessoa fez foi bem diferente...', time: '11:37' }
    ]
  },
  {
    id: 'feed-7',
    clientName: 'Karine Sackt (Elogio Proatividade)',
    clientRole: 'Feedback Executivo',
    phonePreview: '+55 31 •••••-••••',
    dateOrTime: '20:20',
    avatarText: 'KS',
    quoteSummary: 'Elogio à proatividade, dedicação e comprometimento focado em resultados.',
    highlightMetric: 'Parceria de longo prazo',
    messages: [
      { isMe: false, text: 'Leo, quero aproveitar para elogiar o excelente trabalho que você tem feito, sua proatividade e dedicação têm sido fundamentais. É muito bom contar com alguém tão comprometido e focado como você.', time: '20:20' }
    ]
  },
  {
    id: 'feed-8',
    clientName: 'Retorno Estimado de ROI',
    clientRole: 'Investimento em Anúncios',
    phonePreview: '+55 12 99182-5850',
    dateOrTime: '18:04',
    avatarText: 'ROI',
    quoteSummary: 'Retorno de cerca de R$ 10.000 para cada R$ 1.000 investidos (10x ROI).',
    highlightMetric: 'ROI de 10x',
    messages: [
      { isMe: false, text: 'Boa tarde, quanto foi mais ou menos de ROI que tivemos em suas campanhas?', time: '18:03' },
      { isMe: true, text: 'O valor de retorno eu diria que volta cerca de 10 k por mil investido 📈', time: '18:04' }
    ]
  }
];

export const NICHES: NicheItem[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce e Lançamentos',
    icon: 'ShoppingBag',
    description: 'Campanhas escaláveis focadas em ROAS positivo, recuperação agressiva de carrinho abandonado, catálogo dinâmico e lançamentos com pico explosivo de vendas.',
    strategyHighlight: 'Estrutura CBO + Remarketing Agressivo + Funil de Alta Conversão',
    typicalResult: 'ROAS consistente de 4x a 12x'
  },
  {
    id: 'clinicas-estetica',
    name: 'Clínica Estética',
    icon: 'Sparkles',
    description: 'Atração de clientes qualificados para procedimentos de alto valor (botox, harmonização, criolipólise) com filtro comercial antes mesmo de chamarem.',
    strategyHighlight: 'Criativos em vídeo persuasivos + Agendamento sem atrito no WhatsApp',
    typicalResult: 'Leads altamente qualificados a partir de R$ 8,00'
  },
  {
    id: 'clinicas-odonto',
    name: 'Clínicas Odontológicas',
    icon: 'Smile',
    description: 'Captação massiva para implantes, alinhadores invisíveis e estética dental, suportada por qualificação comercial implacável da secretária.',
    strategyHighlight: 'Domínio de raio local + Scripts validados de reativação de base',
    typicalResult: '+30 a +80 avaliações agendadas por mês'
  },
  {
    id: 'auto-escolas',
    name: 'Auto Escolas',
    icon: 'Car',
    description: 'Máquina de matrículas para primeira habilitação e adição de categoria. Superação da concorrência local focada em diferenciais reais.',
    strategyHighlight: 'Geolocalização cirúrgica de alta densidade + Escassez real',
    typicalResult: 'Custo de aquisição (CAC) reduzido em até 60%'
  },
  {
    id: 'advogados-psicologos',
    name: 'Advogados & Psicólogos',
    icon: 'Scale',
    description: 'Posicionamento de autoridade para captação ética de clientes de alto valor, operando 100% dentro das diretrizes OAB e CFP.',
    strategyHighlight: 'Google Search Intenção Fundo de Funil + Landing page de Alta Conversão',
    typicalResult: 'Contratos validados de 4 a 5 dígitos'
  },
  {
    id: 'infoprodutores',
    name: 'Infoprodutores & Cursos',
    icon: 'GraduationCap',
    description: 'Aquisição em escala industrial para mentorias, cursos gravados, comunidades e grandes lançamentos (semente e clássico).',
    strategyHighlight: 'CPA otimizado em escala + Estratégia de aquecimento orgânico',
    typicalResult: 'Custo de captação (CPL) mantido abaixo de R$ 2,50'
  },
  {
    id: 'canis-luxo',
    name: 'Canis de Luxo',
    icon: 'HeartHandshake',
    description: 'Posicionamento premium para venda de filhotes de alto padrão (nacional e internacional), focando cirurgicamente no público de classe A/B.',
    strategyHighlight: 'Filtro de hiper-segmentação luxo + Venda emocional por vídeo',
    typicalResult: 'Lotes esgotados dias após o anúncio'
  },
  {
    id: 'b2b-industria',
    name: 'B2B & Indústria',
    icon: 'Building2',
    description: 'Geração previsível de leads corporativos para propostas de médio e grande porte, integrados e rastreados diretamente no CRM da sua equipe.',
    strategyHighlight: 'Google Ads B2B Intent + Automação de follow-up no Kommo/Pipefy',
    typicalResult: 'Fechamentos B2B consistentes com ticket acima de R$ 15.000'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o diagnóstico?',
    answer: 'Analisamos seus canais de aquisição, tempo de resposta dos leads, organização de CRM e rotina comercial. Identificamos com exatidão em qual etapa do funil as oportunidades estão se perdendo e traçamos o plano de ação ideal.'
  },
  {
    question: 'A assessoria é apenas tráfego pago?',
    answer: 'Não. Tráfego gera oportunidade, mas a venda acontece no comercial. Nós conectamos aquisição qualificada, implantação de CRM com automações e estruturação do processo de vendas para converter leads em faturamento previsível.'
  },
  {
    question: 'Preciso já ter CRM?',
    answer: 'Não é obrigatório. Se você já utiliza ferramentas como Kommo, Pipefy ou RD Station, nós otimizamos a operação. Se ainda não possui, estruturamos o CRM do zero para organizar funil, histórico e automações.'
  },
  {
    question: 'Vocês também ajudam o comercial?',
    answer: 'Sim. Estruturamos a rotina, cadência de follow-up, abordagem rápida e indicadores comerciais. O objetivo é garantir que nenhum lead qualificado seja esquecido ou mal atendido pela equipe de vendas.'
  },
  {
    question: 'Para que tipo de empresa faz sentido?',
    answer: 'Para empresas que já vendem e possuem operação em andamento, mas sofrem com perda de leads, falta de previsibilidade comercial ou marketing e vendas trabalhando de forma isolada.'
  },
  {
    question: 'Quanto tempo leva para começar?',
    answer: 'Após o preenchimento do formulário e a reunião de diagnóstico, definimos o escopo prioritário e iniciamos a implementação em poucos dias, priorizando estancar vazamentos imediatos do funil.'
  }
];
