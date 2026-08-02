/**
 * Отзывы с Яндекс Карт.
 * Сейчас — заглушки из макета, заменить на реальные тексты.
 * Источник карточки организации:
 * https://yandex.ru/maps/org/urban_wheels41/7931629121
 */

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 'aleksey',
    author: 'Алексей',
    rating: 5,
    text: 'Брал Fielder на 3 дня. Машина чистая, ухоженная, без проблем. Оформление быстрое, без залогов и сложностей. Рекомендую!',
    date: '2 недели назад',
  },
  {
    id: 'marina',
    author: 'Марина',
    rating: 5,
    text: 'Отличный сервис! Брали Jimny для поездки на Халактырский пляж. Автомобиль в идеальном состоянии. Обязательно вернемся!',
    date: '1 месяц назад',
  },
  {
    id: 'dmitry',
    author: 'Дмитрий',
    rating: 5,
    text: 'Часто приезжаю в командировки на Камчатку. Пользуюсь только Urban Wheels. Всегда всё чётко и без задержек.',
    date: '3 недели назад',
  },
  {
    id: 'olga',
    author: 'Ольга',
    rating: 5,
    text: 'Очень понравился сервис и подход к клиентам. Приятно иметь дело с профессионалами. Спасибо!',
    date: '2 месяца назад',
  },
]

export const reviewsSection = {
  heading: 'Отзывы наших клиентов',
  linkLabel: 'Смотреть отзывы на Яндексе',
} as const
