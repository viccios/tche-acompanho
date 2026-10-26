import Logo from '@/shared/components/Logo'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 font-sans">
      <title>Página não encontrada — Tchê Acompanho</title>
      <section className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 max-w-64">
          <Logo />
        </div>
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-2 text-lg">Página não encontrada</p>
      </section>
    </main>
  )
}
