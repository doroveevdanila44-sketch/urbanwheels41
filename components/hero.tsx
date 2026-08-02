import Image from 'next/image'

import { ArrowRightIcon } from '@/components/icons'
import { hero } from '@/data/site'

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Прокат автомобилей Urban Wheels 41"
      className="relative flex flex-col overflow-hidden bg-ink md:block md:min-h-[780px] lg:min-h-[660px] xl:min-h-[720px]"
    >
      {/*
        Телефон (<768): фото — отдельная нижняя зона под текстом. Контейнер
        повторяет пропорции исходника, поэтому кадр виден целиком и обе машины
        не обрезаются ни по бокам, ни снизу.
        Планшет и десктоп: то же фото становится подложкой на всю секцию.
      */}
      <div className="relative order-2 aspect-[1672/941] w-full md:absolute md:inset-0 md:order-none md:aspect-auto md:h-full">
        <Image
          src="/images/hero.png"
          alt="Белый седан и чёрный хэтчбек Urban Wheels 41 на фоне ночного Петропавловска-Камчатского"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center md:object-[97%_bottom] lg:object-center"
        />
        {/* Плавный стык текстовой зоны и фото на телефоне */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink via-ink/70 to-transparent md:hidden"
        />
      </div>

      {/* Планшет вертикально: гасим стык шапки с баннером */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 hidden h-[180px] bg-gradient-to-b from-[#0A0A0A] to-transparent md:block lg:hidden"
      />
      {/* Планшет вертикально: читаемость текста поверх фото */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/55 via-35% to-transparent to-65% md:block lg:hidden"
      />
      {/* Десктоп: градиент слева направо */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 via-30% to-transparent lg:block"
      />
      {/* Мягкий стык с секцией преимуществ */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 hidden h-28 bg-gradient-to-t from-ink to-transparent md:block"
      />

      <div className="shell relative z-[2] order-1 flex flex-col justify-start pb-10 pt-12 md:order-none md:min-h-[780px] md:pb-12 md:pt-[68px] lg:min-h-[660px] lg:justify-center lg:py-24 xl:min-h-[720px]">
        <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-gold-gradient sm:text-base">
            {hero.overline}
          </p>

          <h1 className="mt-4 font-heading text-[2.35rem] font-bold uppercase leading-[1.08] tracking-wide sm:mt-5 sm:text-[2.75rem] md:text-[3rem] lg:text-[4.25rem] xl:text-[4.75rem]">
            {hero.titleParts.map((part, i) => (
              <span
                key={part.text}
                className={part.gold ? 'text-gold-gradient' : undefined}
              >
                {part.text}
                {i < hero.titleParts.length - 1 ? ' ' : null}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:max-w-lg">
            {hero.subtitle}
          </p>

          <a
            href="#cars"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gold-gradient px-7 py-4 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-ink shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 sm:text-base md:mt-8 md:inline-flex md:w-auto md:justify-start lg:mt-10"
          >
            {hero.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
