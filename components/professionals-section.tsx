'use client'

import { Briefcase, Users, Calculator, BarChart2, Building2 } from 'lucide-react'

const professionals = [
  {
    icon: Briefcase,
    title: 'Independent Loan Brokers',
    description: 'Identify statement risks before they cost you a commission. Review every file with structure and confidence.',
  },
  {
    icon: Users,
    title: 'Direct Selling Agents (DSAs)',
    description: 'Handle higher loan volumes without missing the issues that cause rejections. Scale your review process.',
  },
  {
    icon: Calculator,
    title: 'Chartered Accountants',
    description: 'Add a pre-submission review layer to your existing financial advisory. Give clients structured guidance, not guesswork.',
  },
  {
    icon: BarChart2,
    title: 'Credit Consultants',
    description: 'Differentiate your practice with a consistent, documented review process that clients can see and trust.',
  },
  {
    icon: Building2,
    title: 'Small NBFC Teams',
    description: 'Reduce inbound application quality variance. Flag borrower preparation issues before they reach credit.',
  },
]

export function ProfessionalsSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(22,163,74,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">
            Built For
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
            Designed for Professionals.
          </h2>
          <p className="text-[#94A3B8] text-[17px] leading-relaxed">
            SanityScan is purpose-built for the professionals who sit between a borrower and a lender.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionals.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: i === 0 ? 'rgba(22,163,74,0.05)' : '#091E38',
                border: i === 0 ? '1px solid rgba(22,163,74,0.18)' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: i === 0 ? 'rgba(22,163,74,0.15)' : 'rgba(255,255,255,0.05)',
                  border: i === 0 ? '1px solid rgba(22,163,74,0.25)' : '1px solid rgba(255,255,255,0.09)',
                }}
              >
                <Icon
                  size={18}
                  style={{ color: i === 0 ? '#16A34A' : '#94A3B8' }}
                />
              </div>
              <h3 className="text-[15px] font-semibold text-foreground mb-2 leading-snug">{title}</h3>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">{description}</p>
            </div>
          ))}

          {/* Final card — CTA */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{
              background: 'rgba(22,163,74,0.04)',
              border: '1px dashed rgba(22,163,74,0.2)',
            }}
          >
            <div>
              <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-3">Your role not listed?</p>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                If you work in the lending or credit advisory space and this problem resonates, we want to hear from you.
              </p>
            </div>
            <a
              href="#early-access"
              className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-semibold text-brand hover:text-green-400 transition-colors"
            >
              Get in touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
