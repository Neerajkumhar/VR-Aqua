import Reveal from './Reveal'

const industries = [
  'Restaurants',
  'Hotels',
  'Cafés',
  'Weddings & Events',
  'Corporate Businesses',
]

export default function Applications() {
  return (
    <section id="industries" className="section industries" aria-labelledby="industries-title">
      <div className="container industries__grid">
        <Reveal className="industries__head">
          <h2 id="industries-title" className="display industries__title">
            WHO WE WORK WITH
          </h2>
        </Reveal>

        <Reveal as="ul" className="industries__list" delay={100}>
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
