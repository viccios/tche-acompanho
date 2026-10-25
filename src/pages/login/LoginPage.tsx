import LoginForm from '@/features/auth/LoginForm'
import Logo from '@/shared/components/Logo'

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <title>Login</title>
      <div className="text-center mb-5">
        <Logo />
        <h1 className="text-3xl font-bold">Acessar sua conta</h1>
      </div>
      <LoginForm />
    </div>
  )
}
