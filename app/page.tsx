'use client'

import { useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorks } from '@/components/how-it-works'
import { ProductPreview } from '@/components/product-preview'
import { ComparisonSection } from '@/components/comparison-section'
import { ProfessionalsSection } from '@/components/professionals-section'
import { EarlyAccessForm } from '@/components/early-access-form'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  const formRef = useRef<HTMLElement>(null)

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onRequestAccess={scrollToForm} />
      <main>
        <HeroSection onRequestAccess={scrollToForm} />
        <FeaturesSection />
        <HowItWorks />
        <ProductPreview />
        <ComparisonSection />
        <ProfessionalsSection />
        <EarlyAccessForm formRef={formRef} />
        <FAQSection />
      </main>
      <Footer onRequestAccess={scrollToForm} />
    </div>
  )
}
