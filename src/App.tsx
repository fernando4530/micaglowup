import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
