import { useRef, useState } from 'react'
import { bottleSizes, businessTypes, contactStatus, site } from '../data/site'
import { buildInquiryText, buildMailto, buildWhatsAppUrl, copyText } from '../utils/inquiry'
import Reveal from './Reveal'

const initialForm = {
  businessName: '',
  contactPerson: '',
  phone: '',
  businessType: '',
  bottleSize: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const formRef = useRef(null)
  const hasContact = Boolean(site.email || site.phone || site.whatsapp)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
    if (status) setStatus('')
  }

  const validate = () => {
    const next = {}
    if (!form.businessName.trim()) next.businessName = 'Enter your business name.'
    if (!form.contactPerson.trim()) next.contactPerson = 'Enter a contact person.'
    if (!/^[+()\\d\\s-]{7,}$/.test(form.phone.trim())) {
      next.phone = 'Enter a phone number with at least 7 digits.'
    }
    if (!form.businessType) next.businessType = 'Choose a business type.'
    if (!form.bottleSize) next.bottleSize = 'Choose a bottle size preference.'
    return next
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('Please check the highlighted fields before submitting.')
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus()
      })
      return
    }

    setErrors({})

    if (site.email) {
      setStatus('Opening your email app with the completed inquiry.')
      window.location.href = buildMailto(site.email, form)
      return
    }

    if (site.whatsapp) {
      setStatus('Opening WhatsApp with the completed inquiry.')
      window.open(buildWhatsAppUrl(site.whatsapp, form), '_blank', 'noopener,noreferrer')
      return
    }

    const copied = await copyText(buildInquiryText(form))
    setStatus(
      copied
        ? 'Inquiry copied to your clipboard. Direct delivery will be enabled once a contact channel is configured.'
        : contactStatus.unconfigured,
    )
  }

  const describedBy = (field) => (errors[field] ? `contact-${field}-error` : undefined)

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__statement">
          <Reveal>
            <h2 id="contact-title" className="display contact__title">
              NEED CUSTOM BOTTLES?
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="contact__lede">
              Tell us about your business and bottle requirements. We'll take it from there.
            </p>
          </Reveal>

          {hasContact && (
            <div className="contact__availability" aria-label="Contact information">
              <span className="contact__availability-text">
                {site.email && (
                  <a href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                )}
                {site.phone && site.email && <span className="contact__separator">|</span>}
                {site.phone && (
                  <a href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                )}
                {site.whatsapp && (
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
              </span>
            </div>
          )}

          <Reveal className="contact__form-wrap" delay={100}>
            <form ref={formRef} id="inquiry-form" className="inquiry-form" onSubmit={handleSubmit} noValidate>
              <fieldset className="contact__group contact__group--details">
                <legend className="contact__group-label">YOUR DETAILS</legend>
                <div className="field">
                  <label htmlFor="contact-businessName">
                    Business name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-businessName"
                    name="businessName"
                    type="text"
                    autoComplete="organization"
                    value={form.businessName}
                    onChange={(event) => updateField('businessName', event.target.value)}
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={describedBy('businessName')}
                    required
                  />
                  {errors.businessName && (
                    <p className="field__error" id="contact-businessName-error">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="contact-contactPerson">
                    Contact person <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-contactPerson"
                    name="contactPerson"
                    type="text"
                    autoComplete="name"
                    value={form.contactPerson}
                    onChange={(event) => updateField('contactPerson', event.target.value)}
                    aria-invalid={Boolean(errors.contactPerson)}
                    aria-describedby={describedBy('contactPerson')}
                    required
                  />
                  {errors.contactPerson && (
                    <p className="field__error" id="contact-contactPerson-error">
                      {errors.contactPerson}
                    </p>
                  )}
                </div>
              </fieldset>

              <fieldset className="contact__group contact__group--requirements">
                <legend className="contact__group-label">YOUR REQUIREMENTS</legend>
                <div className="form-row form-row--two">
                  <div className="field">
                    <label htmlFor="contact-businessType">
                      Business type <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-businessType"
                      name="businessType"
                      value={form.businessType}
                      onChange={(event) => updateField('businessType', event.target.value)}
                      aria-invalid={Boolean(errors.businessType)}
                      aria-describedby={describedBy('businessType')}
                      required
                    >
                      <option value="">Select a type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="field__error" id="contact-businessType-error">
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="contact-bottleSize">
                      Bottle size preference <span aria-hidden="true">*</span>
                    </label>
                    <div className="radio-group">
                      {bottleSizes.map((size) => (
                        <label key={size} className={`radio-chip ${form.bottleSize === size ? 'is-active' : ''}`}>
                          <input
                            type="radio"
                            name="bottleSize"
                            value={size}
                            checked={form.bottleSize === size}
                            onChange={(event) => updateField('bottleSize', event.target.value)}
                            aria-invalid={Boolean(errors.bottleSize)}
                            aria-describedby={describedBy('bottleSize')}
                          />
                          <span>{size}</span>
                        </label>
                      ))}
                    </div>
                    {errors.bottleSize && (
                      <p className="field__error" id="contact-bottleSize-error">
                        {errors.bottleSize}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="contact__group contact__group--project">
                <legend className="contact__group-label">PROJECT DETAILS</legend>
                <div className="field">
                  <label htmlFor="contact-message">
                    Project notes <span className="field__optional">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    placeholder="Tell us about the occasion, brand or quantity you have in mind."
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                  />
                </div>
              </fieldset>

              <div className="contact__actions">
                <button className="button button--primary" type="submit">
                  REQUEST A QUOTE
                </button>
              </div>

              <div className="inquiry-form__status" aria-live="polite" role="status">
                {status}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}