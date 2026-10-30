import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Link } from 'react-router'
import Header from '@/widgets/Header'

const helpers = [
  {
    name: 'Cara maneiro',
    age: 23,
    rating: '4.9',
    image: 'photo-1514888286974-6c03e2ca1dba',
    slug: 'cara-maneiro',
    about: 'Gosto de uma boa conversa e de acompanhar pessoas no dia a dia.',
  },
  {
    name: 'Rodrigo',
    age: 25,
    rating: '5.0',
    image: 'photo-1573865526739-10659fec78a5',
    slug: 'rodrigo',
    about:
      'Gosto de conhecer pessoas, conversar e ajudar a tornar cada saída mais tranquila e agradável.',
  },
  {
    name: 'Paulo',
    age: 32,
    rating: '4.9',
    image: 'photo-1495360010541-f48722b34f7d',
    slug: 'paulo',
    about: 'Posso acompanhar passeios, consultas e atividades do dia a dia com atenção e cuidado.',
  },
]

export default function HelpersPage() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const selectedHelper = helpers[selectedIndex]

  function moveSelection(direction: -1 | 1) {
    setSelectedIndex((current) => (current + direction + helpers.length) % helpers.length)
  }

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>Pessoas que possam te ajudar — Tchê Acompanho</title>
      <Header />
      <main className="flex flex-1 justify-center px-4 py-10 sm:py-14">
        <section className="w-full max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
            Pessoas que possam te ajudar
          </h1>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {helpers.map((helper, index) => (
              <article
                key={helper.name}
                className={`flex flex-col items-center rounded-xl border bg-white p-5 text-center transition-colors ${selectedIndex === index ? 'border-blue-800 ring-2 ring-blue-800/20' : 'border-gray-200'}`}
              >
                <img
                  className="size-24 rounded-full object-cover sm:size-28"
                  src={`https://images.unsplash.com/${helper.image}?auto=format&fit=crop&w=240&h=240&q=80`}
                  alt={`Gato associado ao perfil de ${helper.name}`}
                />
                <h2 className="mt-3 text-xl font-bold">{helper.name}</h2>
                <div
                  role="img"
                  className="mt-1 flex items-center gap-1 text-amber-500"
                  aria-label={`Avaliação ${helper.rating} de 5`}
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-5"
                      fill={starIndex < Math.floor(Number(helper.rating)) ? 'currentColor' : 'none'}
                    />
                  ))}
                  <span className="ml-1 text-base text-gray-800">{helper.rating}</span>
                </div>
                <p className="mt-1 text-lg font-bold">{helper.age} anos</p>
                <p className="mt-2 flex-1 text-base">Um pouco sobre mim: {helper.about}</p>
                <Link
                  className="mt-3 text-base text-blue-800 hover:underline"
                  to={`/perfil/${helper.slug}`}
                >
                  Saber mais
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              aria-label="Pessoa anterior"
              className="rounded-full p-2 text-blue-800 hover:bg-blue-50"
              onClick={() => moveSelection(-1)}
            >
              <ChevronLeft size={24} />
            </button>
            <Link
              to={`/solicitar/detalhes?ajudante=${selectedHelper.slug}`}
              className="inline-flex min-w-32 items-center justify-center gap-2 rounded-full bg-blue-800 px-5 py-3 text-lg text-white hover:opacity-85"
            >
              Escolher
            </Link>
            <button
              aria-label="Próxima pessoa"
              className="rounded-full p-2 text-blue-800 hover:bg-blue-50"
              onClick={() => moveSelection(1)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
