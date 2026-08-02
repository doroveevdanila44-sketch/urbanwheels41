/**
 * Автопарк Urban Wheels 41.
 * Чтобы добавить/убрать машину — правим только этот файл.
 * `category` определяет, в каком табе секции «Автомобили» появится карточка.
 */

export type CarCategory = 'sedan' | 'suv'

export interface Car {
  id: string
  name: string
  image: string
  alt: string
  /** Ширина исходного файла в px — чтобы next/image не искажал пропорции */
  width: number
  height: number
  category: CarCategory
  specs: {
    transmission: string
    seats: string
    drive: string
  }
}

export const carTabs: { id: CarCategory; label: string }[] = [
  { id: 'sedan', label: 'Легковые автомобили' },
  { id: 'suv', label: 'Внедорожники' },
]

const sedanSpecs = {
  transmission: 'АКПП',
  seats: '5 мест',
  drive: 'Передний привод',
}

const suvSpecs = {
  transmission: 'АКПП',
  seats: '4 места',
  drive: 'Полный привод',
}

export const cars: Car[] = [
  {
    id: 'corolla-fielder',
    name: 'Toyota Corolla Fielder',
    image: '/images/fielder.png',
    alt: 'Серебристый универсал Toyota Corolla Fielder на фоне Авачинской бухты',
    width: 1086,
    height: 1448,
    category: 'sedan',
    specs: sedanSpecs,
  },
  {
    id: 'corolla-axio',
    name: 'Toyota Corolla Axio',
    image: '/images/axio.png',
    alt: 'Золотистый седан Toyota Corolla Axio на фоне заката над океаном',
    width: 1122,
    height: 1402,
    category: 'sedan',
    specs: sedanSpecs,
  },
  {
    id: 'platz',
    name: 'Toyota Platz',
    image: '/images/platz.png',
    alt: 'Серебристый седан Toyota Platz на фоне сопок Камчатки',
    width: 1086,
    height: 1448,
    category: 'sedan',
    specs: sedanSpecs,
  },
  {
    id: 'vitz',
    name: 'Toyota Vitz',
    image: '/images/vitz.png',
    alt: 'Чёрный хэтчбек Toyota Vitz на фоне заката над Авачинской бухтой',
    width: 1086,
    height: 1448,
    category: 'sedan',
    specs: sedanSpecs,
  },
  {
    id: 'belta',
    name: 'Toyota Belta',
    image: '/images/belta.png',
    alt: 'Белый седан Toyota Belta на фоне заката и заснеженных вулканов',
    width: 1122,
    height: 1402,
    category: 'sedan',
    specs: sedanSpecs,
  },
  {
    id: 'jimny-lift',
    name: 'Suzuki Jimny Lift',
    image: '/images/jimny-black.png',
    alt: 'Чёрный внедорожник Suzuki Jimny Lift с экспедиционным багажником',
    width: 1086,
    height: 1448,
    category: 'suv',
    specs: suvSpecs,
  },
  {
    id: 'jimny-land-venture',
    name: 'Suzuki Jimny Land Venture',
    image: '/images/jimny-black-2.png',
    alt: 'Чёрный внедорожник Suzuki Jimny Land Venture с экспедиционным багажником и люстрой',
    width: 1086,
    height: 1448,
    category: 'suv',
    specs: suvSpecs,
  },
  {
    id: 'jimny',
    name: 'Suzuki Jimny',
    image: '/images/jimny-white.png',
    alt: 'Белый внедорожник Suzuki Jimny с запаской на багажнике',
    width: 1086,
    height: 1448,
    category: 'suv',
    specs: suvSpecs,
  },
]

export const carCtaLabel = 'Выбрать дату'
