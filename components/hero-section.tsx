'use client'

import { ArrowRight, AlertTriangle, TrendingUp, TrendingDown, ShieldCheck, CheckCircle } from 'lucide-react'
import {
  AreaChart, Area, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts'

const balanceData = [
  { day: '01', balance: 148000 },
  { day: '03', balance: 122000 },
  { day: '05', balance: 131000 },
  { day: '07', balance: 89000 },
  { day: '09', balance: 104000 },
  { day: '11', balance: 73000 },
  { day: '13', balance: 58000 },
  { day: '15', balance: 82000 },
  { day: '17', balance: 61000 },
  { day: '19', balance: 47000 },
  { day: '21', balance: 69000 },
  { day: '23', balance: 53000 },
  { day: '25', balance: 44000 },
  { day: '27', balance: 38000 },
]

const cashflowData = [
  { month: 'Jan', credit: 195000, debit: 171000 },
  { month: 'Feb', credit: 221000, debit: 208000 },
  { month: 'Mar', credit: 168000, debit: 179000 },
  { month: 'Apr', credit: 204000, debit: 181000 },
  { month: 'May', credit: 148000, debit: 162000 },
  { month: 'Jun', credit: 191000, debit: 176000 },
]

const metrics = [
  { label: 'Avg Daily Balance', value: '₹44,200', sub: 'Recommended: ₹80K+', status: 'high' },
  { label: 'Cash Flow Stability', value: '61%', sub: 'Moderate volatility', status: 'medium' },
  { label: 'Cheque Bounces', value: '2', sub: 'In last 90 days', status: 'high' },
  { label: 'EMI Servicing', value: 'Regular', sub: 'No delays detected', status: 'good' },
  { label: 'Neg. Balance Days', value: '3', sub: 'In review period', status: 'medium' },
  { label: 'Circular Transfers', value: 'Detected', sub: '14 flagged instances', status: 'high' },
]

const statusMap = {
  high: { dot: '#EF4444', text: '#EF4444', bg: 'rgba(239,68,68,0.08)' },
  medium: { dot: '#F59E0B', text: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  good: { dot: '#16A34A', text: '#16A34A', bg: 'rgba(22,163,74,0.08)' },
}

interface HeroSectionProps {
  onRequestAccess: () => void
}

export function HeroSection({ onRequestAccess }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Subtle background radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 50% at 75% 20%, rgba(22,163,74,0.07) 0%, transparent 70%),
                            radial-gradient(ellipse 40% 40% at 15% 85%, rgba(22,163,74,0.04) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 xl:gap-20 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-7">
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand/30 bg-brand/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[11px] font-medium text-brand tracking-wide">
                  Currently validating across India
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <ShieldCheck size={11} className="text-[#94A3B8]" />
                <span className="text-[11px] font-medium text-[#94A3B8]">Built with Industry Feedback</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-bold leading-[1.08] tracking-tight text-balance text-foreground">
                Know What Needs Fixing{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Before the Bank
                </span>{' '}
                Reviews the File.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-[17px] leading-relaxed text-[#94A3B8] max-w-[500px]">
              SanityScan helps loan brokers identify potential underwriting risks hidden inside
              bank statements, providing actionable recommendations before a loan application
              is submitted.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRequestAccess}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white text-[15px] font-semibold transition-all duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-900/30 glow-green"
              >
                Request Early Access
                <ArrowRight size={16} />
              </button>
              <a
                href="#product-preview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-[#94A3B8] text-[15px] font-medium transition-all duration-200 hover:bg-white/[0.07] hover:text-foreground hover:border-white/20"
              >
                View Sample Report
              </a>
            </div>

            {/* Trust footnote */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={13} className="text-brand" />
                <span className="text-[13px] text-[#64748B]">
                  Currently validating with Loan Brokers, DSAs and Chartered Accountants across India.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={13} className="text-brand" />
                <span className="text-[13px] text-[#64748B]">Limited Early Beta Access.</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 55% 40%, rgba(22,163,74,0.09) 0%, transparent 65%)' }}
              aria-hidden="true"
            />

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: '#091E38',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* Titlebar */}
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[12px] font-semibold text-foreground ml-1">Bank Statement Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-[#64748B] font-mono tracking-wide">REF-2024-0847</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide"
                    style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}
                  >
                    Under Review
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">

                {/* Risk score + readiness row */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Risk score */}
                  <div
                    className="col-span-1 rounded-xl p-4 flex flex-col justify-between"
                    style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <p className="text-[9px] uppercase tracking-widest text-[#64748B] font-medium">Risk Score</p>
                    <div className="relative w-16 h-16 mx-auto my-1.5">
                      <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                        <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                        <circle
                          cx="32" cy="32" r="26"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeDasharray={`${(78 / 100) * 163.4} 163.4`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[18px] font-bold text-foreground leading-none">78</span>
                        <span className="text-[8px] text-[#64748B]">/100</span>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-center gap-1 px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}
                    >
                      <div className="w-1 h-1 rounded-full bg-amber-400" />
                      <span className="text-[9px] font-semibold text-amber-400">Moderate</span>
                    </div>
                  </div>

                  {/* Metrics 2x3 grid */}
                  <div className="col-span-2 grid grid-cols-2 gap-2">
                    {metrics.map((m) => {
                      const s = statusMap[m.status as keyof typeof statusMap]
                      return (
                        <div
                          key={m.label}
                          className="rounded-lg px-3 py-2.5 flex flex-col gap-0.5"
                          style={{ background: s.bg, border: `1px solid ${s.dot}22` }}
                        >
                          <p className="text-[8.5px] text-[#64748B] uppercase tracking-wide leading-none mb-1">{m.label}</p>
                          <p className="text-[13px] font-bold leading-none" style={{ color: s.text }}>{m.value}</p>
                          <p className="text-[8.5px] text-[#64748B] leading-snug">{m.sub}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Daily Balance Trend */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex justify-between items-center mb-2.5">
                    <p className="text-[9px] uppercase tracking-widest text-[#64748B] font-medium">Daily Balance Trend (Jun)</p>
                    <span className="flex items-center gap-1 text-[9px] text-red-400">
                      <TrendingDown size={9} />
                      Declining
                    </span>
                  </div>
                  <div className="h-[58px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={balanceData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <defs>
                          <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EF4444" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="balance" stroke="#EF4444" strokeWidth={1.5} fill="url(#balGrad)" dot={false} />
                        <Tooltip
                          contentStyle={{ background: '#071A2D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 9, padding: '4px 8px' }}
                          itemStyle={{ color: '#F0F4F8' }}
                          labelStyle={{ color: '#64748B' }}
                          formatter={(v) => [`₹${(Number(v) / 1000).toFixed(0)}K`, 'Balance']}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Monthly Credits vs Debits */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex justify-between items-center mb-2.5">
                    <p className="text-[9px] uppercase tracking-widest text-[#64748B] font-medium">Monthly Credits vs Debits</p>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[9px] text-[#64748B]">
                        <span className="w-2 h-1.5 rounded-sm inline-block" style={{ background: '#16A34A' }} />
                        Credits
                      </span>
                      <span className="flex items-center gap-1 text-[9px] text-[#64748B]">
                        <span className="w-2 h-1.5 rounded-sm inline-block" style={{ background: '#EF4444', opacity: 0.7 }} />
                        Debits
                      </span>
                    </div>
                  </div>
                  <div className="h-[52px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={cashflowData} barGap={1} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 8 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ background: '#071A2D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 9, padding: '4px 8px' }}
                          itemStyle={{ color: '#F0F4F8' }}
                          labelStyle={{ color: '#64748B' }}
                          formatter={(v) => [`₹${(Number(v) / 1000).toFixed(0)}K`]}
                        />
                        <Bar dataKey="credit" fill="#16A34A" radius={[2, 2, 0, 0]} fillOpacity={0.85} />
                        <Bar dataKey="debit" fill="#EF4444" radius={[2, 2, 0, 0]} fillOpacity={0.6} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recommendation */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(22,163,74,0.07)', border: '1px solid rgba(22,163,74,0.18)' }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-4 h-4 rounded-full bg-brand/20 flex items-center justify-center">
                      <TrendingUp size={9} className="text-brand" />
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-brand font-semibold">Recommendations</p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      'Maintain Average Daily Balance above ₹80,000 for 18 days before submitting.',
                      'Avoid frequent transfers between linked accounts in the next 30 days.',
                      'Delay submission by approximately two weeks.',
                    ].map((rec) => (
                      <li key={rec} className="flex items-start gap-2 text-[10px] text-[#94A3B8] leading-snug">
                        <span className="text-brand mt-0.5 shrink-0">→</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approval Readiness bar */}
                <div
                  className="rounded-xl px-4 py-3 flex items-center justify-between gap-4"
                  style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9px] uppercase tracking-widest text-[#64748B] font-medium">Approval Readiness</span>
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: '52%', background: 'linear-gradient(90deg, #F59E0B 0%, #16A34A 100%)' }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400 shrink-0">Improving</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
