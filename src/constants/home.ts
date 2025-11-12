const WHATSAPP_LINK =
  'https://wa.me/525527743347?text=Hola%20Cirilo,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20estrat%C3%A9gica';

export const whatsappLink = WHATSAPP_LINK;

export type Cta = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  trustNote: string;
  highlights: string[];
  primaryCta: Cta;
  secondaryCta: Cta;
  trustSignals: { label: string; description: string }[];
};

export type Differentiator = {
  title: string;
  description: string;
  icon: 'puzzle' | 'shield' | 'book';
};

export type ServiceLine = {
  title: string;
  description: string;
  highlights: string[];
  href: string;
  icon: 'scale' | 'ledger' | 'gavel' | 'spark' | 'merge' | 'radar';
};

export type AudienceProfile = {
  title: string;
  intro: string;
  stats: { label: string; value: string }[];
  industries: string[];
  needs: string[];
};

export type Philosophy = {
  title: string;
  intro: string;
  pillars: { title: string; description: string }[];
  technology: { title: string; description: string };
};

export type FinalCta = {
  title: string;
  description: string;
  note: string;
  button: Cta;
};

export const heroContent: HeroContent = {
  eyebrow: 'Consultoría contable, fiscal y jurídica para empresas en expansión',
  title: 'Protegemos tu crecimiento corporativo con rigor y claridad',
  subtitle:
    'Asesoría integral, preventiva y explicada sin rodeos para equipos directivos que necesitan respuestas accionables.',
  trustNote:
    'Socio de compañías medianas y grandes con gobierno corporativo formal que valoran transparencia total y tiempos ejecutivos.',
  highlights: ['Visión 360° de negocio', 'Atención senior sin intermediarios', 'Contexto ejecutivo en cada decisión'],
  primaryCta: {
    label: 'Agenda una consulta estratégica',
    href: WHATSAPP_LINK
  },
  secondaryCta: {
    label: 'Explora los servicios',
    href: '#servicios'
  },
  trustSignals: [
    {
      label: 'Perfil financiero',
      description: 'Empresas consolidadas que buscan rigor en planeación y reporting.'
    },
    {
      label: 'Operación',
      description: 'Organizaciones con presencia nacional y proyectos regionales en expansión.'
    },
    {
      label: 'Decisores',
      description: 'CEO, CFO y Dirección Jurídica que exigen respuestas claras y accionables.'
    }
  ]
};

export const differentiators: Differentiator[] = [
  {
    title: 'Integración real de disciplinas',
    description: 'Contabilidad, fiscal y legal se coordinan desde un solo frente para reducir fricción y duplicidad.',
    icon: 'puzzle'
  },
  {
    title: 'Rigor + agilidad',
    description: 'Procesos de firma global con tiempos y personalización de boutique dirigida por un consultor senior.',
    icon: 'shield'
  },
  {
    title: 'Pedagogía ejecutiva',
    description: 'Explicamos riesgos, escenarios y próximos pasos en lenguaje claro para decidir con confianza.',
    icon: 'book'
  }
];

export const services: ServiceLine[] = [
  {
    title: 'Consultoría Fiscal Estratégica',
    description: 'Planeamos, optimizamos y defendemos tu estrategia fiscal con soluciones legales y medibles.',
    highlights: ['Transfer pricing y compliance internacional', 'Estructuras que reducen carga fiscal sin riesgos'],
    href: WHATSAPP_LINK,
    icon: 'scale'
  },
  {
    title: 'Servicios Contables y Auditoría Integral',
    description: 'Estados financieros confiables, controles sólidos y reporting ejecutivo en un solo frente.',
    highlights: ['Procesos contables escalables', 'Auditorías internas y tableros en tiempo real'],
    href: WHATSAPP_LINK,
    icon: 'ledger'
  },
  {
    title: 'Asesoría Jurídica Corporativa',
    description: 'Gobierno, contratos y estructuras que blindan operaciones y socios.',
    highlights: ['Contratos críticos bajo control', 'Due diligence y cumplimiento mercantil'],
    href: WHATSAPP_LINK,
    icon: 'gavel'
  },
  {
    title: 'Transformación Digital Financiera',
    description: 'Tecnología aplicada para automatizar finanzas, compliance y toma de decisiones.',
    highlights: ['Implementación de ERPs y automatización', 'Dashboards y gobierno de datos'],
    href: WHATSAPP_LINK,
    icon: 'spark'
  },
  {
    title: 'Operaciones Corporativas (M&A)',
    description: 'Acompañamos cada etapa de fusiones, adquisiciones y reestructuras.',
    highlights: ['Riesgos fiscales y legales cuantificados', 'Plan de integración posterior al cierre'],
    href: WHATSAPP_LINK,
    icon: 'merge'
  },
  {
    title: 'Gestión de Riesgos y Contingencias',
    description: 'Mapeamos, priorizamos y mitigamos pasivos antes de que escalen.',
    highlights: ['Inventario de contingencias', 'Planes de respuesta con alertas ejecutivas'],
    href: WHATSAPP_LINK,
    icon: 'radar'
  }
];

export const audienceProfile: AudienceProfile = {
  title: 'El cliente ideal: empresas que construyen para el largo plazo',
  intro: 'Trabajamos con organizaciones profesionalizadas que ven la asesoría estratégica como inversión, no gasto.',
  stats: [
    {
      label: 'Contexto financiero',
      value: 'Compañías medianas y grandes con estructura corporativa formal.'
    },
    {
      label: 'Equipos internos',
      value: 'Liderazgos multidisciplinarios que coordinan finanzas, legal y operaciones.'
    },
    { label: 'Decisores clave', value: 'CEO, CFO y Dirección Jurídica.' }
  ],
  industries: [
    'Manufactura y producción',
    'Servicios profesionales',
    'Comercio internacional e import/export',
    'Tecnología y software',
    'Real estate y desarrollos',
    'Salud privada'
  ],
  needs: [
    'Optimización fiscal estratégica y planeación patrimonial',
    'Cumplimiento normativo multinacional',
    'Estructuración de operaciones corporativas (M&A, financiamiento)',
    'Mitigación de contingencias fiscales, contables y legales',
    'Modernización de sistemas de información financiera'
  ]
};

export const calloutCopy = {
  title: '¿Tu empresa está en un punto de inflexión?',
  body: 'Si enfrentas expansión, auditorías exigentes o una posible adquisición, sumamos estrategia y calma ejecutiva.'
};

export const philosophy: Philosophy = {
  title: 'Cómo trabajamos: asesoría preventiva, no reactiva',
  intro: 'Arrancamos con un diagnóstico integral para anticipar riesgos y priorizar oportunidades.',
  pillars: [
    {
      title: 'Accesibilidad directa',
      description: 'Hablas siempre con el consultor senior. Respuesta ágil y claridad inmediata.'
    },
    {
      title: 'Pedagogía fiscal y corporativa',
      description: 'Traducimos implicaciones y escenarios en lenguaje ejecutivo para empoderar a tu equipo.'
    },
    {
      title: 'Proactividad anticipatoria',
      description: 'Alertamos sobre cambios normativos y revisamos estructuras con cadencia proactiva.'
    }
  ],
  technology: {
    title: 'Tecnología aplicada',
    description: 'Automatización, IA y tableros colaborativos para reportes en tiempo real y trazabilidad total.'
  }
};

export const finalCta: FinalCta = {
  title: '¿Listo para construir una relación de largo plazo?',
  description: 'Agenda una consulta estratégica para revisar tus retos y confirmar si somos el socio correcto.',
  note: 'Respondemos en menos de 24 horas hábiles. Primera conversación sin costo.',
  button: {
    label: 'Agenda tu consulta estratégica',
    href: WHATSAPP_LINK
  }
};

export const pageSeo = {
  title: 'Consultoría contable, fiscal y jurídica | Cirilo Reyes',
  description:
    'Asesoría integral y preventiva para empresas $50M-$500M MXN. Optimización fiscal, cumplimiento normativo y protección corporativa con enfoque claro.'
};
