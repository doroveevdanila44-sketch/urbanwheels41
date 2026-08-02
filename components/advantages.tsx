import {
  CarIcon,
  ClockIcon,
  ShieldIcon,
  SupportIcon,
} from '@/components/icons'
import { advantages, type AdvantageIcon } from '@/data/site'

const iconMap: Record<AdvantageIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  clock: ClockIcon,
  car: CarIcon,
  support: SupportIcon,
}

export function Advantages() {
  return (
    <section id="advantages" aria-label="Преимущества" className="section pt-14 sm:pt-16">
      <div className="shell">
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {advantages.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li
                key={item.title}
                className="card group p-5 transition-colors duration-300 hover:border-gold-dark/60 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
                  <h3 className="text-base font-medium leading-tight tracking-wide sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
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
