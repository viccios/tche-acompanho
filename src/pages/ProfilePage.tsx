import { ArrowLeft, BadgeCheck, Star } from 'lucide-react'
import { Link, useParams } from 'react-router'
import Header from '@/widgets/Header'

const profiles = {
  'cara-maneiro': {
    name: 'Cara maneiro',
    age: 23,
    rating: '4.9',
    image: 'photo-1514888286974-6c03e2ca1dba',
    role: 'Acompanhante',
  },
  rodrigo: {
    name: 'Rodrigo',
    age: 25,
    rating: '5.0',
    image: 'photo-1573865526739-10659fec78a5',
    role: 'Acompanhante',
  },
  paulo: {
    name: 'Paulo',
    age: 32,
    rating: '4.9',
    image: 'photo-1495360010541-f48722b34f7d',
    role: 'Cuidador',
  },
  fabricio: {
    name: 'Fabricio',
    age: 44,
    rating: '5.0',
    image: 'photo-1533738363-b7f9aef128ce',
    role: 'Acompanhante',
  },
}

const pastTrips = [
  {
    title: 'Parque e trilha em Porto Alegre',
    age: 67,
    image: 'photo-1495360010541-f48722b34f7d',
  },
  {
    title: 'Passeio pelo centro histórico',
    age: 62,
    image: 'photo-1511044568932-338cba0ad803',
  },
  {
    title: 'Visita ao mercado público',
    age: 70,
    image: 'photo-1573865526739-10659fec78a5',
  },
]

function Rating({ rating }: { rating: string }) {
  const filledStars = Math.floor(Number(rating))

  return (
    <div
      role="img"
      aria-label={`Avaliação ${rating} de 5`}
      className="flex items-center gap-1 text-amber-500"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-5" fill={index < filledStars ? 'currentColor' : 'none'} />
      ))}
      <span className="ml-1 text-base text-gray-800">{rating}</span>
    </div>
  )
}

export default function ProfilePage() {
  const { id = 'rodrigo' } = useParams()
  const profileId = id.toLowerCase() in profiles ? id.toLowerCase() : 'rodrigo'
  const person = profiles[profileId as keyof typeof profiles]

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>{person.name} — Tchê Acompanho</title>
      <Header />
      <main className="flex flex-1 justify-center px-4 py-8 sm:py-12">
        <div className="grid w-full max-w-6xl gap-8 md:grid-cols-[16rem_minmax(0,1fr)]">
          <Link
            to="/solicitar"
            className="inline-flex items-center gap-2 text-base text-blue-800 hover:underline md:col-span-2"
          >
            <ArrowLeft size={18} /> Voltar para pessoas que possam te ajudar
          </Link>

          <section className="flex flex-col items-center rounded-xl bg-white p-5 text-center">
            <img
              className="aspect-4/5 w-full max-w-40 rounded-lg object-cover"
              src={`https://images.unsplash.com/${person.image}?auto=format&fit=crop&w=400&h=400&q=80`}
              alt={`Gato associado ao perfil de ${person.name}`}
            />
            <h1 className="mt-3 text-2xl font-bold">{person.name}</h1>
            <Rating rating={person.rating} />
            <p className="mt-1 text-lg font-bold">{person.age} anos</p>
            <p className="mt-3 text-base">
              Um pouco sobre mim: gosto de uma boa conversa e de acompanhar pessoas no dia a dia.
            </p>
            <Link
              className="mt-4 inline-flex rounded-full bg-blue-800 px-5 py-2 text-white hover:opacity-85"
              to={`/solicitar/detalhes?ajudante=${profileId}`}
            >
              Solicitar este ajudante
            </Link>
          </section>

          <section id="habilidades" className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h2 className="text-3xl font-bold">{person.name}</h2>
              <BadgeCheck className="text-blue-800" size={22} aria-hidden="true" />
              <span className="text-base">Verificado</span>
            </div>
            <div className="mt-2">
              <Rating rating={person.rating} />
            </div>
            <p className="mt-4 text-base leading-relaxed">
              {person.role} com experiência em passeios e acompanhamento. Gosto de conhecer pessoas,
              conversar e ajudar a tornar cada saída mais tranquila e agradável.
            </p>

            <h3 className="mt-5 text-xl font-bold">Habilidades</h3>
            <p className="mt-1 text-base">
              Passeios e caminhadas, acompanhamento em consultas, compras e atividades do dia a dia.
            </p>

            <h3 className="mt-6 text-xl font-bold">Passeios anteriores</h3>
            <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
              {pastTrips.map((trip) => (
                <article
                  key={trip.title}
                  className="flex items-center gap-3 bg-gray-200 px-3 py-2 text-gray-950 sm:gap-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-300"
                >
                  <img
                    className="size-10 shrink-0 rounded-md object-cover sm:size-12"
                    src={`https://images.unsplash.com/${trip.image}?auto=format&fit=crop&w=160&h=160&q=80`}
                    alt="Gato associado a um passeio anterior"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold">{trip.title}</h4>
                    <p className="text-xs">Idade: {trip.age} anos</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
