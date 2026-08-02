import type { SVGProps } from 'react'

/**
 * Общий золотой градиент для штрихов иконок.
 * Рендерится один раз в layout, дальше иконки ссылаются на url(#gold-stroke).
 */
export function GoldGradientDefs() {
  return (
    <svg width="0" height="0" aria-hidden focusable="false" className="absolute">
      <defs>
        <linearGradient id="gold-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0B84C" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
    </svg>
  )
}

type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#gold-stroke)"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

/* --- Преимущества --- */

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9.2 12.2 2 2 3.6-3.9" />
    </Base>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.3V12l3.1 2.1" />
    </Base>
  )
}

export function CarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.2 13 7.7 8.9A2 2 0 0 1 9.6 7.5h4.8a2 2 0 0 1 1.9 1.4L17.8 13" />
      <rect x="2.8" y="13" width="18.4" height="5" rx="1.6" />
      <circle cx="7.4" cy="18" r="1.5" />
      <circle cx="16.6" cy="18" r="1.5" />
    </Base>
  )
}

export function SupportIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 15v-3a7.5 7.5 0 0 1 15 0v3" />
      <path d="M4.5 13.6h1.6a1 1 0 0 1 1 1v2.8a1 1 0 0 1-1 1H5.9a1.4 1.4 0 0 1-1.4-1.4v-3.4ZM19.5 13.6h-1.6a1 1 0 0 0-1 1v2.8a1 1 0 0 0 1 1h.2a1.4 1.4 0 0 0 1.4-1.4v-3.4Z" />
      <path d="M19.5 18.4v.4a2 2 0 0 1-2 2H13" />
    </Base>
  )
}

/* --- Почему выбирают нас --- */

export function PinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s6.5-5.7 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </Base>
  )
}

export function ThumbsUpIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7.5 20V10.6l3.8-6.1a1.8 1.8 0 0 1 3.3 1.1L14 10h4.3a1.9 1.9 0 0 1 1.8 2.4l-1.6 6A2.4 2.4 0 0 1 16.2 20H7.5Z" />
      <path d="M7.5 10.6H5.2A1.2 1.2 0 0 0 4 11.8v7A1.2 1.2 0 0 0 5.2 20h2.3" />
    </Base>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6l-7-3Z" />
    </Base>
  )
}

/* --- Характеристики в карточке авто --- */

export function TransmissionIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="7" cy="5.6" r="1.5" />
      <circle cx="17" cy="5.6" r="1.5" />
      <circle cx="7" cy="18.4" r="1.5" />
      <path d="M7 7.1v9.8M17 7.1v5.3a2 2 0 0 1-2 2H7" />
    </Base>
  )
}

export function SeatIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="7.4" r="3.4" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </Base>
  )
}

export function DriveIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="6.3" cy="6.3" r="2.3" />
      <circle cx="17.7" cy="6.3" r="2.3" />
      <circle cx="6.3" cy="17.7" r="2.3" />
      <circle cx="17.7" cy="17.7" r="2.3" />
      <path d="M8.6 6.3h6.8M6.3 8.6v6.8M17.7 8.6v6.8M8.6 17.7h6.8" />
    </Base>
  )
}

/* --- Служебные (не золотые: цвет берут из currentColor) --- */

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7.2 3.8h2.4l1.3 3.4-1.7 1.3a10.8 10.8 0 0 0 5.3 5.3l1.3-1.7 3.4 1.3v2.4a2.4 2.4 0 0 1-2.6 2.4A14.9 14.9 0 0 1 4.8 6.4a2.4 2.4 0 0 1 2.4-2.6Z" />
    </Base>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.2Z" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
