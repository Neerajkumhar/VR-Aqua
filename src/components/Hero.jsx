import { heroProduct } from '../data/assetManifest'
import BottleImage from './BottleImage'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy hero-enter">
          <h1 id="hero-title" className="hero__title">
            <span>CUSTOM WATER BOTTLES.</span>
            <span>YOUR BRAND ON THEM.</span>
          </h1>

          <p className="hero__lede">
            Customized packaged drinking water for restaurants, cafés, hotels, weddings and businesses.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#collection">
              VIEW BOTTLE DESIGNS
            </a>
            <a className="button button--outline" href="#contact">
              REQUEST A QUOTE
            </a>
          </div>
        </div>

        <div className="hero__visual hero-enter hero-enter--visual" aria-hidden="true">
          <span className="hero__glow" />
          <div className="hero__bottle">
            <BottleImage
              product={heroProduct}
              size="1liter"
              loading="eager"
              fetchPriority="high"
              decorative
            />
          </div>
        </div>
      </div>
    </section>
  )
}
