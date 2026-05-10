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
  caseDescription?: string;
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

  shortDescription: "Разработка key visual для бренда Winline.",
  coverImage: "/notion/kv-winline/1920_1080_5_(1).png",

  sections: [
    {
      title: "Сбор референсов",
      images: ["/notion/kv-winline/nachalo.png"]
    },
    {
      title: "Скетчи",
      images: ["/notion/kv-winline/16_9_(1).jpg"]
    },
    {
      title: "Проработка сцены",
      images: [
        "/notion/kv-winline/1920_1080_(1).png",
        "/notion/kv-winline/1920_1080_5_(1).png"
      ]
    },
    {
      title: "Финальный KV",
      images: ["/notion/kv-winline/KV_10.png"]
    },
    {
      title: "Анимация",
      images: ["/notion/kv-winline/juxtapose-gif.gif"]
    }
  ],

  problem: "Нужно было создать заметный key visual и единые правила адаптации под разные форматы для коммуникации бренда.",
  approach: "Собрала визуальный язык (форма, композиция, типографика), заложила вариативность и подготовила набор адаптаций под носители.",
  outcome: "Получилась KV-система, которую можно быстро масштабировать под digital-форматы и кампании.",

  tools: ["Figma", "Photoshop", "Krea Ai"],
  links: [],
  featured: true,
  order: 1
},
  {
    slug: 'Лутбоксы Winline',
    title: 'Лутбоксы Winline',
    client: 'Winline',
    year: 2024,
    role: ['Concept designer'],
    tags: ['Concept design', 'Retouch', 'Visual System'],
    shortDescription: 'Создание концепции игровых лутбоксов для приложения Winline.',
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
    problem: 'Высокий bounce rate в категории одежды и брошенные корзины на шаге доставки.',
    approach:
      'Сделали приоритизацию гипотез по ICE, внедрили быстрые фильтры и переработали микро-копирайтинг в checkout.',
    outcome: 'Конверсия выросла с 1.8% до 2.6%, средний чек увеличился на 12%.',
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
    shortDescription: 'Две серии iOS-заставок для Winline: новогодняя и брендовая с командами и амбассадорами',
    coverImage:
      '/wallpapers/1-%D0%B1%D0%BB%D0%BE%D0%BA.png',
    sections: [
      {
        title: 'Gallery',
        images: [
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80'
        ]
      }
    ],
    problem: 'Студенты теряли мотивацию из-за отсутствия прозрачных целей и обратной связи.',
    approach: 'Добавили roadmap, weekly check-ins и визуальные сигналы прогресса в личном кабинете.',
    outcome: 'Retention 8-недельной программы вырос с 42% до 63%.',
    tools: ['Figma', 'FigJam', 'Amplitude'],
    links: [{ label: 'Product Tour', url: 'https://example.com/edwise-tour' }],
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
    shortDescription: 'Новый аналитический dashboard для enterprise-клиентов.',
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
    problem: 'Пользователи тратили много времени на формирование регулярных отчетов.',
    approach: 'Спроектировали сохранённые представления, drag-n-drop виджеты и шаблоны отчетов.',
    outcome: 'Время подготовки отчета сократилось в 2.4 раза.',
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
    shortDescription: 'Лендинг для запуска новой линейки smart-одежды.',
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
    problem: 'Бренд выходил в новый сегмент и нуждался в быстром digital-позиционировании.',
    approach: 'Собрали storytelling-структуру, motion-блоки и интеграцию с CRM для лидов.',
    outcome: '4 800 лидов за 6 недель рекламной кампании.',
    tools: ['Figma', 'Webflow', 'After Effects'],
    links: [{ label: 'Campaign Page', url: 'https://example.com/urbanfit' }],
    featured: false,
    order: 5
  },
  {
    slug: 'medlink-patient-app',
    title: 'Тендеры',
    client: 'Medlink',
    year: 2024,
    role: ['UX Designer'],
    tags: ['Visual Design', 'Campaign', 'KV System'],
    shortDescription: 'Создание визуалов для тендерных заданий',
    caseDescription: `В агенстве мне удалось поучаствовать в тендерах на креативную поддержку. Расскажу про некоторые кейсы от идей до их воплощения. Бренды с которыми я поработала: Лемана ПРО, Барьер, Купер.

Задача тендера Лемана ПРО: создать 3 КВ в различном цветовом кодировании в зависимости от сегмента сотрудников. Макеты призывали выбирать работу в проверенной компании, развиваться вместе с ней. Также были использованы фирменные сетки построения макетов бренда.

Каждый цвет соответствовал своему сегменту: серый - логисты, желтый - сотрудники гипермаркетов, оранжевый - руководители, фиолетовый - офисным сотрудникам. Общий КВ объединил все сегменты цветами и сеткой.

Задача тендера Барьер: создать КВ на основе фото со съемки видео-ролика, создать костюм робота и подготовить раскадровку для анимационных баннеров. Цветокор баннера должен был отличаться от цвета неба, поэтому было решено частично затемнить и добавить фирменного бирюзового на фон.

Задача тендера Барьер: создать КВ на основе фото со съемки видео-ролика, создать костюм робота и подготовить раскадровку для анимационных баннеров. Цветокор баннера должен был отличаться от цвета неба, поэтому было решено частично затемнить и добавить фирменного бирюзового на фон. Перед съемкой был нарисован скетч будущего баннера с роботом в ванне, который использует фильтр для воды, на его основе и были сделаны будущие кадры для КВ.

Задача тендера Купер: создать нескольок КВ по идеям гигантизма и гранжа с курьером - как главным героем. Задействовать нейросети из-за сжатых сроков, подготовить раскадровки с примерами анимации.`,
    coverImage:
      '/Tenders/2%20%D0%B1%D0%BB%D0%BE%D0%BA.png',
    sections: [
      {
        title: 'Gallery',
        images: [
          '/Tenders/%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA.jpg',
          '/Tenders/%D0%91%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%202.jpg',
          '/Tenders/%D0%91%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%203.jpg',
          '/Tenders/4%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0.png',
          '/Tenders/%D0%91%D0%B0%D1%80%D1%8C%D0%B5%D1%80%201%20%D0%B1%D0%BB%D0%BE%D0%BA.png',
          '/Tenders/2%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
          '/Tenders/3%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
          '/Tenders/5%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
          '/Tenders/960x720_%D0%90%D0%BD%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-original.mp4',
          '/Tenders/1%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
          '/Tenders/2%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
          '/Tenders/3%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
          '/Tenders/%D0%9E%D0%9E%D0%9D.png',
          '/Tenders/KUPER_KV_FHD_v01-original.mp4'
        ]
      }
    ],
    problem: 'Пациенты пропускали приём из-за сложной навигации и слабых напоминаний.',
    approach: 'Переработали пользовательские сценарии, добавили персонализированные уведомления.',
    outcome: 'Количество пропущенных приёмов снизилось на 22%.',
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
    shortDescription: 'Портал для управления поставками и SLA в реальном времени.',
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
    problem: 'Диспетчеры переключались между 4 системами для одной операционной задачи.',
    approach: 'Провели service blueprint, объединили трекинг, алерты и отчеты в едином интерфейсе.',
    outcome: 'Среднее время реакции на инцидент сократилось на 31%.',
    tools: ['Miro', 'Figma', 'Confluence'],
    links: [{ label: 'Internal Demo', url: 'https://example.com/orbit-demo' }],
    featured: false,
    order: 7
  }
];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export const featuredProjects = sortedProjects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  sortedProjects.find((project) => project.slug === slug);
