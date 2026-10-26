import Logo from '@/shared/components/Logo'
import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="bg-[#3D14B8] text-white">
      <nav className="mx-auto flex min-h-14 max-w-screen-2xl items-center gap-4 overflow-x-auto px-4">
        <Link
          to="/"
          aria-label="Página inicial"
          className="w-36 shrink-0 brightness-0 invert [&_svg]:max-w-none"
        >
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-center gap-4 whitespace-nowrap text-base sm:gap-6">
          <NavLink className="hover:underline" to="/">
            Início
          </NavLink>
          <NavLink className="hover:underline" to="/solicitar">
            Ajudantes
          </NavLink>
          <NavLink className="hover:underline" to="/mapa">
            Mapa
          </NavLink>
          <NavLink className="hover:underline" to="/login">
            Entrar
          </NavLink>
        </div>
        <Link to="/dashboard" aria-label="Abrir dashboard" className="shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=80&h=80&q=80"
            alt="Foto de perfil de um gato"
          />
        </Link>
      </nav>
    </header>
  )
}
