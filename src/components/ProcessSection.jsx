import Reveal from './Reveal'

const steps = [
  {
    number: '01',
    title: 'SHARE YOUR LOGO',
    copy: 'Send your business name, logo and design preferences.',
  },
  {
    number: '02',
    title: 'APPROVE THE LABEL',
    copy: 'Review your customized label design.',
  },
  {
    number: '03',
    title: 'RECEIVE YOUR BOTTLES',
    copy: 'Get your branded bottled water order.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="process__head">
          <h2 id="process-title" className="display process__title">
            HOW IT WORKS
          </h2>
        </Reveal>

        <ol className="process__steps">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.number} className="process__step" delay={index * 80}>
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
