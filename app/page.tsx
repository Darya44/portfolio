import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-6">
        <div className="flex flex-col-reverse md:flex-row items-start gap-14">
          {/* Р¤РѕС‚Рѕ */}
          <div className="w-full max-w-[44ch]">
            <img
              src="/images/Р°РІР°-РЅСЊСЋ.png"
              alt="Р”Р°СЂСЊСЏ Р—Р°С…Р°СЂСЊСЏС‰РµРІР°"
              className="w-full aspect-square rounded-[40px] object-cover"
            />
          </div>

          {/* РўРµРєСЃС‚ */}
          <div className="w-full md:pt-2">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Р”Р°СЂСЊСЏ
              <br />
              Р—Р°С…Р°СЂСЊСЏС‰РµРІР°
            </h1>

            <div className="mt-8 max-w-[44ch] space-y-2 text-lg leading-relaxed text-white">
              <p>
                РЇ СЂР°Р±РѕС‚Р°СЋ РєСЂРµР°С‚РёРІРЅС‹Рј РґРёР·Р°Р№РЅРµСЂРѕРј РІ Р°РіРµРЅС‚СЃС‚РІРµ В«Р¦РµС…В» Рё&nbsp;СЃРѕР·РґР°СЋ РІРёР·СѓР°Р»СЊРЅС‹Рµ РєРѕРЅС†РµРїС†РёРё РґР»СЏ&nbsp;РЎР±РµСЂР°, РЇРЅРґРµРєСЃР°, VK, Winline, РЎР°РјРѕР»С‘С‚Р°, Р‘Р°Р»С‚РёРєРё Рё&nbsp;РґСЂСѓРіРёС… Р±СЂРµРЅРґРѕРІ.
              </p>

              <p>
                Р Р°Р±РѕС‚Р°СЋ РЅР°&nbsp;СЃС‚С‹РєРµ РіСЂР°С„РёС‡РµСЃРєРѕРіРѕ Рё&nbsp;digital-РґРёР·Р°Р№РЅР°, РёРЅС‚РµРіСЂРёСЂСѓСЋ AI-РёРЅСЃС‚СЂСѓРјРµРЅС‚С‹ РІ&nbsp;РєСЂРµР°С‚РёРІРЅС‹Рµ РїСЂРѕС†РµСЃСЃС‹ Рё&nbsp;РѕР±СѓС‡Р°СЋ СЌС‚РѕРјСѓ РєРѕР»Р»РµРі.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">РР·Р±СЂР°РЅРЅС‹Рµ РїСЂРѕРµРєС‚С‹</h2>
          <a href="/work" className="text-sm text-white/70 hover:text-white">
            Р’СЃРµ РїСЂРѕРµРєС‚С‹ в†’
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-10 pt-8">
        <div className="flex justify-end">
          <a href="/work" className="text-4xl font-medium leading-none text-white hover:text-white/80">
            next {'->'}
          </a>
        </div>

        <div className="w-screen border-t border-neutral-700 my-24 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" />

        <div className="grid grid-cols-1 gap-8 text-3xl leading-tight md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-2">
            <a href="mailto:postbolshakova@gmail.com" className="block hover:text-white/80">
              postbolshakova@gmail.com
            </a>
            <a href="tel:+79295277902" className="block hover:text-white/80">
              +7 929 527 79 02
            </a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block hover:text-white/80">
              instagram
            </a>
            <a href="#" className="block hover:text-white/80">
              facebook
            </a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block hover:text-white/80">
              linkedin
            </a>
            <a href="#" className="block hover:text-white/80">
              behance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

