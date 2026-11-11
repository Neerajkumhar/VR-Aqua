import Reveal from './Reveal'

export default function Introduction() {
  return (
    <section id="about" className="section intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <Reveal className="intro__head">
          <h2 id="intro-title" className="display intro__title">
            BOTTLED WATER, CUSTOM LABELLED.
          </h2>
        </Reveal>

        <Reveal className="intro__body" delay={100}>
          <p>
            VR AQUA provides packaged drinking water with personalized labels featuring your business
            name and branding.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
