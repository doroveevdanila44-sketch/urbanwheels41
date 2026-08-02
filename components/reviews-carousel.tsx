'use client'

import { useCallback, useEffect, useState } from 'react'

import { ArrowRightIcon, ChevronIcon, StarIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { reviews, reviewsSection, type Review } from '@/data/reviews'
import { site } from '@/data/site'

/** Сколько карточек показываем одновременно на каждом брейкпоинте */
const BREAKPOINTS = [
  { query: '(min-width: 1280px)', perView: 3 },
  { query: '(min-width: 1024px)', perView: 3 },
  { query: '(min-width: 640px)', perView: 2 },
] as const

export function ReviewsCarousel() {
  const [perView, setPerView] = useState(1)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lists = BREAKPOINTS.map((bp) => window.matchMedia(bp.query))

    const sync = () => {
      const match = BREAKPOINTS.find((_, i) => lists[i].matches)
      setPerView(match ? match.perView : 1)
    }

    sync()
    lists.forEach((list) => list.addEventListener('change', sync))
    return () => lists.forEach((list) => list.removeEventListener('change', sync))
  }, [])

  const maxIndex = Math.max(0, reviews.length - perView)

  // при смене ширины экрана не даём индексу «уехать» за пределы
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const go = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), maxIndex))
    },
    [maxIndex],
  )

  const canScroll = maxIndex > 0

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="section">
      <div className="shell">
        <div id="reviews-heading">
          <SectionHeading>{reviewsSection.heading}</SectionHeading>
        </div>

        <div className="relative mt-14 xl:mt-16">
          <div className="overflow-hidden">
            <ul
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (100 / perView)}%)`,
              }}
            >
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="shrink-0 px-2.5 sm:px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>

          {canScroll ? (
            <>
              <CarouselButton
                side="prev"
                onClick={() => go(index - 1)}
                disabled={index === 0}
              />
              <CarouselButton
                side="next"
                onClick={() => go(index + 1)}
                disabled={index === maxIndex}
              />
            </>
          ) : null}
        </div>

        {canScroll ? (
          <div
            role="tablist"
            aria-label="Навигация по отзывам"
            className="mt-8 flex items-center justify-center gap-2.5"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => {
              const isActive = i === index
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Показать отзывы, страница ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-6 bg-gold-gradient'
                      : 'w-2 bg-line hover:bg-muted'
                  }`}
                />
              )
            })}
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <a
            href={site.yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-[0.95rem] font-medium text-gold-gradient transition-opacity hover:opacity-80"
          >
            <YandexBadge className="h-5 w-5 text-[0.7rem]" />
            {reviewsSection.linkLabel}
            <ArrowRightIcon className="h-4 w-4 text-gold-light transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="card relative flex h-full flex-col p-6">
      <YandexBadge
        className="absolute right-5 top-5 h-6 w-6 text-sm"
        title="Отзыв с Яндекс Карт"
      />

      <div
        className="flex gap-1 text-gold-light"
        role="img"
        aria-label={`Оценка ${review.rating} из 5`}
      >
        {Array.from({ length: review.rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>

      <h3 className="mt-4 text-base font-medium tracking-wide">
        {review.author}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {review.text}
      </p>

      <p className="mt-5 border-t border-line pt-4 text-xs text-muted/80">
        {review.date}
      </p>
    </article>
  )
}

/** Фирменный красный бейдж «Я» — отзывы с Яндекс Карт */
function YandexBadge({
  className = '',
  title,
}: {
  className?: string
  title?: string
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md bg-yandex font-heading font-bold leading-none text-white ${className}`}
      title={title}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      aria-label={title}
    >
      Я
    </span>
  )
}

function CarouselButton({
  side,
  onClick,
  disabled,
}: {
  side: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) {
  const isPrev = side === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Предыдущие отзывы' : 'Следующие отзывы'}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/90 text-white backdrop-blur transition-all duration-300 hover:border-gold-dark hover:text-gold-light disabled:pointer-events-none disabled:opacity-30 ${
        isPrev ? '-left-2 xl:-left-6' : '-right-2 xl:-right-6'
      }`}
    >
      <ChevronIcon className={`h-5 w-5 ${isPrev ? '' : 'rotate-180'}`} />
    </button>
  )
}
