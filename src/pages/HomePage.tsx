import Header from '@/widgets/Header'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>Página Inicial — Tchê Acompanho</title>
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <section className="w-full max-w-4xl">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto] sm:gap-10">
            <div className="text-left">
              <h1 className="max-w-xl text-2xl font-bold sm:text-3xl">
                Encontre apoio para suas atividades do dia a dia no tempo que você precisa.
              </h1>
              <p className="mt-3 max-w-lg text-lg">
                Peça companhia para suas atividades ou ajude alguém a aproveitar melhor o dia.
              </p>
            </div>
            <img
              className="mx-auto size-36 rounded-full object-cover sm:size-44"
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Gato da comunidade Tchê Acompanho"
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex w-full max-w-56 flex-col items-center">
              <Link
                to="/solicitar"
                className="w-full rounded-lg bg-blue-800 px-4 py-2 text-center text-white transition-opacity hover:cursor-pointer hover:opacity-80"
              >
                Solicitar Assistência
              </Link>
              <p className="mt-2 text-base">Encontre apoio para suas atividades</p>
            </div>
            <div className="flex w-full max-w-56 flex-col items-center">
              <Link
                to="/mapa"
                className="w-full rounded-lg bg-blue-800 px-4 py-2 text-center text-white transition-opacity hover:cursor-pointer hover:opacity-80"
              >
                Oferecer Ajuda
              </Link>
              <p className="mt-2 text-base">Faça a diferença na vida de alguém</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
