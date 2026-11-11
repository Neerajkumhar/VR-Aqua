import Applications from './components/Applications'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import ProcessSection from './components/ProcessSection'
import ProductCollection from './components/ProductCollection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Introduction />
        <ProductCollection />
        <ProcessSection />
        <Applications />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
