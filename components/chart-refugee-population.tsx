'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { category: 'Refugees', population: 52000, color: 'hsl(var(--primary))' },
  { category: 'Other Residents', population: 19948000, color: 'hsl(var(--secondary))' },
]

export function ChartRefugeePopulation() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Refugee Population in Malawi (2024)</CardTitle>
        <CardDescription>Refugees represent 0.26% of the total population</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="category" type="category" width={120} />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

