'use client'

import { Upload, Cpu, FileCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Bank Statement PDF',
    description:
      'Upload your client\'s 6-month bank statement PDF directly into SanityScan. Supports all major Indian bank formats including HDFC, SBI, ICICI, Axis, and more.',
    detail: '6-month PDF statement',
    iconColor: '#3B82F6',
    iconBg: 'rgba(59,130,246,0.1)',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Automated Analysis',
    description:
      'SanityScan analyzes transaction behaviour and identifies underwriting concerns — average daily balance, inflow patterns, cheque returns, cash deposits, and inter-account transfers.',
    detail: 'AI-powered detection',
    iconColor: '#F59E0B',
    iconBg: 'rgba(245,158,11,0.1)',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Receive Actionable Report',
    description:
      'Download a structured PDF report highlighting detected issues, specific recommendations, an overall risk score, and an approval readiness indicator.',
    detail: 'PDF report ready',
    iconColor: '#16A34A',
    iconBg: 'rgba(22,163,74,0.1)',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      {/* Subtle section divider */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(22,163,74,0.04) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
            From Statement Upload to Actionable Report in Minutes.
          </h2>
          <p className="text-[#94A3B8] text-[17px] leading-relaxed">
            A simple three-step workflow designed for busy loan professionals.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(22,163,74,0.3) 20%, rgba(22,163,74,0.3) 80%, transparent 100%)' }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex flex-col gap-5">
                  {/* Mobile connecting arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-2" aria-hidden="true">
                      <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
                        <line x1="1" y1="0" x2="1" y2="32" stroke="rgba(22,163,74,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                      </svg>
                    </div>
                  )}

                  <div
                    className="rounded-2xl p-7 flex flex-col gap-5 hover-lift cursor-default h-full"
                    style={{
                      background: '#0C2340',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {/* Step number + icon */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: step.iconBg, border: `1px solid ${step.iconColor}22` }}
                      >
                        <Icon size={20} style={{ color: step.iconColor }} />
                      </div>
                      <span
                        className="text-[11px] font-bold tracking-widest"
                        style={{ color: step.iconColor, opacity: 0.6 }}
                      >
                        STEP {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground text-[17px] mb-3">{step.title}</h3>
                      <p className="text-[#64748B] text-[14px] leading-relaxed">{step.description}</p>
                    </div>

                    {/* Detail tag */}
                    <div className="mt-auto">
                      <span
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full"
                        style={{ background: step.iconBg, color: step.iconColor }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.iconColor }} />
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
