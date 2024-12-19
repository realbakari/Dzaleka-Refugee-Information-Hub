'use client'

import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import type { FuseResult } from 'fuse.js'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, Loader2 } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useDebounce } from '@/hooks/use-debounce'

interface SearchItem {
  title: string;
  content: string;
}
// Expanded searchable content
const searchData = [
  { title: "Refugee Population", content: "Refugees represent 0.26% of the total population in Malawi." },
  { title: "Dzaleka Camp", content: "Dzaleka Refugee Camp hosts over 60,000 refugees as of 2024, far exceeding its original capacity of 10,000 to 12,000 people." },
  { title: "Refugee Act", content: "Malawi enacted the Refugee Act in 1989, establishing a legal framework for refugee protection." },
  { title: "Recent Events", content: "In 2023, Malawi's government began forcibly relocating urban refugees back to Dzaleka Camp." },
  { title: "Historical Background", content: "Luwani Camp opened in 1977 to host Mozambican refugees during the civil war." },
  { title: "CRRF Adoption", content: "In 2018, Malawi signed to adopt the Comprehensive Refugee Response Framework (CRRF) under the New York Declaration." },
  { title: "Refugee Rights", content: "Refugees in Malawi face restrictions on movement, employment, and access to public services." },
  { title: "Education in Dzaleka", content: "Dzaleka Camp has several primary and secondary schools, but they are often overcrowded and under-resourced." },
  { title: "Healthcare", content: "The camp has one clinic operated by the Ministry of Health, serving over 70,000 people including surrounding communities." },
  { title: "Corruption Issues", content: "There have been reports of bribery and exploitation in refugee services, including fraudulent resettlement schemes." },
  { title: "Human Trafficking", content: "Dzaleka Camp has been identified as a hub for human trafficking operations, particularly targeting Ethiopian nationals." },
  { title: "Economic Impact", content: "Refugees have significantly impacted Malawi's entrepreneurship and food security sectors, despite restrictive laws." },
  { title: "Durable Solutions", content: "UNHCR outlines three durable solutions for refugees: integration, repatriation, and resettlement." },
  { title: "Convention Travel Documents", content: "Malawi has recently limited the issuance of Convention Travel Documents (CTDs) to refugees, impacting their mobility." },
]

const fuse = new Fuse(searchData, {
  keys: ['title', 'content'],
  threshold: 0.3,
})

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<FuseResult<SearchItem>[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true)
      setIsSearching(true)
      const results = fuse.search(debouncedSearchTerm)
      setSearchResults(results)
      setIsLoading(false)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }, [debouncedSearchTerm])

  const handleClearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
    setIsSearching(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="flex items-center bg-background border rounded-md focus-within:ring-2 focus-within:ring-primary">
        <Search className="h-4 w-4 text-muted-foreground ml-3" />
        <Input
          type="text"
          placeholder="Search information..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        {isSearching && (
          <Button
            variant="ghost"
            size="sm"
            className="h-full px-3 py-2 hover:bg-transparent"
            onClick={handleClearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {(searchResults.length > 0 || isLoading) && (
        <Card className="mt-2 absolute w-full z-10 shadow-lg">
          <CardContent className="p-0">
            <ScrollArea className="h-[300px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-[300px]">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              ) : (
                <ul className="divide-y">
                  {searchResults.map((result, index) => (
                    <li key={index} className="p-4 hover:bg-accent transition-colors duration-200">
                      <h3 className="font-semibold text-primary">{result.item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{result.item.content}</p>
                    </li>
                  ))}
                </ul>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

