import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginPage from './admin/pages/LoginPage'
import DashboardPage from './admin/pages/DashboardPage'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('mg_admin_token')
  return token ? <>{children}</> : <Navigate to="/admin/login" replace />
}

function Landing() {
  return (
    <div className="sparkles-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
