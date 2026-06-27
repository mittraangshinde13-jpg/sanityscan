'use client'

import { X, Check } from 'lucide-react'

const traditional = [
  'Manual scrolling through transaction rows',
  'Experience-based intuition, not structure',
  'No standard review process or checklist',
  'Hidden issues routinely missed',
  'Client informed of problems after rejection',
  'No documentation trail for the review',
]

const sanityscan = [
  'Structured, systematic review every time',
  'Consistent analysis across every file',
  'Professional recommendations, not guesswork',
  'Potential issues highlighted before submission',
  'Better client conversations before the bank sees the file',
  'Clean report output for your own records',
]

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(22,163,74,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">
            Why SanityScan
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
            From Guesswork to Structured Review.
          </h2>
          <p className="text-[#94A3B8] text-[17px] leading-relaxed">
            How most brokers review bank statements today — versus the SanityScan workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Traditional */}
          <div
            className="rounded-2xl p-7"
            style={{ background: '#091E38', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <X size={15} className="text-[#64748B]" />
              </div>
              <div>
                <p className="text-[10px] text-[#64748B] uppercase tracking-widest mb-0.5">Traditional Workflow</p>
                <p className="text-foreground font-semibold text-[14px]">Without SanityScan</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.15)' }}
                  >
                    <X size={9} className="text-red-400" />
                  </div>
                  <span className="text-[13px] text-[#94A3B8] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SanityScan */}
          <div
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{ background: 'rgba(22,163,74,0.05)', border: '1px solid rgba(22,163,74,0.18)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.55), transparent)' }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.25)' }}
              >
                <Check size={15} className="text-brand" />
              </div>
              <div>
                <p className="text-[10px] text-brand uppercase tracking-widest mb-0.5 font-medium">SanityScan Workflow</p>
                <p className="text-foreground font-semibold text-[14px]">With SanityScan</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {sanityscan.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(22,163,74,0.12)', border: '1px solid rgba(22,163,74,0.2)' }}
                  >
                    <Check size={9} className="text-brand" />
                  </div>
                  <span className="text-[13px] text-[#94A3B8] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
