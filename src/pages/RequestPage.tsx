import { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import Header from '@/widgets/Header'

export default function RequestPage() {
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()
  const helperSlug = searchParams.get('ajudante')
  const helperNames: Record<string, string> = {
    'cara-maneiro': 'Cara maneiro',
    rodrigo: 'Rodrigo',
    paulo: 'Paulo',
    fabricio: 'Fabricio',
  }
  const helper = helperSlug ? (helperNames[helperSlug] ?? helperSlug) : null

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <title>Solicitar um ajudante — Tchê Acompanho</title>
      <Header />
      <main className="flex flex-1 justify-center px-4 py-10 sm:py-14">
        {sent ? (
          <section className="w-full max-w-md self-center text-center">
            <h1 className="text-3xl font-bold">Solicitação enviada</h1>
            <p className="mt-3 text-lg">Os detalhes da sua solicitação foram registrados.</p>
            <Link
              to="/dashboard"
              className="mt-6 inline-flex rounded-full bg-blue-800 px-6 py-3 text-white hover:opacity-85"
            >
              Ir para o dashboard
            </Link>
            <Link className="mt-4 block text-blue-800 hover:underline" to="/solicitar">
              Voltar para ajudantes
            </Link>
          </section>
        ) : (
          <section className="w-full max-w-md">
            <h1 className="mb-6 text-center text-3xl font-bold">Solicitar um ajudante</h1>
            {helper && (
              <p className="mb-4 text-center text-base">
                Ajudante escolhido: <strong>{helper}</strong>
              </p>
            )}
            <form
              className="flex flex-col gap-4"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-1 text-base font-bold">
                  Data
                  <input
                    className="rounded-lg bg-gray-200 px-3 py-2 font-normal"
                    type="date"
                    name="date"
                    required
                  />
                </label>
                <label className="flex flex-col gap-1 text-base font-bold">
                  Hora
                  <input
                    className="rounded-lg bg-gray-200 px-3 py-2 font-normal"
                    type="time"
                    name="time"
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1 text-base font-bold">
                Destino
                <input
                  className="rounded-lg bg-gray-200 px-3 py-2 font-normal"
                  type="text"
                  name="destination"
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-base font-bold">
                Tipo de ajuda necessária
                <select
                  className="rounded-lg bg-gray-200 px-3 py-2 font-normal"
                  name="helpType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Escolha uma opção
                  </option>
                  <option>Acompanhamento</option>
                  <option>Companhia</option>
                  <option>Ajuda com tarefas</option>
                </select>
              </label>
              <button
                className="mt-2 self-center rounded-full bg-blue-800 px-8 py-3 text-lg text-white hover:opacity-85"
                type="submit"
              >
                Solicitar
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  )
}
