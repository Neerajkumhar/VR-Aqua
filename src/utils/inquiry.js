export function buildInquiryText(form) {
  return [
    'VR AQUA — Custom Bottle Inquiry',
    '',
    `Business name: ${form.businessName}`,
    `Contact person: ${form.contactPerson}`,
    `Phone: ${form.phone}`,
    `Business type: ${form.businessType}`,
    `Bottle size: ${form.bottleSize}`,
    '',
    'Project notes:',
    form.message || '—',
    '',
    'Sent from the VR AQUA website inquiry form.',
  ].join('\n')
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const copied = document.execCommand('copy')
      document.body.removeChild(textarea)
      return copied
    } catch {
      return false
    }
  }
}

export function buildMailto(email, form) {
  const subject = encodeURIComponent(`Custom bottle inquiry — ${form.businessName}`)
  const body = encodeURIComponent(buildInquiryText(form))
  return `mailto:${email}?subject=${subject}&body=${body}`
}

export function buildWhatsAppUrl(number, form) {
  const digits = number.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(buildInquiryText(form))}`
}
