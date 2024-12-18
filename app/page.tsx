'use client'

import { ChartRefugeePopulation } from '@/components/chart-refugee-population'
import { ChartRegionalRefugeeData } from '@/components/chart-regional-refugee-data'
import { ChartRefugeeIDPPopulation } from '@/components/chart-refugee-idp-population'
import { ChartDzalekaNationalities } from '@/components/chart-dzaleka-nationalities'
import { DzalekaInfo } from '@/components/dzaleka-info'
import { PurposeAndScope } from '@/components/purpose-and-scope'
import { HistoricalBackground } from '@/components/historical-background'
import { KeyTerminology } from '@/components/key-terminology'
import { RecentEvents } from '@/components/recent-events'
import { DebunkingMyths } from '@/components/debunking-myths'
import { CorruptionAndCriminality } from '@/components/corruption-and-criminality'
import { Sources } from '@/components/sources'
import { FAQSection } from '@/components/faq-section'
import { InteractiveTimeline } from '@/components/interactive-timeline'
import { SearchBar } from '@/components/search-bar'
import { SocialShare } from '@/components/social-share'
import { Analytics } from '@/components/analytics'
import { useEffect } from 'react'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  useEffect(() => {
    const handleSearch = (searchTerm: string) => {
      window.dispatchEvent(new CustomEvent('search', { detail: { searchTerm } }))
    }

    const handleShare = (platform: string) => {
      window.dispatchEvent(new CustomEvent('share', { detail: { platform } }))
    }

    document.addEventListener('search', (e: CustomEvent) => handleSearch(e.detail.searchTerm))
    document.addEventListener('share', (e: CustomEvent) => handleShare(e.detail.platform))

    return () => {
      document.removeEventListener('search', (e: CustomEvent) => handleSearch(e.detail.searchTerm))
      document.removeEventListener('share', (e: CustomEvent) => handleShare(e.detail.platform))
    }
  }, [])

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Analytics />
      <ScrollToTop />
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Dzaleka Refugee Information Hub</h1>
        <SearchBar />
      </div>
      <div className="flex justify-end mb-6">
        <div className="flex items-center space-x-4">
          <SocialShare />
          <ThemeToggle />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <PurposeAndScope />
        </div>
        <div className="lg:col-span-2">
          <InteractiveTimeline />
        </div>
        <HistoricalBackground />
        <KeyTerminology />
        <ChartRefugeePopulation />
        <ChartRegionalRefugeeData />
        <ChartRefugeeIDPPopulation />
        <ChartDzalekaNationalities />
        <DzalekaInfo />
        <RecentEvents />
        <DebunkingMyths />
        <CorruptionAndCriminality />
        <div className="lg:col-span-2">
          <FAQSection />
        </div>
        <div className="lg:col-span-2">
          <Sources />
        </div>
      </div>
    </div>
  )
}

