import { useRef, useState, type FormEvent } from 'react'
import { CheckCircle2, Send, TriangleAlert } from 'lucide-react'
import { contactSection } from '../../data/team'
import { useLanguage } from '../../hooks/useLanguage'
import { Section } from '../common/Section'
import { Reveal } from '../common/Reveal'
import './contact.css'

type FieldName = 'name' | 'organisation' | 'role' | 'email' | 'interest' | 'message'

const REQUIRED: FieldName[] = ['name', 'email', 'interest', 'message']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'sending' | 'success' | 'failed'

export function ContactForm() {
  const { t } = useLanguage()
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const summaryRef = useRef<HTMLParagraphElement>(null)

  function validate(data: FormData): Partial<Record<FieldName, string>> {
    const next: Partial<Record<FieldName, string>> = {}
    for (const field of REQUIRED) {
      const value = String(data.get(field) ?? '').trim()
      if (!value) next[field] = t(contactSection.errorRequired)
    }
    const email = String(data.get('email') ?? '').trim()
    if (email && !EMAIL_RE.test(email)) next.email = t(contactSection.errorEmail)
    return next
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      summaryRef.current?.focus()
      return
    }

    // Basic spam protection: silently drop obviously automated submissions.
    if (String(data.get('bot-field') ?? '') !== '') {
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const body = new URLSearchParams()
      body.set('form-name', 'pilot-interest')
      for (const [key, value] of data.entries()) body.set(key, String(value))

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Form handler returned ${response.status}`)
      setStatus('success')
      form.reset()
    } catch {
      // Never fake success: without a form handler (e.g. local dev) we say so.
      setStatus('failed')
    }
  }

  const field = (
    name: FieldName,
    label: string,
    input: (props: {
      id: string
      name: string
      'aria-invalid': boolean | undefined
      'aria-describedby': string | undefined
      required: boolean
    }) => React.ReactNode,
  ) => {
    const error = errors[name]
    const errorId = `contact-${name}-error`
    const required = REQUIRED.includes(name)
    return (
      <div className={`contact__field${error ? ' contact__field--error' : ''}`}>
        <label htmlFor={`contact-${name}`}>
          {label}
          {required && (
            <span className="contact__required" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {input({
          id: `contact-${name}`,
          name,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': error ? errorId : undefined,
          required,
        })}
        {error && (
          <p className="contact__error" id={errorId}>
            <TriangleAlert size={13} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    )
  }

  return (
    <Section
      id="contact"
      eyebrow={contactSection.eyebrow}
      title={contactSection.heading}
    >
      <Reveal className="contact__wrap card">
        {status === 'success' ? (
          <div className="contact__success" role="status">
            <CheckCircle2 size={40} aria-hidden="true" />
            <h3>{t(contactSection.successTitle)}</h3>
            <p>{t(contactSection.successBody)}</p>
          </div>
        ) : (
          <form
            name="pilot-interest"
            method="POST"
            data-netlify="true"
            noValidate
            onSubmit={onSubmit}
            className="contact__form"
          >
            <input type="hidden" name="form-name" value="pilot-interest" />
            <p className="contact__honeypot" aria-hidden="true">
              <label>
                Do not fill this field: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <p
              ref={summaryRef}
              tabIndex={-1}
              className={`contact__summary${Object.keys(errors).length > 0 ? ' contact__summary--visible' : ''}`}
              role="alert"
            >
              {Object.keys(errors).length > 0 ? t(contactSection.errorSummary) : ''}
            </p>

            <div className="contact__row">
              {field('name', t(contactSection.fields.name), (props) => (
                <input type="text" autoComplete="name" {...props} />
              ))}
              {field('organisation', t(contactSection.fields.organisation), (props) => (
                <input type="text" autoComplete="organization" {...props} />
              ))}
            </div>
            <div className="contact__row">
              {field('role', t(contactSection.fields.role), (props) => (
                <input type="text" autoComplete="organization-title" {...props} />
              ))}
              {field('email', t(contactSection.fields.email), (props) => (
                <input type="email" autoComplete="email" inputMode="email" {...props} />
              ))}
            </div>
            {field('interest', t(contactSection.fields.interest), (props) => (
              <select {...props} defaultValue="">
                <option value="" disabled>
                  —
                </option>
                {contactSection.interestOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {t(option.label)}
                  </option>
                ))}
              </select>
            ))}
            {field('message', t(contactSection.fields.message), (props) => (
              <textarea rows={5} {...props} />
            ))}

            {status === 'failed' && (
              <p className="contact__failed" role="alert">
                <TriangleAlert size={15} aria-hidden="true" />
                {t(contactSection.submitFailed)}
              </p>
            )}

            <div className="contact__foot">
              <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                <Send size={16} aria-hidden="true" />
                {status === 'sending' ? t(contactSection.sending) : t(contactSection.submit)}
              </button>
              <p className="contact__privacy">{t(contactSection.privacyNotice)}</p>
            </div>
          </form>
        )}
      </Reveal>
    </Section>
  )
}
