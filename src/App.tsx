import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardPage from '@/pages/DashboardPage'
import HelpersPage from '@/pages/HelpersPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import MapRequestPage from '@/pages/MapRequestPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ProfilePage from '@/pages/ProfilePage'
import RequestPage from '@/pages/RequestPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/mapa" element={<MapRequestPage />} />
        <Route path="/solicitar" element={<HelpersPage />} />
        <Route path="/perfil/:id" element={<ProfilePage />} />
        <Route path="/solicitar/detalhes" element={<RequestPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
