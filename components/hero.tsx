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
        Телефон (<768): фото — отдельная нижняя зона под текстом. Кадр 3:2
        дополнительно приближен трансформацией от правого нижнего угла, поэтому
        в него попадают ровно две машины целиком, крупно и без обрезки по бокам.
        Планшет и десктоп: то же фото — подложка на всю секцию, без масштаба.
      */}
      <div className="relative order-2 aspect-[3/2] w-full overflow-hidden md:absolute md:inset-0 md:order-none md:aspect-auto md:h-full">
        <Image
          src="/images/hero.png"
          alt="Белый седан и чёрный хэтчбек Urban Wheels 41 на фоне ночного Петропавловска-Камчатского"
          fill
          priority
          sizes="(max-width: 767px) 160vw, 100vw"
          quality={90}
          className="origin-bottom-right scale-[1.45] object-cover object-right md:origin-center md:scale-100 md:object-[97%_bottom] lg:object-center"
        />
        {/* Мягкий стык текстовой зоны и фото на телефоне */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink via-ink/55 to-transparent md:hidden"
        />
        {/* Гасим нижнюю кромку фото — по асфальту, машин не задевает */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink to-transparent md:hidden"
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

      {/*
        На планшете вертикально justify-between разводит текст к верху,
        а кнопку — вниз, на чистый асфальт под машинами.
      */}
      <div className="shell relative z-[2] order-1 flex flex-col justify-start pb-6 pt-10 md:order-none md:min-h-[780px] md:justify-between md:pb-8 md:pt-[68px] lg:min-h-[660px] lg:justify-center lg:py-24 xl:min-h-[720px]">
        <div className="max-w-xl md:max-w-2xl lg:max-w-2xl">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-gold-gradient sm:text-base">
            {hero.overline}
          </p>

          <h1 className="mt-3 font-heading text-[1.875rem] font-bold uppercase leading-[1.08] tracking-wide sm:mt-5 sm:text-[2.75rem] md:text-[3rem] lg:text-[4.25rem] xl:text-[4.75rem]">
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

          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:max-w-lg">
            {hero.subtitle}
          </p>
        </div>

        <a
          href="#cars"
          className="mt-5 inline-flex w-auto self-start items-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-ink shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 sm:text-sm md:mt-0 md:gap-3 md:rounded-xl md:px-7 md:py-4 md:text-base lg:mt-10"
        >
          {hero.cta}
          <ArrowRightIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </a>
      </div>
    </section>
  )
}
