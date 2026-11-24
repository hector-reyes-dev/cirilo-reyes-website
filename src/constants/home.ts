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
};

export const address = {
  locality: 'Tlalnepantla de Baz',
  region: 'Estado de México',
  country: 'MX'
};

// Fuente única del horario: el texto visible y el JSON-LD salen de aquí.
export const hours = {
  text: 'Lun - Vie: 8:00 am - 6:00 pm',
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '18:00'
};

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
    'Más de 30 años de experiencia asesorando a personas físicas y morales en materia contable, auditoría y fiscal, junto con asesoría jurídica empresarial. Tu tranquilidad financiera, nuestra prioridad.',
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
          'Depende del alcance acordado. En el servicio integral incluye contabilidad general y de costos, estados financieros mensuales y anuales, conciliaciones bancarias, nómina con CFDI y control de activos fijos. En un esquema básico, puede cubrir únicamente la presentación de declaraciones.'
      },
      {
        question: '¿Atienden a personas físicas y a empresas?',
        answer:
          'Sí. Atendemos tanto a personas físicas (incluidos regímenes de actividad empresarial y RESICO) como a empresas y personas morales, desde emprendedores hasta negocios consolidados.'
      },
      {
        question: '¿Cómo empiezo a trabajar con ustedes?',
        answer:
          'El primer paso es enviarnos un mensaje por WhatsApp para revisar tu caso. Para iniciar el alta o diagnóstico, normalmente se requiere tu firma electrónica (e.firma) y/o contraseña del SAT, según el servicio que necesites.'
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
        answer:
          'Realizamos la revisión integral de los aspectos fiscales del contribuyente ante el SAT, así como el cumplimiento de obligaciones ante el IMSS, INFONAVIT y en materia laboral ante la STPS.'
      },
      {
        question: '¿Qué recibo al terminar la auditoría?',
        answer:
          'Al concluir la revisión se entrega un informe o dictamen de cumplimiento con los hallazgos y puntos relevantes para la toma de decisiones de tu empresa.'
      },
      {
        question: '¿Cuánto tiempo tarda una auditoría?',
        answer:
          'La duración depende del tamaño de la empresa y de que la información a revisar se entregue de forma oportuna y completa.'
      }
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
          'No lo ignores: el propio documento indica el plazo para responder. Reúne el requerimiento y contáctanos por WhatsApp para revisarlo juntos y atenderlo a tiempo con orientación profesional.'
      },
      {
        question: '¿Pueden ayudarme con devoluciones o compensaciones de impuestos?',
        answer:
          'Sí. Gestionamos tanto devoluciones como compensaciones de saldos a favor, incluyendo IVA e ISR, conforme a las disposiciones fiscales vigentes.'
      },
      {
        question: '¿Qué es la planeación fiscal?',
        answer:
          'Es proyectar tu futuro fiscal de forma ordenada y conforme a la ley para cumplir adecuadamente con tus obligaciones y no arriesgar tu patrimonio.'
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
        answer:
          'Sí. Gestionamos la constitución y disolución de sociedades: en el caso de Sociedades por Acciones Simplificadas (SAS) el trámite se realiza en línea, y en el resto de las sociedades mediante formalización ante notario o corredor público.'
      },
      {
        question: '¿Qué pasa si necesito defensa fiscal o un amparo?',
        answer:
          'Nos encargamos de estructurar los medios de defensa fiscal y, de manera excepcional, los amparos. Cuando el trámite requiere la firma de un abogado titulado, se coordina con uno para su presentación.'
      },
      {
        question: '¿Qué incluye la asesoría laboral?',
        answer:
          'Incluye asesoría laboral integral para empresas y patrones: elaboración y revisión de contratos, cálculo de finiquitos y liquidaciones, y atención de demandas laborales.'
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
    'Te atendemos de lunes a viernes por mensaje de WhatsApp con respuesta oportuna, o de forma presencial en punto a convenir de común acuerdo.',
  formTitle: 'Envíanos un mensaje',
  submitLabel: 'Enviar mensaje por WhatsApp',
  errorMessage: 'Por favor completa al menos tu nombre y correo.',
  successMessage: 'Listo. Se abrirá WhatsApp con tu mensaje preparado.',
  items: [
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'Tlalnepantla de Baz, Estado de México\nAtención por WhatsApp o presencial en punto a convenir'
    },
    { icon: '📞', label: 'Teléfono / WhatsApp', value: whatsappPhone },
    { icon: '✉️', label: 'Correo electrónico', value: 'reyescc1962@gmail.com' },
    { icon: '🕐', label: 'Horario de atención', value: hours.text }
  ] satisfies ContactItem[]
};
