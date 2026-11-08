const WHATSAPP_PHONE = '525527743347';
const WHATSAPP_TEXT =
  'Hola Cirilo, me gustaría agendar una consulta sobre servicios contables, auditoría, fiscales o jurídicos.';

export const whatsappPhone = '+52 55 2774 3347';
export const whatsappLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export type Cta = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  points: string[];
  icon: string;
  tone: 'blue' | 'teal' | 'amber' | 'slate';
};

export type ContactItem = {
  icon: string;
  label: string;
  value: string;
  link?: { href: string; label: string; ariaLabel: string };
};

export const address = {
  street: 'Productos Químicos de México 15, Col. Vista Hermosa',
  postalCode: '54080',
  locality: 'Tlalnepantla de Baz',
  region: 'Estado de México',
  country: 'MX'
};

export const geo = { latitude: 19.5178364, longitude: -99.2231914 };

// Fuente única del horario: el texto visible y el JSON-LD salen de aquí.
export const hours = {
  text: 'Lun - Sáb: 8:00 am - 6:00 pm',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '08:00',
  closes: '18:00'
};

export const mapUrl = 'https://maps.app.goo.gl/NDB7nZM3Jjhnsm9JA';

export const pageSeo = {
  title: 'C.P. y P. en D. Cirilo Reyes Cruz | Servicios contables, auditoría, fiscales y jurídicos',
  description:
    'Despacho profesional en Tlalnepantla de Baz para servicios contables, auditoría, fiscales y jurídicos. Asesoría integral para personas físicas, morales, emprendedores y empresas.'
};

export const brand = {
  initials: 'CRC',
  name: 'C.P. y P. en D. Cirilo Reyes Cruz',
  shortName: 'Cirilo Reyes Cruz',
  descriptor: 'Despacho de Servicios Contables, Auditoría, Fiscales y Jurídicos',
  location: 'Tlalnepantla de Baz, Estado de México'
};

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' }
];

export const hero = {
  badge: 'Despacho Profesional · Estado de México',
  title: 'Soluciones contables, auditoría, fiscales y jurídicas a tu medida',
  highlighted: 'contables, auditoría, fiscales',
  description:
    'Más de 30 años de experiencia asesorando personas físicas y morales en materia contable, auditoría, fiscal y 10 años de experiencia en materia legal. Tu tranquilidad financiera, nuestra prioridad.',
  primaryCta: {
    label: 'Solicitar consulta',
    href: '#contacto'
  },
  secondaryCta: {
    label: 'Ver servicios',
    href: '#servicios'
  }
};

export const stats: Stat[] = [
  { value: '+30', label: 'Años de experiencia' },
  { value: '4', label: 'Áreas especializadas' },
  { value: '100%', label: 'Compromiso y confidencialidad' }
];

export const services: Service[] = [
  {
    title: 'Servicios Contables',
    description:
      'Llevamos la contabilidad de tu empresa con rigor y precisión, cumpliendo con todas las disposiciones vigentes.',
    points: [
      'Contabilidad general y de costos',
      'Estados financieros mensuales y anuales',
      'Conciliaciones bancarias',
      'Nómina y CFDI de nómina',
      'Control de activos fijos'
    ],
    icon: '📊',
    tone: 'blue'
  },
  {
    title: 'Servicio de Auditoría',
    description:
      'Revisamos el cumplimiento correcto y oportuno de obligaciones fiscales, corporativas y laborales para empresas.',
    points: [
      'Auditoría de cumplimiento fiscal',
      'Revisión de obligaciones SAT',
      'Auditoría para IMSS e INFONAVIT',
      'Cumplimiento laboral ante STPS',
      'Reportes claros para toma de decisiones'
    ],
    icon: '🔎',
    tone: 'slate'
  },
  {
    title: 'Servicios Fiscales',
    description:
      'Cumplimiento fiscal puntual y estrategias de optimización tributaria conforme al SAT y legislación vigente.',
    points: [
      'Declaraciones mensuales y anuales',
      'Atención de requerimientos SAT',
      'Devoluciones y compensaciones',
      'Planeación fiscal',
      'CFDI y facturación electrónica'
    ],
    icon: '🧾',
    tone: 'teal'
  },
  {
    title: 'Servicios Jurídicos',
    description:
      'Asesoría legal empresarial y patrimonial para proteger tus intereses con solidez y experiencia.',
    points: [
      'Constitución y disolución de sociedades',
      'Contratos mercantiles y civiles',
      'Defensa fiscal ante el SAT',
      'Amparos en materia fiscal',
      'Asesoría laboral'
    ],
    icon: '⚖️',
    tone: 'amber'
  }
];

export type FaqItem = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  /** Posición en services[]: título, puntos e icono salen de ahí. */
  serviceIndex: number;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  faq: FaqItem[];
};

// TODO(Cirilo): validar los textos de las páginas de servicio antes de publicar (el PR queda en borrador).
// TODO(Cirilo): preguntas omitidas hasta que responda; NO se renderizan:
//   contabilidad «¿Cómo empiezo?» (primer paso real: llamada, WhatsApp, documentos que se piden).
//   fiscal «¿Qué es la planeación fiscal?» (definición en 1–2 frases conforme a la legislación vigente).
//   jurídico «¿Qué pasa si necesito defensa fiscal o un amparo?» (alcance real y si se canaliza a abogado titulado).
// TODO(Cirilo): validar respuestas mostradas: auditoría (alcance y entregables), fiscal (redacción del
//   requerimiento; condiciones de devoluciones y compensaciones), jurídico (alcance de la constitución y quién firma).
// TODO(Cirilo): jurídico, confirmar alcance y si algún trámite se canaliza a abogado titulado (no se muestra).
export const servicePages: ServicePage[] = [
  {
    slug: 'contabilidad',
    serviceIndex: 0,
    h1: 'Servicios contables en Tlalnepantla de Baz',
    metaTitle: 'Servicios contables en Tlalnepantla | Cirilo Reyes',
    metaDescription:
      'Contabilidad general y de costos, estados financieros, nómina y CFDI para personas físicas y empresas en Tlalnepantla de Baz.',
    intro:
      'Llevamos la contabilidad de tu empresa con rigor y precisión, conforme a las disposiciones vigentes: contabilidad general y de costos, estados financieros mensuales y anuales, conciliaciones bancarias, nómina con CFDI de nómina y control de activos fijos. Atendemos a personas físicas, morales y emprendedores en Tlalnepantla de Baz y el Estado de México.',
    faq: [
      {
        question: '¿Qué incluye la contabilidad mensual?',
        answer:
          'Contabilidad general y de costos, estados financieros mensuales y anuales, conciliaciones bancarias, nómina y CFDI de nómina y control de activos fijos.'
      },
      {
        question: '¿Atienden a personas físicas y a empresas?',
        answer: 'Sí: personas físicas, morales, emprendedores y empresas consolidadas.'
      }
    ]
  },
  {
    slug: 'auditoria',
    serviceIndex: 1,
    h1: 'Auditoría de cumplimiento fiscal, IMSS e INFONAVIT',
    metaTitle: 'Auditoría fiscal, IMSS e INFONAVIT | Cirilo Reyes',
    metaDescription:
      'Revisión de cumplimiento de obligaciones fiscales, laborales y de seguridad social para empresas en Estado de México.',
    intro:
      'Revisamos que tu empresa cumpla de forma correcta y oportuna sus obligaciones fiscales, corporativas y laborales ante el SAT, el IMSS, el INFONAVIT y la STPS. Recibes reportes claros para tomar decisiones. Atendemos empresas en Tlalnepantla de Baz y el Estado de México.',
    faq: [
      {
        question: '¿Qué revisa una auditoría de cumplimiento?',
        answer: 'Obligaciones fiscales ante el SAT, IMSS e INFONAVIT y cumplimiento laboral ante STPS.'
      },
      { question: '¿Qué recibo al terminar?', answer: 'Reportes claros para la toma de decisiones.' }
    ]
  },
  {
    slug: 'fiscal',
    serviceIndex: 2,
    h1: 'Servicios fiscales y atención al SAT',
    metaTitle: 'Servicios fiscales y atención al SAT | Cirilo Reyes',
    metaDescription:
      'Declaraciones, requerimientos del SAT, devoluciones, compensaciones y planeación fiscal en Tlalnepantla de Baz.',
    intro:
      'Te ayudamos a cumplir tus obligaciones ante el SAT: declaraciones mensuales y anuales, atención de requerimientos, devoluciones y compensaciones, planeación fiscal y facturación electrónica (CFDI). Atendemos a personas físicas, morales, emprendedores y empresas en Tlalnepantla de Baz y el Estado de México.',
    faq: [
      {
        question: '¿Qué hago si el SAT me envía un requerimiento?',
        answer:
          'No lo ignores: el propio documento indica el plazo para responder. Reúne el documento y contáctanos para revisarlo y atenderlo a tiempo.'
      },
      {
        question: '¿Pueden ayudarme con devoluciones o compensaciones de impuestos?',
        answer: 'Sí, es parte de los servicios fiscales.'
      }
    ]
  },
  {
    slug: 'juridico',
    serviceIndex: 3,
    h1: 'Asesoría jurídica empresarial y fiscal',
    metaTitle: 'Asesoría jurídica empresarial | Cirilo Reyes',
    metaDescription:
      'Constitución de sociedades, contratos, defensa fiscal y amparos en materia fiscal. Atención en Tlalnepantla de Baz.',
    intro:
      'Asesoría legal empresarial y patrimonial para proteger tus intereses: constitución y disolución de sociedades, contratos mercantiles y civiles, defensa fiscal ante el SAT, amparos en materia fiscal y asesoría laboral. Atendemos en Tlalnepantla de Baz y el Estado de México.',
    faq: [
      {
        question: '¿Pueden constituir mi empresa?',
        answer: 'Constitución y disolución de sociedades forma parte del servicio.'
      }
    ]
  }
];

export const about = {
  tag: 'Nosotros',
  title: 'Experiencia y compromiso a tu servicio',
  intro: 'Somos un despacho multidisciplinario con un enfoque personalizado para cada cliente.',
  credentialTitle: 'Contador Público · Pasante en Derecho',
  badges: ['IMCP Certificado', 'SAT / C.P. registrado', 'EDOMEX Impuesto sobre Nóminas', 'IMSS Auditor Registrado'],
  heading: 'Un despacho de confianza',
  paragraphs: [
    'Con formación en Contaduría Pública y Derecho, el C.P. y P. en D. Cirilo Reyes Cruz ofrece una visión integral que combina el rigor financiero, la auditoría y el análisis jurídico, brindando soluciones completas y efectivas.',
    'Atendemos a personas físicas, morales, emprendedores y empresas consolidadas, con trato personalizado y respuesta oportuna a cada necesidad.'
  ],
  values: [
    {
      title: 'Integridad',
      description: 'Actuamos con ética profesional en cada servicio.'
    },
    {
      title: 'Confidencialidad',
      description: 'Tu información siempre resguardada y protegida.'
    },
    {
      title: 'Puntualidad',
      description: 'Cumplimos plazos y obligaciones a tiempo.'
    },
    {
      title: 'Especialización',
      description: 'Actualización constante en materia fiscal y legal.'
    }
  ]
};

export const contact = {
  tag: 'Contacto',
  title: 'Agenda tu consulta',
  intro: 'Contáctanos hoy mismo. La primera consulta es sin costo y sin compromiso.',
  heading: 'Información de contacto',
  description:
    'Estamos listos para atenderte de manera presencial o en línea. Escríbenos o llámanos y con gusto resolveremos tus dudas.',
  formTitle: 'Envíanos un mensaje',
  submitLabel: 'Enviar mensaje por WhatsApp',
  errorMessage: 'Por favor completa al menos tu nombre y correo.',
  successMessage: 'Listo. Se abrirá WhatsApp con tu mensaje preparado.',
  items: [
    {
      icon: '📍',
      label: 'Ubicación',
      value: `${address.street},\nC.P. ${address.postalCode}, ${address.locality}, ${address.region}`,
      link: {
        href: mapUrl,
        label: 'Ver en el mapa',
        ariaLabel: 'Ver en el mapa la ubicación del despacho (se abre en una pestaña nueva)'
      }
    },
    { icon: '📞', label: 'Teléfono / WhatsApp', value: whatsappPhone },
    { icon: '✉️', label: 'Correo electrónico', value: 'reyescc1962@gmail.com' },
    { icon: '🕐', label: 'Horario de atención', value: hours.text }
  ] satisfies ContactItem[]
};
