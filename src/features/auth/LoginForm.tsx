import { useNavigate } from 'react-router'
import { Mail, Lock } from 'lucide-react'

export default function LoginForm() {
  const navigate = useNavigate()

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <div className="relative">
        <Mail
          aria-hidden="true"
          className="absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          autoComplete="email"
          required
          className="bg-gray-400 p-1 pl-8 rounded w-full placeholder:text-gray-800"
        />
      </div>
      <label htmlFor="password" className="font-bold">
        Senha
      </label>
      <div className="relative">
        <Lock
          aria-hidden="true"
          className="absolute left-1 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          autoComplete="current-password"
          required
          className="bg-gray-400 p-1 pl-8 rounded w-full placeholder:text-gray-800"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-800 text-white p-2 mt-8 rounded-full transition-opacity hover:opacity-80 hover:cursor-pointer"
      >
        Acessar plataforma
      </button>
      <p className="text-blue-800 text-center hover:underline hover:cursor-not-allowed">
        Esqueceu sua senha?
      </p>
      <p className="text-center">
        <strong>Ainda não tem uma conta?</strong>{' '}
        <span className="text-blue-800 hover:underline hover:cursor-not-allowed">Cadastrar-se</span>
      </p>
    </form>
  )
}
