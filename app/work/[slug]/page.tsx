import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CaseLayout } from '@/components/case-layout';
import { getProjectBySlug, sortedProjects } from '@/data/projects';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return sortedProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const decodedSlug = (() => {
    try {
      return decodeURIComponent(params.slug);
    } catch {
      return params.slug;
    }
  })();

  const project = getProjectBySlug(decodedSlug);
  const wallpapersDir = path.join(process.cwd(), 'public', 'wallpapers');
  const wallpaperImages = fs
    .readdirSync(wallpapersDir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, 'ru', { numeric: true }))
    .map((file) => `/wallpapers/${encodeURIComponent(file)}`);
  const isWinlineCase = decodedSlug === 'kv-winline';
  const isLootboxesCase = decodedSlug === 'lootboxes-winline' || decodedSlug === 'Лутбоксы Winline';
  const isWallpapersCase = decodedSlug === 'edtech-mentor-platform';
  const isTendersCase = decodedSlug === 'medlink-patient-app';
  const isCustomCaseLayout = isWinlineCase || isLootboxesCase;

  if (!project) {
    notFound();
  }

  const wallpapersSections = [{ title: 'Gallery', images: wallpaperImages }];

  const displayedSections = isCustomCaseLayout
    ? project.sections
    : isWallpapersCase
      ? wallpapersSections
      : [{ title: 'Overview', images: [project.coverImage] }, ...project.sections];

  const currentIndex = sortedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = sortedProjects[(currentIndex + 1) % sortedProjects.length];
  const nextLinkClass =
    'text-2xl font-normal leading-none text-white hover:text-white/80 max-[374px]:text-xl sm:text-3xl md:text-4xl';
  const nextArrowClass =
    'ml-2 inline-block align-middle text-[0.85em] font-light max-[374px]:ml-1.5 max-[374px]:text-[0.8em] sm:ml-3 md:ml-4 md:text-[0.95em]';
  const footerGridClass =
    'grid grid-cols-1 gap-8 text-base leading-tight sm:text-lg md:grid-cols-[1.4fr_1fr_1fr] md:text-2xl';
  const descriptionParagraphs = (project.caseDescription ?? project.shortDescription).split(/\n\s*\n/);
  const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);
  const renderMedia = (src: string, alt: string, key?: string) =>
    isVideo(src) ? (
      <video key={key} className="w-full h-auto rounded-2xl" autoPlay muted loop playsInline controls>
        <source src={src} type="video/mp4" />
      </video>
    ) : (
      <img key={key} src={src} alt={alt} className="w-full h-auto rounded-2xl" loading="lazy" />
    );

  const caseFooter = (
    <section className="space-y-10 pt-8">
      <div className="flex justify-end">
        <Link href={`/work/${nextProject.slug}`} className={nextLinkClass}>
          <span className="align-middle">next</span>
          <span className={nextArrowClass}>→</span>
        </Link>
      </div>

      <div className="relative left-1/2 right-1/2 my-12 w-screen -ml-[50vw] -mr-[50vw] border-t border-neutral-700" />

      <div className={footerGridClass}>
        <div className="space-y-2">
          <a href="mailto:zakharyashchevad@bk.ru" className="block hover:text-white/80">
            zakharyashchevad@bk.ru
          </a>
          <a href="tel:+79521265853" className="block hover:text-white/80">
            +7 (952) 126 58 53
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">
          <div className="space-y-2">
            <p className="text-sm text-white/60 md:text-base">Telegram channel</p>
            <a href="https://t.me/dashadesgn" target="_blank" rel="noreferrer" className="block hover:text-white/80">
              @dashadesgn
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-white/60 md:text-base">My telegram</p>
            <a href="https://t.me/i_young_designer" target="_blank" rel="noreferrer" className="block hover:text-white/80">
              @i_young_designer
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderWinlineLeft = () => (
    <div className="space-y-5 font-sans text-white/85 [&>p]:max-w-[380px] [&>p]:text-white/70">
      <h1 className="font-display font-bold text-[48px] text-white whitespace-pre-line" style={{ lineHeight: '0.9' }}>
        {'Winline —\nkey visual'}
      </h1>
      <p>Для букмекера Winline я разработала серию рекламных key visual.</p>
      <p>
        Процесс работы начинается со сбора референсов и быстрых скетчей, которые помогают найти композицию и основной визуальный
        приём. Далее формируется сцена и создаётся ключевой образ — в 3D или с использованием AI-инструментов. После этого
        прорабатываются детали композиции и типографика.
      </p>
      <p>Справа показан процесс разработки — от первых идей до финального визуала.</p>
    </div>
  );

  const renderLootboxesLeft = () => (
    <div className="space-y-5 font-sans text-white/85 [&>p]:max-w-[380px] [&>p]:text-white/70">
      <h1 className="font-display font-bold text-[48px] text-white whitespace-pre-line" style={{ lineHeight: '1' }}>
        {'Лутбоксы\nWinline'}
      </h1>
      <p>
        Задача заключалась в разработке концепции нескольких уровней игровых лутбоксов для приложения Winline: нужно было продумать их
        визуальные различия, интегрировать логотипы команд-амбассадоров и усилить ощущение вовлечения через игровые элементы. На старте
        я проанализировала референсы из gaming- и betting-сегмента, выделив ключевые визуальные паттерны и подходы к подаче наград.
      </p>
      <p>
        В процессе работы я прорабатывала форму боксов, материалы и световые эффекты, делая акцент на ощущении «энергии внутри» через
        свечение, градиенты и контрастные цвета.
      </p>
    </div>
  );

  const renderWallpapersLeft = () => (
    <div className="space-y-5 font-sans text-white/85 [&>p]:max-w-[380px] [&>p]:text-white/70">
      <h1 className="font-display font-bold text-[48px] text-white whitespace-pre-line" style={{ lineHeight: '1' }}>
        {'Обои\nWinline'}
      </h1>
      <p>
        Задача заключалась в разработке двух серий iOS-заставок для Winline: новогодней и серии, посвящённой командам и
        амбассадорам бренда. Важно было сохранить единый визуальный стиль и адаптировать его под разные контексты — сезонный и
        брендовый.
      </p>
      <p>
        В процессе работы я прорабатывала композицию, свет и цветовые акценты, интегрируя фирменные элементы Winline в сюжетные
        сцены. В результате получились две визуально связанные серии заставок, которые усиливают присутствие бренда в интерфейсе
        и легко адаптируются под новые кампании и события.
      </p>
    </div>
  );

  const renderDefaultLeft = () => (
    <>
      <div className="space-y-3">
        <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl">{project.title}</h1>
      </div>

      {!isTendersCase && (
        <>
          <div className="max-w-[380px] space-y-2 font-sans text-white/75">
            <p>
              <span className="text-white/50">Client:</span> {project.client}
            </p>
            <p>
              <span className="text-white/50">Year:</span> {project.year}
            </p>
            <p>
              <span className="text-white/50">Category:</span> {project.tags.join(', ')}
            </p>
          </div>

          <div className="max-w-[380px] space-y-2 font-sans text-white/75">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Role</p>
            <p>{project.role.join(', ')}</p>
          </div>

          <div className="max-w-[380px] space-y-2 font-sans text-white/75">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Tools</p>
            <p>{project.tools.join(', ')}</p>
          </div>

          <div className="max-w-[380px] space-y-2 font-sans text-white/75">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Description</p>
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </>
      )}
    </>
  );

  const renderWinlineRight = () => (
    <div className="space-y-16">
      <section className="space-y-6">
        <img src="/notion/kv-winline/nachalo.png" alt="Winline process start references" className="w-full h-auto rounded-2xl" loading="lazy" />
        <img src="/notion/kv-winline/juxtapose-gif.gif" alt="Winline animation process" className="w-full h-auto rounded-2xl" loading="lazy" />
        <div className="space-y-4">
          <img src="/notion/kv-winline/2.png" alt="Winline process frame" className="w-full h-auto rounded-2xl" loading="lazy" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Моя коллекция KV Winline</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <img src="/notion/kv-winline/16_9_(1).jpg" alt="Winline KV collection image 1" className="w-full h-auto rounded-2xl" loading="lazy" />
          <img src="/notion/kv-winline/1920_1080_(1).png" alt="Winline KV collection image 2" className="w-full h-auto rounded-2xl" loading="lazy" />
        </div>

        <img src="/notion/kv-winline/1920_1080_5_(1).png" alt="Winline KV collection full width image" className="w-full h-auto rounded-2xl" loading="lazy" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <img src="/notion/kv-winline/prognozy.png" alt="Winline KV collection image 3" className="w-full h-auto rounded-2xl" loading="lazy" />
          <img src="/notion/kv-winline/KV_10.png" alt="Winline KV collection image 4" className="w-full h-auto rounded-2xl" loading="lazy" />
        </div>
      </section>
    </div>
  );

  const renderLootboxesRight = () => (
    <div className="space-y-4">
      <img src="/notion/Lootboxes/lootboxes-cover.png" alt="Lootboxes Winline cover" className="w-full h-auto rounded-2xl" loading="lazy" />
      <img src="/notion/Lootboxes/Nachaloo1.png" alt="Lootboxes Winline start of work" className="w-full h-auto rounded-2xl" loading="lazy" />
      <img src="/notion/Lootboxes/Nachaloo2.png" alt="Lootboxes Winline first drafts" className="w-full h-auto rounded-2xl" loading="lazy" />
      <img src="/notion/Lootboxes/Nachalo3.png" alt="Lootboxes Winline color stretch" className="w-full h-auto rounded-2xl" loading="lazy" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <video className="w-full h-auto rounded-2xl" autoPlay muted loop playsInline controls>
          <source src="/notion/Lootboxes/wnl_blue_1080x1080_v002-original.mp4" type="video/mp4" />
        </video>

        <video className="w-full h-auto rounded-2xl" autoPlay muted loop playsInline controls>
          <source src="/notion/Lootboxes/wnl_purple_1080x1080_v002-original.mp4" type="video/mp4" />
        </video>
      </div>

      <img src="/notion/Lootboxes/Vsu_lineika.png" alt="Lootboxes Winline full lineup" className="w-full h-auto rounded-2xl" loading="lazy" />

      <video className="w-full h-auto rounded-2xl" autoPlay muted loop playsInline controls>
        <source src="/notion/Lootboxes/original.mp4" type="video/mp4" />
      </video>

      <img src="/notion/Lootboxes/Area_51.png" alt="Lootboxes Winline Area 51" className="w-full h-auto rounded-2xl" loading="lazy" />

      <video className="w-full h-auto rounded-2xl" autoPlay muted loop playsInline controls>
        <source src="/notion/Lootboxes/_OVERTIME_1024x1024-original.mp4" type="video/mp4" />
      </video>

      <img src="/notion/Lootboxes/Overtime.png" alt="Lootboxes Winline Overtime" className="w-full h-auto rounded-2xl" loading="lazy" />
    </div>
  );

  const renderDefaultRight = () => (
    <>
      {displayedSections.map((section) => (
        <section key={section.title} className="space-y-4">
          {section.title !== 'Overview' && !isTendersCase && (
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
          )}

          {isWallpapersCase ? (
            <div className="space-y-6">
              {section.images.map((image, index) => (
                renderMedia(
                  image,
                  `${project.title} - ${section.title} ${index + 1}`,
                  `${section.title}-${index}`
                )
              ))}
            </div>
          ) : section.images.length === 1 ? (
            renderMedia(section.images[0], `${project.title} - ${section.title}`)
          ) : (
            <div className={isTendersCase ? 'space-y-6' : 'grid grid-cols-1 gap-6 md:grid-cols-2'}>
              {section.images.map((image, index) => (
                renderMedia(
                  image,
                  `${project.title} - ${section.title} ${index + 1}`,
                  `${section.title}-${index}`
                )
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );

  const tenderSections = [
    {
      title: project.title,
      text: [
        'В агенстве мне удалось поучаствовать в тендерах на креативную поддержку. Расскажу про некоторые кейсы от идей до их воплощения. Бренды с которыми я поработала: Лемана ПРО, Барьер, Купер.',
        'Задача тендера Лемана ПРО: создать 3 КВ в различном цветовом кодировании в зависимости от сегмента сотрудников. Макеты призывали выбирать работу в проверенной компании, развиваться вместе с ней. Также были использованы фирменные сетки построения макетов бренда.',
        'Каждый цвет соответствовал своему сегменту: серый - логисты, желтый - сотрудники гипермаркетов, оранжевый - руководители, фиолетовый - офисным сотрудникам. Общий КВ объединил все сегменты цветами и сеткой.'
      ],
      media: [
        project.coverImage,
        '/Tenders/%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%20%D0%B1%D0%BB%D0%BE%D0%BA.jpg',
        '/Tenders/%D0%91%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%202.jpg',
        '/Tenders/%D0%91%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0%203.jpg',
        '/Tenders/4%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BB%D0%B5%D0%BC%D0%B0%D0%BD%D0%B0.png'
      ]
    },
    {
      title: '',
      text: [
        'Задача тендера Барьер: создать КВ на основе фото со съемки видео-ролика, создать костюм робота и подготовить раскадровку для анимационных баннеров. Цветокор баннера должен был отличаться от цвета неба, поэтому было решено частично затемнить и добавить фирменного бирюзового на фон.',
        'Перед съемкой был нарисован скетч будущего баннера с роботом в ванне, который использует фильтр для воды, на его основе и были сделаны будущие кадры для КВ.'
      ],
      media: [
        '/Tenders/%D0%91%D0%B0%D1%80%D1%8C%D0%B5%D1%80%201%20%D0%B1%D0%BB%D0%BE%D0%BA.png',
        '/Tenders/2%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
        '/Tenders/3%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
        '/Tenders/5%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%B1%D0%B0%D1%80%D1%8C%D0%B5%D1%80%D0%B0.png',
        '/Tenders/960x720_%D0%90%D0%BD%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-original.mp4'
      ]
    },
    {
      title: '',
      text: [
        'Задача тендера Купер: создать нескольок КВ по идеям гигантизма и гранжа с курьером - как главным героем. Задействовать нейросети из-за сжатых сроков, подготовить раскадровки с примерами анимации.'
      ],
      media: [
        '/Tenders/1%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
        '/Tenders/2%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
        '/Tenders/3%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BA%D1%83%D0%BF%D0%B5%D1%80.png',
        '/Tenders/%D0%9E%D0%9E%D0%9D.png',
        '/Tenders/KUPER_KV_FHD_v01-original.mp4'
      ]
    }
  ];

  const renderTendersCase = () => (
    <div className="mx-auto w-full max-w-[1600px] space-y-16">
      {tenderSections.map((section, sectionIndex) => (
        <section key={`tenders-${sectionIndex}`} className="grid grid-cols-1 gap-10 md:grid-cols-[420px_minmax(0,1fr)]">
          <aside className="space-y-5 font-sans text-white/75 md:sticky md:top-[120px] md:self-start">
            {section.title && (
              <h1 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">{section.title}</h1>
            )}
            {section.text.map((paragraph) => (
              <p key={paragraph} className="max-w-[380px]">
                {paragraph}
              </p>
            ))}
          </aside>

          <div className="space-y-6">
            {section.media.map((src, index) =>
              renderMedia(src, `${project.title} ${sectionIndex + 1}.${index + 1}`, `${sectionIndex}-${index}`)
            )}
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <article className="space-y-10">
      <Link href="/work" className="inline-flex text-sm text-white/70 hover:text-white">
        ← Назад к кейсам
      </Link>

      {isTendersCase ? (
        renderTendersCase()
      ) : (
        <CaseLayout
          left={
            isWinlineCase
              ? renderWinlineLeft()
              : isLootboxesCase
                ? renderLootboxesLeft()
                : isWallpapersCase
                  ? renderWallpapersLeft()
                  : renderDefaultLeft()
          }
          right={isWinlineCase ? renderWinlineRight() : isLootboxesCase ? renderLootboxesRight() : renderDefaultRight()}
        />
      )}

      {caseFooter}
    </article>
  );
}
