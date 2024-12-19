'use client'

import { useEffect } from 'react'

// Define custom event types
interface SearchEventDetail {
  searchTerm: string
}

interface ShareEventDetail {
  platform: string
}

declare global {
  interface WindowEventMap {
    'search': CustomEvent<SearchEventDetail>
    'share': CustomEvent<ShareEventDetail>
  }
}

export function Analytics() {
  useEffect(() => {
    const trackPageView = () => {
      console.log('Page view:', window.location.pathname)
    }

    const trackSearch = (searchTerm: string) => {
      console.log('Search term:', searchTerm)
    }

    const trackShare = (platform: string) => {
      console.log('Shared on:', platform)
    }

    // Track initial page view
    trackPageView()

    // Set up event listeners with correct typing
    const handleSearch = (e: CustomEvent<SearchEventDetail>) => trackSearch(e.detail.searchTerm)
    const handleShare = (e: CustomEvent<ShareEventDetail>) => trackShare(e.detail.platform)

    window.addEventListener('search', handleSearch as EventListener)
    window.addEventListener('share', handleShare as EventListener)

    // Clean up
    return () => {
      window.removeEventListener('search', handleSearch as EventListener)
      window.removeEventListener('share', handleShare as EventListener)
    }
  }, [])

  return null
}