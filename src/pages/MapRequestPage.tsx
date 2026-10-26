import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import Header from '@/widgets/Header'

type MapMarker = {
  name: string
  slug: string
  age?: number
  request?: string
  x: number
  y: number
  image: string
}

const markers: MapMarker[] = [
  {
    name: 'Fabricio',
    age: 67,
    request: 'Precisa de ajuda para se locomover',
    slug: 'fabricio',
    x: 33,
    y: 58,
    image: 'photo-1514888286974-6c03e2ca1dba',
  },
  { name: 'Carla', slug: 'carla', x: 46, y: 23, image: 'photo-1573865526739-10659fec78a5' },
  { name: 'Rodrigo', slug: 'rodrigo', x: 39, y: 54, image: 'photo-1495360010541-f48722b34f7d' },
  { name: 'Paulo', slug: 'paulo', x: 57, y: 56, image: 'photo-1511044568932-338cba0ad803' },
  { name: 'Marina', slug: 'marina', x: 25, y: 42, image: 'photo-1533738363-b7f9aef128ce' },
]

export default function MapRequestPage() {
  const [searchParams] = useSearchParams()
  const requestedMarker = searchParams.get('pedido')
  const [selected, setSelected] = useState(markers[0])
  const [popup, setPopup] = useState(true)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const marker = markers.find((item) => item.slug === requestedMarker)
    if (marker) {
      setSelected(marker)
      setPopup(true)
      setAccepted(false)
    }
  }, [requestedMarker])
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>Mapa de solicitações — Tchê Acompanho</title>
      <Header />
      <main className="relative flex-1 overflow-hidden bg-sky-100">
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 h-full w-full cursor-grab border-0 active:cursor-grabbing"
            title="Mapa de Porto Alegre e região metropolitana"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-51.31%2C-30.16%2C-51.03%2C-29.85&layer=mapnik"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-emerald-500/15 mix-blend-multiply"
          />
          {popup && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
              {accepted ? (
                <article className="pointer-events-auto relative z-10 flex w-80 max-w-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg">
                  <CheckCircle2 className="text-green-700" size={42} aria-hidden="true" />
                  <h2 className="mt-3 text-xl font-bold">Ajuda aceita</h2>
                  <p className="mt-2 text-base">
                    Você aceitou ajudar {selected.name}. A solicitação está no seu dashboard.
                  </p>
                  <Link
                    className="mt-4 rounded-full bg-blue-800 px-5 py-2 text-white hover:opacity-85"
                    to={`/dashboard?aceito=${encodeURIComponent(selected.name)}`}
                  >
                    Abrir dashboard
                  </Link>
                  <button
                    className="mt-3 text-sm text-blue-800 hover:underline"
                    onClick={() => {
                      setAccepted(false)
                      setPopup(false)
                    }}
                  >
                    Continuar no mapa
                  </button>
                </article>
              ) : (
                <article className="pointer-events-auto relative z-10 flex w-72 max-w-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg">
                  <img
                    className="mb-3 size-20 rounded-full object-cover"
                    src={`https://images.unsplash.com/${selected.image}?auto=format&fit=crop&w=100&h=100&q=80`}
                    alt={`Gato associado ao pedido de ajuda de ${selected.name}`}
                  />
                  <strong className="text-lg">
                    {selected.name}
                    {selected.age ? ` (${selected.age} anos)` : ''}
                  </strong>
                  <p className="mt-2 text-base">
                    {selected.request ?? 'Quer receber ajuda da comunidade'}
                  </p>
                  <div className="mt-4 flex gap-3 text-base">
                    <button
                      className="rounded-md bg-blue-800 px-4 py-2 text-white"
                      onClick={() => setAccepted(true)}
                    >
                      Aceitar
                    </button>
                    <button
                      className="rounded-md border border-gray-300 px-4 py-2"
                      onClick={() => setPopup(false)}
                    >
                      Recusar
                    </button>
                  </div>
                </article>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
