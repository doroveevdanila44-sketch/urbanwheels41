/**
 * Единая точка правки всех текстов и контактов лендинга.
 * Данные автомобилей — в ./cars.ts, отзывы — в ./reviews.ts
 */

export const site = {
  name: 'Urban Wheels 41',
  city: 'Петропавловск-Камчатский',
  url: 'https://urbanwheels41.vercel.app',
  yandexMapsUrl: 'https://yandex.ru/maps/org/urban_wheels41/7931629121',
} as const

export const contacts = {
  /** Отображаемый номер */
  phone: '+7 (984) 888-01-01',
  /** Номер для href="tel:" */
  phoneHref: 'tel:+79848880101',
  address: 'Ленинградская ул., 78, Петропавловск-Камчатский',
  schedule: 'Ежедневно с 09:00 до 20:00',
} as const

export const navLinks = [
  { label: 'Автомобили', href: '#cars' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
] as const

export const hero = {
  overline: 'Прокат автомобилей',
  /**
   * H1 разбит на части: `gold: true` — слово выделяется золотом.
   * У тире неразрывный пробел, чтобы оно не убегало на новую строку.
   */
  titleParts: [
    { text: 'Выбирайте направление\u00A0—', gold: false },
    { text: 'автомобиль', gold: false },
    { text: 'уже', gold: true },
    { text: 'готов', gold: false },
  ],
  subtitle:
    'Компактные городские автомобили и внедорожники для поездок по Камчатке',
  cta: 'Выбрать автомобиль',
} as const

export type AdvantageIcon = 'shield' | 'clock' | 'car' | 'support'

export const advantages: {
  icon: AdvantageIcon
  title: string
  text: string
}[] = [
  {
    icon: 'shield',
    title: 'Исправные автомобили',
    text: 'Весь парк регулярно проходит техобслуживание',
  },
  {
    icon: 'clock',
    title: 'Быстрое оформление',
    text: 'Минимум времени, максимум удобства',
  },
  {
    icon: 'car',
    title: 'Полностью обслуженный парк',
    text: 'Чистые автомобили в отличном состоянии',
  },
  {
    icon: 'support',
    title: 'Поддержка во время аренды',
    text: 'Всегда на связи, поможем в любой ситуации',
  },
]

export type BenefitIcon = 'pin' | 'city-car' | 'thumbs-up' | 'shield-check'

export const benefits: {
  icon: BenefitIcon
  title: string
  text: string
}[] = [
  {
    icon: 'pin',
    title: 'Мы местные',
    text: 'Знаем Камчатку и поможем вам в любой ситуации',
  },
  {
    icon: 'city-car',
    title: 'Городской формат',
    text: 'Идеальные автомобили для города и путешествий',
  },
  {
    icon: 'thumbs-up',
    title: 'Честные условия',
    text: 'Прозрачные цены и никаких скрытых платежей',
  },
  {
    icon: 'shield-check',
    title: 'Надёжность',
    text: 'Нас рекомендуют друзьям и возвращаются снова',
  },
]

export const footer = {
  about:
    'Прокат компактных городских автомобилей и внедорожников для ваших поездок по Камчатке',
  contactsHeading: 'Контакты',
  copyright: '© Urban Wheels 41, 2026',
  privacyLabel: 'Политика конфиденциальности',
  privacyHref: '#',
} as const
