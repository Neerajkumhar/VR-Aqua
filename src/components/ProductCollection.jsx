import BottleCarousel from './BottleCarousel'
import Reveal from './Reveal'

export default function ProductCollection() {
  return (
    <section id="collection" className="section collection" aria-labelledby="collection-title">
      <div className="container">
        <div className="collection__head">
          <Reveal>
            <h2 id="collection-title" className="display collection__title">
              OUR BOTTLE COLLECTION
            </h2>
          </Reveal>
          <Reveal delay={80} className="collection__note">
            <p>Explore customized bottles created for different brands and occasions.</p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <BottleCarousel />
        </Reveal>
      </div>
    </section>
  )
}
