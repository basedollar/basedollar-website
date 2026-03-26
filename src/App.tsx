import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Lore from './components/Lore'
import AxoMama from './components/AxoMama'
import Footer from './components/Footer'
import BorderStrip from './components/BorderStrip'

function App() {
  return (
    <div>
      <Navbar />
      <BorderStrip />
      <Hero />
      <BorderStrip />
      <Features />
      <HowItWorks />
      <Lore />
      <AxoMama />
      <BorderStrip />
      <Footer />
    </div>
  )
}

export default App
