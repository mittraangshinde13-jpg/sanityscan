'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, AlertCircle, X } from 'lucide-react'

const SUBMIT_URL = '/api/signup'

type ToastState = { type: 'success' | 'error'; message: string } | null

interface FormData {
  fullName: string
  company: string
  role: string
  email: string
  phone: string
  monthlyFiles: string
}

interface EarlyAccessFormProps {
  formRef?: React.RefObject<HTMLElement | null>
}

export function EarlyAccessForm({ formRef }: EarlyAccessFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    monthlyFiles: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [toast, setToast] = useState<ToastState>(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 6000)
    return () => clearTimeout(t)
  }, [toast])

  function validate(): boolean {
    const errs: Partial<FormData> = {}
    if (!form.fullName.trim()) errs.fullName = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Valid email required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Valid 10-digit Indian mobile required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    const payload = {
      fullName: form.fullName,
      company: form.company,
      role: form.role,
      email: form.email,
      phone: form.phone,
      city: '',
      monthlyLoanFiles: form.monthlyFiles,
      source: 'Website',
      challenge: '',
    }

    try {
      const response = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setToast({
        type: 'success',
        message: '🎉 Thank you! Your beta request has been received.',
      })
      setForm({
        fullName: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        monthlyFiles: '',
      })
      setErrors({})
    } catch {
      setToast({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="early-access"
      ref={formRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(22,163,74,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-brand/30 bg-brand/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-medium text-brand tracking-wide">Validation Stage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground">
              Help Shape the Future of Pre-Underwriting.
            </h2>

            <p className="text-[#94A3B8] text-[16px] leading-relaxed">
              SanityScan is currently being validated with professionals across India&apos;s
              lending ecosystem.
            </p>
            <p className="text-[#94A3B8] text-[16px] leading-relaxed">
              Before building the complete platform, we&apos;re inviting experienced brokers,
              DSAs and CAs to share feedback and receive early beta access.
              Your feedback will directly influence the first version of the product.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              {[
                'Free access for all beta users',
                'No commitment or payment required',
                'Your feedback shapes the product directly',
                'Private and secure — no bank data stored',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={14} className="text-brand shrink-0" />
                  <span className="text-[13px] text-[#94A3B8]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-2xl p-7 sm:p-8 relative overflow-hidden"
            style={{ background: '#091E38', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.45), transparent)' }}
              aria-hidden="true"
            />

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4.5">
                <div className="mb-1">
                  <h3 className="text-[18px] font-bold text-foreground mb-1">Request Early Beta Access</h3>
                  <p className="text-[12px] text-[#64748B]">
                    Takes under a minute. We follow up personally.
                  </p>
                </div>

                {/* Text fields */}
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Rahul Sharma', ac: 'name' },
                  { name: 'company', label: 'Company / Firm Name', type: 'text', placeholder: 'Your brokerage or firm', ac: 'organization' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com', ac: 'email' },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '9876543210', ac: 'tel' },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label htmlFor={field.name} className="text-[12px] font-medium text-[#94A3B8]">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.ac}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof FormData]}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-[13px] text-foreground placeholder-[#3D5166] transition-all duration-200 outline-none focus:ring-2 focus:ring-brand/35"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: errors[field.name as keyof FormData]
                          ? '1px solid rgba(239,68,68,0.5)'
                          : '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                    {errors[field.name as keyof FormData] && (
                      <p className="text-[11px] text-red-400">{errors[field.name as keyof FormData]}</p>
                    )}
                  </div>
                ))}

                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-[12px] font-medium text-[#94A3B8]">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl text-[13px] transition-all duration-200 outline-none focus:ring-2 focus:ring-brand/35 appearance-none cursor-pointer"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: form.role ? '#F0F4F8' : '#3D5166',
                    }}
                  >
                    <option value="" style={{ background: '#091E38' }}>Select your role</option>
                    <option value="loan-broker" style={{ background: '#091E38' }}>Independent Loan Broker</option>
                    <option value="dsa" style={{ background: '#091E38' }}>DSA — Direct Selling Agent</option>
                    <option value="ca" style={{ background: '#091E38' }}>Chartered Accountant</option>
                    <option value="credit-consultant" style={{ background: '#091E38' }}>Credit Consultant</option>
                    <option value="nbfc" style={{ background: '#091E38' }}>NBFC / Lending Institution</option>
                    <option value="other" style={{ background: '#091E38' }}>Other</option>
                  </select>
                </div>

                {/* Monthly files */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="monthlyFiles" className="text-[12px] font-medium text-[#94A3B8]">
                    Average Loan Files Per Month
                  </label>
                  <select
                    id="monthlyFiles"
                    name="monthlyFiles"
                    value={form.monthlyFiles}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl text-[13px] transition-all duration-200 outline-none focus:ring-2 focus:ring-brand/35 appearance-none cursor-pointer"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: form.monthlyFiles ? '#F0F4F8' : '#3D5166',
                    }}
                  >
                    <option value="" style={{ background: '#091E38' }}>Select a range</option>
                    <option value="1-5" style={{ background: '#091E38' }}>1–5 files per month</option>
                    <option value="6-20" style={{ background: '#091E38' }}>6–20 files per month</option>
                    <option value="21-50" style={{ background: '#091E38' }}>21–50 files per month</option>
                    <option value="50+" style={{ background: '#091E38' }}>50+ files per month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand text-white font-semibold text-[14px] transition-all duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-900/25 disabled:opacity-70 disabled:cursor-not-allowed glow-green"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Early Beta Access
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#64748B]">
                  Selected users will receive free beta access and priority onboarding.
                </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm"
          style={{ animation: 'toastIn 0.35s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div
            className="flex items-start gap-3 px-4 py-3.5 rounded-2xl shadow-2xl"
            style={{
              background: '#091E38',
              border:
                toast.type === 'success'
                  ? '1px solid rgba(22,163,74,0.4)'
                  : '1px solid rgba(239,68,68,0.4)',
              boxShadow: '0 20px 40px -12px rgba(0,0,0,0.6)',
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{
                background:
                  toast.type === 'success' ? 'rgba(22,163,74,0.14)' : 'rgba(239,68,68,0.14)',
              }}
            >
              {toast.type === 'success' ? (
                <CheckCircle size={17} className="text-brand" />
              ) : (
                <AlertCircle size={17} className="text-red-400" />
              )}
            </div>
            <p className="text-[13px] leading-relaxed text-foreground pr-1">{toast.message}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="text-[#64748B] hover:text-foreground transition-colors shrink-0 mt-0.5"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
