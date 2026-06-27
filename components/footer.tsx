import { Mail } from 'lucide-react'
import Image from 'next/image'

function LinkedinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface FooterProps {
  onRequestAccess: () => void
}

export function Footer({ onRequestAccess }: FooterProps) {
  return (
    <footer
      className="py-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/sanityscan-logo.png"
                alt="SanityScan logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-foreground font-semibold text-[15px] tracking-tight">SanityScan</span>
            </div>
            <p className="text-[12px] text-[#64748B] max-w-xs leading-relaxed">
              Helping loan professionals identify bank statement risks before submission.
            </p>
          </div>

          {/* Links + social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-5">
              <a
                href="mailto:hello@sanityscan.in"
                className="flex items-center gap-1.5 text-[12px] text-[#64748B] hover:text-[#94A3B8] transition-colors"
                aria-label="Email SanityScan"
              >
                <Mail size={13} />
                hello@sanityscan.in
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[12px] text-[#64748B] hover:text-[#94A3B8] transition-colors"
                aria-label="SanityScan LinkedIn"
              >
                <LinkedinIcon size={13} />
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4 text-[12px] text-[#64748B]">
              <a href="#" className="hover:text-[#94A3B8] transition-colors">Privacy Policy</a>
              <button
                onClick={onRequestAccess}
                className="px-4 py-2 rounded-lg bg-brand/15 text-brand text-[12px] font-medium border border-brand/20 hover:bg-brand/25 transition-colors"
              >
                Request Beta Access
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-[11px] text-[#475569]">
            &copy; {new Date().getFullYear()} SanityScan. All rights reserved.
          </p>
          <p className="text-[11px] text-[#475569]">
            Currently in validation stage &mdash; not yet a live product.
          </p>
        </div>
      </div>
    </footer>
  )
}
