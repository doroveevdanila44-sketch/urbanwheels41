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
        {/*
          Телефон: четыре горизонтальные полосы во всю ширину — иконка слева по
          центру, заголовок в строку, описание под ним.
          От 640px: прежняя раскладка — иконка с заголовком в ряд, текст ниже.
        */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {advantages.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li
                key={item.title}
                className="card group grid grid-cols-[auto_1fr] gap-x-4 px-4 py-3.5 transition-colors duration-300 hover:border-gold-dark/60 sm:gap-x-3 sm:p-6"
              >
                <Icon className="row-span-2 h-8 w-8 shrink-0 self-center sm:row-span-1 sm:h-9 sm:w-9 sm:self-start" />
                <h3 className="self-center text-[0.95rem] font-medium leading-tight tracking-wide hyphens-none sm:self-start sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:col-span-2 sm:mt-4 sm:text-[0.95rem]">
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
