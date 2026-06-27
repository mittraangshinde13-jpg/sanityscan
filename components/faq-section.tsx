'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is SanityScan available today?',
    a: "Not yet. We're currently in the validation stage — speaking directly with loan brokers, DSAs and CAs across India before investing in development. If the problem resonates, we'd love to hear your perspective and add you to the beta list.",
  },
  {
    q: 'How accurate are the recommendations?',
    a: "The recommendations are based on structured underwriting criteria commonly used by lenders when reviewing bank statements — not AI predictions or guarantees. SanityScan identifies patterns that are likely to attract scrutiny during underwriting, and suggests specific steps the client can take before submitting. Final lending decisions always rest with the lender.",
  },
  {
    q: 'Who is this designed for?',
    a: "SanityScan is built specifically for Independent Loan Brokers, Direct Selling Agents (DSAs), Chartered Accountants, Credit Consultants, and small NBFC teams who work with MSME and retail loan applications in India.",
  },
  {
    q: 'How do I become a beta user?',
    a: "Fill in the Request Early Beta Access form on this page. We review every submission and follow up personally within a few days. Beta access is limited and will be offered based on fit and use case.",
  },
  {
    q: 'Will early users receive free access?',
    a: "Yes. Every professional who participates in the beta program will receive free access to the platform. Early users will also have a direct line to the product team and can influence which features are built first.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
              Common Questions.
            </h2>
            <p className="text-[#94A3B8] text-[15px] leading-relaxed">
              Everything you need to know about SanityScan and how to get early access.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: '#091E38',
                  border: open === i ? '1px solid rgba(22,163,74,0.2)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="text-[14px] font-medium text-foreground group-hover:text-brand transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: open === i ? 'rgba(22,163,74,0.12)' : 'rgba(255,255,255,0.05)',
                      border: open === i ? '1px solid rgba(22,163,74,0.25)' : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {open === i ? (
                      <Minus size={11} className="text-brand" />
                    ) : (
                      <Plus size={11} className="text-[#64748B] group-hover:text-brand transition-colors" />
                    )}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[13px] text-[#94A3B8] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
