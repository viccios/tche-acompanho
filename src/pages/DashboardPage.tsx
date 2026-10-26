import { CalendarDays, Plus, Star, UserRound } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import Header from '@/widgets/Header'

const requests = [
  {
    title: 'Acompanhamento em uma consulta',
    detail: 'Hoje, às 14h · Porto Alegre',
    action: 'Aceitar',
    marker: 'fabricio',
  },
  {
    title: 'Companhia para um passeio',
    detail: 'Amanhã, às 10h · Porto Alegre',
    action: 'Ver no mapa',
    marker: 'carla',
  },
]

const pastHelp = [
  {
    title: 'Passeio no parque',
    detail: 'Acompanhamento para uma caminhada',
    image: 'photo-1514888286974-6c03e2ca1dba',
  },
  {
    title: 'Visita ao centro',
    detail: 'Companhia durante um passeio',
    image: 'photo-1573865526739-10659fec78a5',
  },
]

export default function DashboardPage() {
  const [searchParams] = useSearchParams()
  const acceptedName = searchParams.get('aceito')

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>Dashboard — Tchê Acompanho</title>
      <Header />
      <div className="flex flex-1">
        <aside className="w-28 shrink-0 bg-gray-100 px-2 py-5 sm:w-56 sm:px-5 sm:py-8">
          <div className="flex flex-col items-center text-center">
            <img
              className="size-12 rounded-full object-cover sm:size-20"
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=160&h=160&q=80"
              alt="Gato do perfil de Fabricio"
            />
            <p className="mt-2 text-sm font-bold sm:text-lg">Fabricio</p>
          </div>
          <nav className="mt-6 space-y-2" aria-label="Painel">
            <Link
              className="flex items-center gap-2 rounded-md bg-white px-2 py-2 text-xs text-gray-900 hover:bg-white sm:text-base"
              to="/solicitar"
            >
              <UserRound size={16} /> <span>Ajudantes</span>
            </Link>
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-3 py-5 sm:px-8 sm:py-8">
          <h1 className="text-2xl font-bold sm:text-3xl">Dashboard</h1>
          {acceptedName && (
            <p
              className="mt-3 rounded-lg border border-green-700/30 bg-green-50 px-4 py-3 text-green-900"
              role="status"
            >
              Você aceitou ajudar {acceptedName}. Obrigado por fazer parte da comunidade!
            </p>
          )}

          <section className="mt-5">
            <h2 className="mb-2 text-lg font-bold sm:text-xl">Solicitações de ajuda</h2>
            <div className="space-y-2 rounded-lg border border-gray-200 p-2">
              {requests.map((request) => (
                <article
                  key={request.title}
                  className="flex items-center gap-2 rounded-md bg-gray-100 p-2 sm:gap-4 sm:p-3"
                >
                  <CalendarDays className="shrink-0 text-blue-800" size={20} />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold sm:text-lg">{request.title}</h3>
                    <p className="text-sm text-gray-700 sm:text-base">{request.detail}</p>
                  </div>
                  <Link
                    className="shrink-0 text-sm text-blue-800 hover:underline sm:text-base"
                    to={`/mapa?pedido=${request.marker}`}
                  >
                    {request.action}
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h2 className="mb-2 text-lg font-bold sm:text-xl">Passeios anteriores</h2>
            <div className="space-y-2 rounded-lg border border-gray-200 p-2">
              {pastHelp.map((item) => (
                <article
                  key={item.title}
                  className="flex items-center gap-2 rounded-md bg-gray-100 p-2 sm:gap-4 sm:p-3"
                >
                  <img
                    className="size-9 shrink-0 rounded-full object-cover sm:size-12"
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=100&h=100&q=80`}
                    alt="Gato associado a um passeio"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-700 sm:text-base">{item.detail}</p>
                    <p className="mt-1 flex items-center gap-0.5 text-amber-500" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={12} fill="currentColor" />
                      ))}
                    </p>
                  </div>
                  <Link
                    className="shrink-0 text-sm text-blue-800 hover:underline sm:text-base"
                    to="/perfil/fabricio"
                  >
                    Saber mais
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-5 text-center">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-blue-800 px-6 py-3 text-base text-white hover:opacity-85 sm:text-lg"
              to="/solicitar"
            >
              <Plus size={18} /> Adicionar nova solicitação
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
