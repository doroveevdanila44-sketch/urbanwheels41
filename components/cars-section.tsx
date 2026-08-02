'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

import {
  ArrowRightIcon,
  DriveIcon,
  SeatIcon,
  TransmissionIcon,
} from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { carCtaLabel, carTabs, cars, type Car, type CarCategory } from '@/data/cars'
import { contacts } from '@/data/site'

export function CarsSection() {
  const [active, setActive] = useState<CarCategory>('sedan')

  // В сетке всегда только машины активного таба — внедорожники
  // не показываются вторым рядом под легковыми.
  const visibleCars = useMemo(
    () => cars.filter((car) => car.category === active),
    [active],
  )

  return (
    <section id="cars" aria-labelledby="cars-heading" className="section">
      <div className="shell">
        <div id="cars-heading">
          <SectionHeading>Автомобили</SectionHeading>
        </div>

        <div
          role="tablist"
          aria-label="Категории автомобилей"
          className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-line sm:mt-12 sm:gap-6"
        >
          {carTabs.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`relative -mb-px px-3 pb-4 pt-2 text-sm font-medium transition-colors duration-200 sm:px-4 sm:text-base ${
                  isActive ? 'text-gold-gradient' : 'text-muted hover:text-white'
                }`}
              >
                {tab.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-gold-gradient transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="mt-10 sm:mt-12"
        >
          <ul className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {visibleCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: Car }) {
  return (
    <li className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]">
      <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-gold-dark/60">
        {/* Портретный кадр 3:4 — фото вписывается без искажения пропорций */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
          <Image
            src={car.image}
            alt={car.alt}
            fill
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-medium leading-tight tracking-wide">
            {car.name}
          </h3>

          <ul className="mt-4 space-y-2.5 pb-6 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <TransmissionIcon className="h-[18px] w-[18px] shrink-0" />
              {car.specs.transmission}
            </li>
            <li className="flex items-center gap-2.5">
              <SeatIcon className="h-[18px] w-[18px] shrink-0" />
              {car.specs.seats}
            </li>
            <li className="flex items-center gap-2.5">
              <DriveIcon className="h-[18px] w-[18px] shrink-0" />
              {car.specs.drive}
            </li>
          </ul>

          <a
            href={contacts.phoneHref}
            aria-label={`${carCtaLabel} — ${car.name}, позвонить ${contacts.phone}`}
            className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-lg border border-gold-dark/70 px-4 py-2.5 font-heading text-xs font-medium uppercase tracking-[0.1em] text-gold-gradient transition-all duration-300 hover:border-gold-light hover:bg-gold-dark/10"
          >
            {carCtaLabel}
            <ArrowRightIcon className="h-3.5 w-3.5 text-gold-light" />
          </a>
        </div>
      </article>
    </li>
  )
}
