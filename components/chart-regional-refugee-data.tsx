'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { country: 'Malawi', percentage: 0.26 },
  { country: 'Mozambique', percentage: 0.12 },
  { country: 'Tanzania', percentage: 0.63 },
  { country: 'Zambia', percentage: 0.95 },
  { country: 'Zimbabwe', percentage: 0.35 },
]

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c']

export function ChartRegionalRefugeeData() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Regional Refugee Population Percentage (2024)</CardTitle>
        <CardDescription>Percentage of refugees in total population</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

