'use client'

import { DollarSign, Users, Clock, FileText } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Lost Commission',
    description:
      'Avoid preventable rejections that directly impact broker earnings. Every clean application submitted is a step toward a faster closure.',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.15)',
  },
  {
    icon: Users,
    title: 'Client Trust',
    description:
      'Help clients fix issues before approaching lenders. Showing structured insights positions you as a professional advisor, not just a middleman.',
    color: '#16A34A',
    bg: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.15)',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description:
      'Identify potential problems in minutes instead of manually reviewing statements line by line. Focus your time on conversions, not paperwork.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    icon: FileText,
    title: 'Professional Advice',
    description:
      'Give clients structured, data-backed recommendations instead of guesswork. Present a polished PDF report that builds confidence.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.15)',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">
            Why it matters
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
            Every Rejected Loan Costs More Than Just Commission.
          </h2>
          <p className="text-[#94A3B8] text-[17px] leading-relaxed">
            A single avoidable rejection affects your pipeline, your client relationship, and your
            reputation. SanityScan gives you the intelligence to act before the bank does.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-2xl p-6 flex flex-col gap-4 hover-lift cursor-default"
                style={{
                  background: '#0C2340',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: f.bg, border: `1px solid ${f.border}` }}
                >
                  <Icon size={18} style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-[15px] mb-2">{f.title}</h3>
                  <p className="text-[#64748B] text-[13px] leading-relaxed">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
