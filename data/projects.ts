export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectSection = {
  title: string;
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  role: string[];
  tags: string[];
  shortDescription: string;
  coverImage: string;
  sections: ProjectSection[];
  problem: string;
  approach: string;
  outcome: string;
  tools: string[];
  links: ProjectLink[];
  featured: boolean;
  order: number;
};

export const projects = [
{
  slug: "kv-winline",
  title: "KV Winline",
  client: "Winline",
  year: 2024,
  role: ["Creative concept", "Key Visual", "Art direction"],
  tags: ["KV System", "Campaign", "Brand"],

  shortDescription: "Р Р°Р·СЂР°Р±РѕС‚РєР° key visual РґР»СЏ Р±СЂРµРЅРґР° Winline.",
  coverImage: "/notion/kv-winline/1920_1080_5_(1).png",

  sections: [
  {
      title: "РЎР±РѕСЂ СЂРµС„РµСЂРµРЅСЃРѕРІ",
      images: ["/notion/kv-winline/nachalo.png"]
    },
    {
      title: "РЎРєРµС‚С‡Рё",
      images: ["/notion/kv-winline/16_9_(1).jpg"]
    },
    {
      title: "РџСЂРѕСЂР°Р±РѕС‚РєР° СЃС†РµРЅС‹",
      images: [
        "/notion/kv-winline/1920_1080_(1).png",
        "/notion/kv-winline/1920_1080_5_(1).png"
      ]
    },
    {
      title: "Р¤РёРЅР°Р»СЊРЅС‹Р№ KV",
      images: ["/notion/kv-winline/KV_10.png"]
    },
    {
      title: "РђРЅРёРјР°С†РёСЏ",
      images: ["/notion/kv-winline/juxtapose-gif.gif"]
    }
  ],

  problem: "РќСѓР¶РЅРѕ Р±С‹Р»Рѕ СЃРѕР·РґР°С‚СЊ Р·Р°РјРµС‚РЅС‹Р№ key visual Рё РµРґРёРЅС‹Рµ РїСЂР°РІРёР»Р° Р°РґР°РїС‚Р°С†РёРё РїРѕРґ СЂР°Р·РЅС‹Рµ С„РѕСЂРјР°С‚С‹ РґР»СЏ РєРѕРјРјСѓРЅРёРєР°С†РёРё Р±СЂРµРЅРґР°.",
  approach: "РЎРѕР±СЂР°Р»Р° РІРёР·СѓР°Р»СЊРЅС‹Р№ СЏР·С‹Рє (С„РѕСЂРјР°, РєРѕРјРїРѕР·РёС†РёСЏ, С‚РёРїРѕРіСЂР°С„РёРєР°), Р·Р°Р»РѕР¶РёР»Р° РІР°СЂРёР°С‚РёРІРЅРѕСЃС‚СЊ Рё РїРѕРґРіРѕС‚РѕРІРёР»Р° РЅР°Р±РѕСЂ Р°РґР°РїС‚Р°С†РёР№ РїРѕРґ РЅРѕСЃРёС‚РµР»Рё.",
  outcome: "РџРѕР»СѓС‡РёР»Р°СЃСЊ KV-СЃРёСЃС‚РµРјР°, РєРѕС‚РѕСЂСѓСЋ РјРѕР¶РЅРѕ Р±С‹СЃС‚СЂРѕ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°С‚СЊ РїРѕРґ digital-С„РѕСЂРјР°С‚С‹ Рё РєР°РјРїР°РЅРёРё.",

  tools: ["Figma", "Photoshop", "Krea Ai"],
  links: [],
  featured: true,
  order: 1
},
  {
    slug: 'lootboxes-winline',
    title: 'Р›СѓС‚Р±РѕРєСЃС‹ Winline',
    client: 'Winline',
    year: 2024,
    role: ['Concept designer'],
    tags: ['Concept design', 'retouch', 'Visual System'],
    shortDescription: 'РЎРѕР·РґР°РЅРёРµ РєРѕРЅС†РµРїС†РёРё РёРіСЂРѕРІС‹С… Р»СѓС‚Р±РѕРєСЃРѕРІ РґР»СЏ РїСЂРёР»РѕР¶РµРЅРёСЏ Winline.',
    coverImage:
      '/notion/Lootboxes/lootboxes-cover.png',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'Р’С‹СЃРѕРєРёР№ bounce rate РІ РєР°С‚РµРіРѕСЂРёРё РѕРґРµР¶РґС‹ Рё Р±СЂРѕС€РµРЅРЅС‹Рµ РєРѕСЂР·РёРЅС‹ РЅР° С€Р°РіРµ РґРѕСЃС‚Р°РІРєРё.',
    approach:
      'РЎРґРµР»Р°Р»Рё РїСЂРёРѕСЂРёС‚РёР·Р°С†РёСЋ РіРёРїРѕС‚РµР· РїРѕ ICE, РІРЅРµРґСЂРёР»Рё Р±С‹СЃС‚СЂС‹Рµ С„РёР»СЊС‚СЂС‹ Рё РїРµСЂРµСЂР°Р±РѕС‚Р°Р»Рё РјРёРєСЂРѕ-РєРѕРїРёСЂР°Р№С‚РёРЅРі РІ checkout.',
    outcome: 'РљРѕРЅРІРµСЂСЃРёСЏ РІС‹СЂРѕСЃР»Р° СЃ 1.8% РґРѕ 2.6%, СЃСЂРµРґРЅРёР№ С‡РµРє СѓРІРµР»РёС‡РёР»СЃСЏ РЅР° 12%.',
    tools: ['GA4', 'Hotjar', 'Figma', 'Miro'],
    links: [{ label: 'Live Store', url: 'https://example.com/aurora' }],
    featured: true,
    order: 2
  },
    {
    slug: 'edtech-mentor-platform',
    title: 'Обои Winline',
    client: 'Edwise',
    year: 2024,
    role: ['Product Designer'],
    tags: ['Branding', 'Wallpapers', 'Visual Design'],
    shortDescription: 'Создание концепции игровых лутбоксов для приложения Winline.',
    coverImage:
      '/wallpapers/1-блок.png',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'Высокий bounce rate в категории одежды и брошенные корзины на шаге доставки.',
    approach:
      'Сделали приоритизацию гипотез по ICE, внедрили быстрые фильтры и переработали микро-копирайтинг в checkout.',
    outcome: 'Конверсия выросла с 1.8% до 2.6%, средний чек увеличился на 12%.',
    tools: ['GA4', 'Hotjar', 'Figma', 'Miro'],
    links: [{ label: 'Live Store', url: 'https://example.com/aurora' }],
    featured: true,
    order: 3
  },
  {
    slug: 'helios-saas-dashboard',
    title: 'Helios SaaS Dashboard',
    client: 'Helios Cloud',
    year: 2024,
    role: ['Senior Product Designer'],
    tags: ['SaaS', 'B2B', 'Data Viz'],
    shortDescription: 'РќРѕРІС‹Р№ Р°РЅР°Р»РёС‚РёС‡РµСЃРєРёР№ dashboard РґР»СЏ enterprise-РєР»РёРµРЅС‚РѕРІ.',
    coverImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1551281044-8d8d7f8ea59f?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'РџРѕР»СЊР·РѕРІР°С‚РµР»Рё С‚СЂР°С‚РёР»Рё РјРЅРѕРіРѕ РІСЂРµРјРµРЅРё РЅР° С„РѕСЂРјРёСЂРѕРІР°РЅРёРµ СЂРµРіСѓР»СЏСЂРЅС‹С… РѕС‚С‡РµС‚РѕРІ.',
    approach: 'РЎРїСЂРѕРµРєС‚РёСЂРѕРІР°Р»Рё СЃРѕС…СЂР°РЅС‘РЅРЅС‹Рµ РїСЂРµРґСЃС‚Р°РІР»РµРЅРёСЏ, drag-n-drop РІРёРґР¶РµС‚С‹ Рё С€Р°Р±Р»РѕРЅС‹ РѕС‚С‡РµС‚РѕРІ.',
    outcome: 'Р’СЂРµРјСЏ РїРѕРґРіРѕС‚РѕРІРєРё РѕС‚С‡РµС‚Р° СЃРѕРєСЂР°С‚РёР»РѕСЃСЊ РІ 2.4 СЂР°Р·Р°.',
    tools: ['Figma', 'Storybook', 'Dovetail'],
    links: [{ label: 'Design System', url: 'https://example.com/helios-ds' }],
    featured: false,
    order: 4
  },
  {
    slug: 'urbanfit-brand-site',
    title: 'Urbanfit Brand Site',
    client: 'Urbanfit',
    year: 2021,
    role: ['Web Designer', 'No-code Developer'],
    tags: ['Marketing', 'Branding', 'Landing'],
    shortDescription: 'Р›РµРЅРґРёРЅРі РґР»СЏ Р·Р°РїСѓСЃРєР° РЅРѕРІРѕР№ Р»РёРЅРµР№РєРё smart-РѕРґРµР¶РґС‹.',
    coverImage:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'Р‘СЂРµРЅРґ РІС‹С…РѕРґРёР» РІ РЅРѕРІС‹Р№ СЃРµРіРјРµРЅС‚ Рё РЅСѓР¶РґР°Р»СЃСЏ РІ Р±С‹СЃС‚СЂРѕРј digital-РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРё.',
    approach: 'РЎРѕР±СЂР°Р»Рё storytelling-СЃС‚СЂСѓРєС‚СѓСЂСѓ, motion-Р±Р»РѕРєРё Рё РёРЅС‚РµРіСЂР°С†РёСЋ СЃ CRM РґР»СЏ Р»РёРґРѕРІ.',
    outcome: '4 800 Р»РёРґРѕРІ Р·Р° 6 РЅРµРґРµР»СЊ СЂРµРєР»Р°РјРЅРѕР№ РєР°РјРїР°РЅРёРё.',
    tools: ['Figma', 'Webflow', 'After Effects'],
    links: [{ label: 'Campaign Page', url: 'https://example.com/urbanfit' }],
    featured: false,
    order: 5
  },
  {
    slug: 'medlink-patient-app',
    title: 'Medlink Patient App',
    client: 'Medlink',
    year: 2023,
    role: ['UX Designer'],
    tags: ['HealthTech', 'Mobile', 'Accessibility'],
    shortDescription: 'РџСЂРёР»РѕР¶РµРЅРёРµ РґР»СЏ Р·Р°РїРёСЃРё Рє РІСЂР°С‡Р°Рј Рё РјРѕРЅРёС‚РѕСЂРёРЅРіР° Р»РµС‡РµРЅРёСЏ.',
    coverImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'РџР°С†РёРµРЅС‚С‹ РїСЂРѕРїСѓСЃРєР°Р»Рё РїСЂРёС‘Рј РёР·-Р·Р° СЃР»РѕР¶РЅРѕР№ РЅР°РІРёРіР°С†РёРё Рё СЃР»Р°Р±С‹С… РЅР°РїРѕРјРёРЅР°РЅРёР№.',
    approach: 'РџРµСЂРµСЂР°Р±РѕС‚Р°Р»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРµ СЃС†РµРЅР°СЂРёРё, РґРѕР±Р°РІРёР»Рё РїРµСЂСЃРѕРЅР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹Рµ СѓРІРµРґРѕРјР»РµРЅРёСЏ.',
    outcome: 'РљРѕР»РёС‡РµСЃС‚РІРѕ РїСЂРѕРїСѓС‰РµРЅРЅС‹С… РїСЂРёС‘РјРѕРІ СЃРЅРёР·РёР»РѕСЃСЊ РЅР° 22%.',
    tools: ['Figma', 'Principle', 'UserTesting'],
    links: [{ label: 'App Store Mock', url: 'https://example.com/medlink' }],
    featured: true,
    order: 6
  },
  {
    slug: 'orbit-logistics-portal',
    title: 'Orbit Logistics Portal',
    client: 'Orbit Logistics',
    year: 2022,
    role: ['Product Designer', 'Facilitator'],
    tags: ['Logistics', 'B2B', 'Service Design'],
    shortDescription: 'РџРѕСЂС‚Р°Р» РґР»СЏ СѓРїСЂР°РІР»РµРЅРёСЏ РїРѕСЃС‚Р°РІРєР°РјРё Рё SLA РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё.',
    coverImage:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'Р”РёСЃРїРµС‚С‡РµСЂС‹ РїРµСЂРµРєР»СЋС‡Р°Р»РёСЃСЊ РјРµР¶РґСѓ 4 СЃРёСЃС‚РµРјР°РјРё РґР»СЏ РѕРґРЅРѕР№ РѕРїРµСЂР°С†РёРѕРЅРЅРѕР№ Р·Р°РґР°С‡Рё.',
    approach: 'РџСЂРѕРІРµР»Рё service blueprint, РѕР±СЉРµРґРёРЅРёР»Рё С‚СЂРµРєРёРЅРі, Р°Р»РµСЂС‚С‹ Рё РѕС‚С‡РµС‚С‹ РІ РµРґРёРЅРѕРј РёРЅС‚РµСЂС„РµР№СЃРµ.',
    outcome: 'РЎСЂРµРґРЅРµРµ РІСЂРµРјСЏ СЂРµР°РєС†РёРё РЅР° РёРЅС†РёРґРµРЅС‚ СЃРѕРєСЂР°С‚РёР»РѕСЃСЊ РЅР° 31%.',
    tools: ['Miro', 'Figma', 'Confluence'],
    links: [{ label: 'Internal Demo', url: 'https://example.com/orbit-demo' }],
    featured: false,
    order: 7
  },
  {
    slug: 'pulse-festival-experience',
    title: 'Pulse Festival Experience',
    client: 'Pulse Fest',
    year: 2024,
    role: ['Experience Designer'],
    tags: ['Events', 'Mobile Web', 'Interactive'],
    shortDescription: 'РРЅС‚РµСЂР°РєС‚РёРІРЅС‹Р№ digital-РіРёРґ РґР»СЏ РјСѓР·С‹РєР°Р»СЊРЅРѕРіРѕ С„РµСЃС‚РёРІР°Р»СЏ.',
    coverImage:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'РџРѕСЃРµС‚РёС‚РµР»Рё РЅРµ СѓСЃРїРµРІР°Р»Рё РѕСЂРёРµРЅС‚РёСЂРѕРІР°С‚СЊСЃСЏ РІ СЂР°СЃРїРёСЃР°РЅРёРё Рё Р°РєС‚РёРІРЅРѕСЃС‚СЏС… С„РµСЃС‚РёРІР°Р»СЏ.',
    approach: 'РЎРѕР·РґР°Р»Рё РїРµСЂСЃРѕРЅР°Р»РёР·РёСЂРѕРІР°РЅРЅРѕРµ СЂР°СЃРїРёСЃР°РЅРёРµ, push-РЅР°РІРёРіР°С†РёСЋ Рё РєР°СЂС‚Сѓ СЃС†РµРЅ.',
    outcome: '65% РїРѕСЃРµС‚РёС‚РµР»РµР№ РёСЃРїРѕР»СЊР·РѕРІР°Р»Рё РіРёРґ РµР¶РµРґРЅРµРІРЅРѕ РІ РґРЅРё С„РµСЃС‚РёРІР°Р»СЏ.',
    tools: ['Figma', 'Framer', 'GA4'],
    links: [{ label: 'Event Site', url: 'https://example.com/pulse' }],
    featured: true,
    order: 8
  }
];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export const featuredProjects = sortedProjects.filter((project) => project.featured);

const legacySlugMap: Record<string, string> = {
  'Р›СѓС‚Р±РѕРєСЃС‹ Winline': 'lootboxes-winline'
};

const normalizeSlug = (value: string) => {
  const safeDecoded = (() => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  })();

  return legacySlugMap[safeDecoded] ?? safeDecoded;
};

export const getProjectBySlug = (slug: string) => {
  const normalizedSlug = normalizeSlug(slug);
  return sortedProjects.find((project) => normalizeSlug(project.slug) === normalizedSlug);
};

