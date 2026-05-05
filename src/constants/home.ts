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
    { icon: '📍', label: 'Ubicación', value: 'Tlalnepantla de Baz, Estado de México' },
    { icon: '📞', label: 'Teléfono / WhatsApp', value: whatsappPhone },
    { icon: '✉️', label: 'Correo electrónico', value: 'reyescc1962@gmail.com' },
    { icon: '🕐', label: 'Horario de atención', value: 'Lun - Vie: 9:00 am - 7:00 pm\nSáb: 9:00 am - 1:00 pm' }
  ] satisfies ContactItem[]
};
