import Image from 'next/image'

import { ClockIcon, PhoneIcon, PinIcon } from '@/components/icons'
import { contacts, footer, site } from '@/data/site'

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-line bg-[#0D0D0D]">
      <div className="shell py-14 sm:py-16 xl:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-14">
          {/* Логотип и описание */}
          <div>
            <div className="relative h-11 w-[170px] sm:h-12 sm:w-[185px]">
              <Image
                src="/images/logo.png"
                alt="Логотип Urban Wheels 41"
                fill
                sizes="185px"
                /* logo.png идёт с чёрной подложкой — lighten убирает её на тёмном фоне */
                className="object-contain object-left mix-blend-lighten"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {footer.about}
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h2 className="text-xl font-medium tracking-wide sm:text-2xl">
              {footer.contactsHeading}
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-[3px] w-12 rounded-full bg-gold-gradient"
            />

            <ul className="mt-6 space-y-4 text-sm sm:text-[0.95rem]">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <a
                  href={contacts.phoneHref}
                  className="font-semibold text-white transition-colors hover:text-gold-light"
                >
                  {contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <address className="not-italic leading-relaxed text-muted">
                  {contacts.address}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0" />
                <span className="leading-relaxed text-muted">
                  {contacts.schedule}
                </span>
              </li>
            </ul>
          </div>

          {/* Карта — статичная картинка со ссылкой на Яндекс Карты */}
          <div>
            <a
              href={site.yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Urban Wheels 41 на Яндекс Картах"
              className="group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line transition-colors duration-300 hover:border-gold-dark/70 lg:aspect-[4/3]"
            >
              <Image
                src="/images/map.png"
                alt="Карта: Urban Wheels 41, Ленинградская ул., 78, Петропавловск-Камчатский"
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm xl:mt-14">
          <p>{footer.copyright}</p>
          <a
            href={footer.privacyHref}
            className="transition-colors hover:text-gold-light"
          >
            {footer.privacyLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
