import Image from 'next/image'

import { ArrowRightIcon } from '@/components/icons'
import { hero } from '@/data/site'

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Прокат автомобилей Urban Wheels 41"
      className="relative min-h-[600px] w-full overflow-hidden bg-ink sm:min-h-[620px] lg:min-h-[660px] xl:min-h-[720px]"
    >
      {/*
        На мобиле кадр смещён вправо — пустая левая часть уходит из вида,
        на десктопе показываем баннер целиком.
      */}
      <Image
        src="/images/hero.png"
        alt="Белый седан и чёрный хэтчбек Urban Wheels 41 на фоне ночного Петропавловска-Камчатского"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-[78%_center] sm:object-[70%_center] lg:object-center"
      />

      {/* Мобильный градиент — в тон неба на фото, текст уезжает наверх */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-[#04080F] via-[#04080F]/85 via-45% to-transparent lg:hidden"
      />
      {/* Десктопный градиент слева направо */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-ink via-ink/85 via-30% to-transparent lg:block"
      />
      {/* Мягкий стык с секцией преимуществ */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="shell relative z-[2] flex min-h-[600px] flex-col justify-start pb-16 pt-14 sm:min-h-[620px] sm:pt-16 lg:min-h-[660px] lg:justify-center lg:py-24 xl:min-h-[720px]">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-gold-gradient sm:text-base">
            {hero.overline}
          </p>

          <h1 className="mt-4 font-heading text-[2.35rem] font-bold uppercase leading-[1.08] tracking-wide sm:mt-5 sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
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
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gold-gradient px-7 py-4 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-ink shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 sm:mt-10 sm:text-base"
          >
            {hero.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
