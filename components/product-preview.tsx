'use client'

import { AlertTriangle, CheckCircle, Info, Clock, TrendingUp, TrendingDown, FileText } from 'lucide-react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, Tooltip,
  ResponsiveContainer,
} from 'recharts'

const balanceTrend = [
  { d: 'W1', v: 162000 },
  { d: 'W2', v: 134000 },
  { d: 'W3', v: 118000 },
  { d: 'W4', v: 93000 },
  { d: 'W5', v: 107000 },
  { d: 'W6', v: 79000 },
]

const cashflow = [
  { m: 'Jan', c: 210000, d: 185000 },
  { m: 'Feb', c: 195000, d: 201000 },
  { m: 'Mar', c: 228000, d: 197000 },
  { m: 'Apr', c: 174000, d: 189000 },
  { m: 'May', c: 153000, d: 167000 },
  { m: 'Jun', c: 198000, d: 181000 },
]

const issues = [
  {
    severity: 'high' as const,
    code: 'UR-001',
    label: 'Low Average Daily Balance',
    detail: 'ADB of ₹44,200 is significantly below the ₹80,000+ threshold typically required for this loan size. Increases the probability of rejection during underwriting.',
  },
  {
    severity: 'high' as const,
    code: 'UR-002',
    label: 'Cheque Returns Detected',
    detail: '2 cheque returns within the last 90 days (April 14, May 3). Most lenders treat any return in the past 6 months as a negative underwriting signal.',
  },
  {
    severity: 'medium' as const,
    code: 'UR-003',
    label: 'Circular Transaction Pattern',
    detail: '14 inter-account transfer instances detected between potentially linked accounts. Pattern may indicate fund rotation rather than genuine business activity.',
  },
  {
    severity: 'medium' as const,
    code: 'UR-004',
    label: 'High Cash Deposit Ratio',
    detail: '38% of total credits are cash-based. Manual underwriters routinely flag cash-heavy accounts for additional documentation and scrutiny.',
  },
  {
    severity: 'low' as const,
    code: 'UR-005',
    label: 'Negative Balance — 3 Days',
    detail: 'Account dipped below zero on 3 separate days in the review period. Minor concern at this frequency, but worth monitoring.',
  },
]

const recommendations = [
  { icon: TrendingUp, text: 'Maintain a minimum Average Daily Balance of ₹80,000 for the next 18 days before submitting the application.' },
  { icon: Clock, text: 'Delay application submission by approximately two weeks to allow the balance trend to recover.' },
  { icon: AlertTriangle, text: 'Avoid inter-account transfers in the 30 days leading up to the application date.' },
  { icon: CheckCircle, text: 'Shift cash-based transactions to digital channels where possible to reduce the cash deposit ratio.' },
  { icon: FileText, text: 'Prepare a brief written explanation for the two cheque returns for lender documentation.' },
]

const timeline = [
  { week: 'Days 1–7', action: 'Stabilise daily balance above ₹80,000. Avoid non-essential outflows.' },
  { week: 'Days 8–14', action: 'Continue balance maintenance. Avoid inter-account transfers entirely.' },
  { week: 'Days 15–18', action: 'Confirm ADB has been consistently above ₹80,000. Review transaction history.' },
  { week: 'Day 18+', action: 'Application ready. Proceed to submission with updated statement.' },
]

const severityConfig = {
  high: { label: 'High Risk', color: '#EF4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.18)', icon: AlertTriangle },
  medium: { label: 'Moderate', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)', icon: Info },
  low: { label: 'Low', color: '#16A34A', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.18)', icon: CheckCircle },
}

function SeverityBadge({ s }: { s: 'high' | 'medium' | 'low' }) {
  const c = severityConfig[s]
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
      style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
    >
      {c.label}
    </span>
  )
}

export function ProductPreview() {
  return (
    <section id="product-preview" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[12px] uppercase tracking-widest text-brand font-semibold mb-4">
            Sample Report
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-balance text-foreground mb-4">
            Built to Look Like It Belongs on a Lender&apos;s Desk.
          </h2>
          <p className="text-[#94A3B8] text-[17px] leading-relaxed">
            Every report is structured, annotated, and ready to act on — before the application is filed.
          </p>
        </div>

        {/* Report wrapper */}
        <div
          className="rounded-2xl overflow-hidden mx-auto"
          style={{
            background: '#091E38',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.55)',
            maxWidth: 960,
          }}
        >
          {/* Report document header */}
          <div
            className="px-7 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            style={{ background: '#0F2847', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span className="text-[10px] uppercase tracking-widest text-brand font-semibold">SanityScan — Pre-Submission Risk Report</span>
              </div>
              <p className="text-foreground font-bold text-[15px]">Bank Statement Risk Analysis</p>
              <p className="text-[#64748B] text-[11px] mt-0.5">6-Month Review Period &nbsp;•&nbsp; Jan 2024 – Jun 2024</p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="text-[10px] text-[#64748B]">Report ID</p>
              <p className="text-[12px] text-foreground font-mono font-semibold">SS-2024-0847</p>
              <p className="text-[10px] text-[#64748B] mt-1">Generated: 27 Jun 2024</p>
              <p className="text-[10px] text-[#64748B]">For professional use only</p>
            </div>
          </div>

          <div className="p-5 sm:p-7 flex flex-col gap-5">

            {/* Executive Summary + Score row */}
            <div className="grid md:grid-cols-[1fr_160px] gap-5 items-start">
              {/* Summary */}
              <div
                className="rounded-xl p-5"
                style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium mb-2.5">Executive Summary</p>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                  The account demonstrates a declining Average Daily Balance trend across the 6-month review
                  period, with an ADB of ₹44,200 against a recommended threshold of ₹80,000. Two cheque
                  return incidents were recorded in April and May. Inter-account transfer frequency suggests
                  potential circular movement of funds. Cash deposits constitute 38% of total inflows.
                  Based on these findings, the account is <span className="text-amber-400 font-medium">not currently recommended for submission</span>.
                  A structured improvement plan is outlined below.
                </p>
              </div>

              {/* Risk Score dial */}
              <div
                className="rounded-xl p-5 text-center flex flex-col items-center gap-3"
                style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium">Risk Score</p>
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                    <circle cx="40" cy="40" r="32" fill="none" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={`${(78 / 100) * 201.1} 201.1`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[22px] font-bold text-foreground leading-none">78</span>
                    <span className="text-[9px] text-[#64748B]">/100</span>
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded-full"
                  style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.22)' }}
                >
                  <span className="text-[10px] font-bold text-amber-400">Moderate Risk</span>
                </div>
                <div className="w-full">
                  <p className="text-[9px] text-[#64748B] mb-1.5">Approval Readiness</p>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '52%', background: 'linear-gradient(90deg, #F59E0B, #16A34A)' }} />
                  </div>
                  <p className="text-[9px] text-amber-400 font-medium mt-1">Improving — 52%</p>
                </div>
              </div>
            </div>

            {/* Charts row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Balance trend */}
              <div
                className="rounded-xl p-5"
                style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium">Daily Balance Trend</p>
                  <span className="flex items-center gap-1 text-[9px] text-red-400">
                    <TrendingDown size={9} /> Declining
                  </span>
                </div>
                <div className="h-[70px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={balanceTrend} margin={{ top: 2, right: 2, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="ppBalGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="v" stroke="#EF4444" strokeWidth={1.5} fill="url(#ppBalGrad)" dot={false} />
                      <Tooltip
                        contentStyle={{ background: '#071A2D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 9, padding: '3px 8px' }}
                        itemStyle={{ color: '#F0F4F8' }}
                        labelStyle={{ color: '#64748B' }}
                        formatter={(v) => [`₹${(Number(v) / 1000).toFixed(0)}K`, 'Balance']}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Cash flow */}
              <div
                className="rounded-xl p-5"
                style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium">Monthly Cash Flow</p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[9px] text-[#64748B]">
                      <span className="w-2 h-1.5 rounded-sm inline-block bg-brand" />Credits
                    </span>
                    <span className="flex items-center gap-1 text-[9px] text-[#64748B]">
                      <span className="w-2 h-1.5 rounded-sm inline-block opacity-60" style={{ background: '#EF4444' }} />Debits
                    </span>
                  </div>
                </div>
                <div className="h-[70px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cashflow} barGap={1} margin={{ top: 2, right: 2, bottom: 0, left: 0 }}>
                      <XAxis dataKey="m" tick={{ fill: '#475569', fontSize: 8 }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ background: '#071A2D', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 9, padding: '3px 8px' }}
                        itemStyle={{ color: '#F0F4F8' }}
                        labelStyle={{ color: '#64748B' }}
                        formatter={(v) => [`₹${(Number(v) / 1000).toFixed(0)}K`]}
                      />
                      <Bar dataKey="c" fill="#16A34A" radius={[2, 2, 0, 0]} fillOpacity={0.85} />
                      <Bar dataKey="d" fill="#EF4444" radius={[2, 2, 0, 0]} fillOpacity={0.6} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Detected Issues */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium mb-3">Detected Issues</p>
              <div className="flex flex-col gap-2">
                {issues.map((issue) => {
                  const cfg = severityConfig[issue.severity]
                  const Icon = cfg.icon
                  return (
                    <div
                      key={issue.code}
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
                    >
                      <Icon size={13} style={{ color: cfg.color }} className="mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[12px] font-semibold text-foreground">{issue.label}</span>
                          <SeverityBadge s={issue.severity} />
                          <span className="text-[9px] font-mono text-[#64748B] ml-auto">{issue.code}</span>
                        </div>
                        <p className="text-[11px] text-[#94A3B8] leading-relaxed">{issue.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recommendations + Timeline row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Recommendations */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(22,163,74,0.18)' }}
              >
                <div className="flex items-center gap-2 mb-3.5">
                  <CheckCircle size={13} className="text-brand" />
                  <p className="text-[10px] uppercase tracking-widest text-brand font-semibold">Recommendations</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {recommendations.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Icon size={11} className="text-brand mt-0.5 shrink-0" />
                      <span className="text-[12px] text-[#94A3B8] leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div
                className="rounded-xl p-5"
                style={{ background: '#0F2847', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-3.5">
                  <Clock size={13} className="text-[#94A3B8]" />
                  <p className="text-[10px] uppercase tracking-widest text-[#64748B] font-medium">Timeline of Recommended Actions</p>
                </div>
                <div className="flex flex-col gap-0">
                  {timeline.map((t, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 rounded-full mt-1 shrink-0"
                          style={{ background: i === timeline.length - 1 ? '#16A34A' : '#F59E0B' }}
                        />
                        {i < timeline.length - 1 && (
                          <div className="w-px flex-1 bg-white/8 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-[10px] font-semibold text-[#64748B] mb-0.5">{t.week}</p>
                        <p className="text-[11px] text-[#94A3B8] leading-relaxed">{t.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Report footer */}
          <div
            className="px-7 py-3.5 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}
          >
            <span className="text-[10px] text-[#475569]">Generated by SanityScan &mdash; Pre-Submission Intelligence</span>
            <span className="text-[10px] text-[#475569]">Confidential &mdash; For Professional Use Only</span>
          </div>
        </div>
      </div>
    </section>
  )
}
