'use client'

import React from 'react'
import { Chrono } from 'react-chrono'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const timelineItems = [
  {
    title: '1977',
    cardTitle: 'Luwani Camp Opens',
    cardSubtitle: 'Hosts Mozambican refugees',
    cardDetailedText: 'Luwani Camp was opened to host Mozambican refugees during the civil war. It later hosted refugees from other nationalities until its closure in 2007.'
  },
  {
    title: '1989',
    cardTitle: 'Refugee Act Enacted',
    cardSubtitle: 'Legal framework established',
    cardDetailedText: 'Malawi ratified the UN Refugee Convention and enacted the Refugee Act, establishing a legal framework for refugee protection.'
  },
  {
    title: '1994',
    cardTitle: 'Dzaleka Camp Opens',
    cardSubtitle: 'Repurposed political prison',
    cardDetailedText: 'Dzaleka, originally a political prison, was repurposed as a refugee camp to accommodate the growing number of asylum seekers from Rwanda and Burundi after the Rwandan genocide.'
  },
  {
    title: '2007',
    cardTitle: 'Luwani Camp Closes',
    cardSubtitle: 'End of an era',
    cardDetailedText: 'Luwani Camp, which had been hosting refugees since 1977, was officially closed.'
  },
  {
    title: '2018',
    cardTitle: 'CRRF Adoption',
    cardSubtitle: 'New framework signed',
    cardDetailedText: 'Malawi signed to adopt the Comprehensive Refugee Response Framework (CRRF) under the New York Declaration.'
  },
  {
    title: '2023',
    cardTitle: 'Forced Re-encampment',
    cardSubtitle: 'Urban refugees relocated',
    cardDetailedText: 'Malawi\'s government began forcibly relocating refugees and asylum seekers from urban and rural areas back to Dzaleka Refugee Camp.'
  },
  {
    title: '2024',
    cardTitle: 'Current Situation',
    cardSubtitle: 'Overcrowding in Dzaleka',
    cardDetailedText: 'Dzaleka\'s population swelled to over 60,000 people, far exceeding its original capacity of 10,000 to 12,000 refugees.'
  }
]

export function InteractiveTimeline() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interactive Timeline</CardTitle>
        <CardDescription>Key events in Malawi's refugee history</CardDescription>
      </CardHeader>
      <CardContent className="h-[600px]">
        <Chrono
          items={timelineItems}
          mode="VERTICAL_ALTERNATING"
          cardHeight={200}
          slideShow
          slideItemDuration={4500}
          theme={{
            primary: 'hsl(var(--primary))',
            secondary: 'hsl(var(--secondary))',
            cardBgColor: 'hsl(var(--card))',
            cardForeColor: 'hsl(var(--card-foreground))',
            titleColor: 'hsl(var(--primary))',
          }}
        />
      </CardContent>
    </Card>
  )
}

