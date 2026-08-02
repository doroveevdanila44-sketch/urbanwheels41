import {
  CarIcon,
  PinIcon,
  ShieldCheckIcon,
  ThumbsUpIcon,
} from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { benefits, type BenefitIcon } from '@/data/site'

const iconMap: Record<BenefitIcon, typeof PinIcon> = {
  pin: PinIcon,
  'city-car': CarIcon,
  'thumbs-up': ThumbsUpIcon,
  'shield-check': ShieldCheckIcon,
}

export function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="section">
      <div className="shell">
        <div id="benefits-heading">
          <SectionHeading>Почему выбирают нас</SectionHeading>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:mt-16 xl:grid-cols-4 xl:gap-8">
          {benefits.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <Icon className="h-11 w-11 xl:h-12 xl:w-12" />
                <h3 className="mt-5 text-lg font-medium tracking-wide text-gold-gradient xl:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[20rem] text-[0.95rem] leading-relaxed text-muted">
                  {item.text}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
