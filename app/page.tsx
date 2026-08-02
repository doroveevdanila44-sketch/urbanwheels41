import { Advantages } from '@/components/advantages'
import { Benefits } from '@/components/benefits'
import { CarsSection } from '@/components/cars-section'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ReviewsCarousel } from '@/components/reviews-carousel'
import { cars } from '@/data/cars'
import { contacts, site } from '@/data/site'

/** Микроразметка организации для поисковиков */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: site.name,
  description:
    'Прокат компактных городских автомобилей и внедорожников для поездок по Камчатке',
  url: site.url,
  image: `${site.url}/images/hero.png`,
  telephone: '+79848880101',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ленинградская ул., 78',
    addressLocality: 'Петропавловск-Камчатский',
    addressCountry: 'RU',
  },
  openingHours: 'Mo-Su 09:00-20:00',
  sameAs: [site.yandexMapsUrl],
  makesOffer: cars.map((car) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Car', name: car.name },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Advantages />
        <CarsSection />
        <Benefits />
        <ReviewsCarousel />
      </main>
      <Footer />
    </>
  )
}
