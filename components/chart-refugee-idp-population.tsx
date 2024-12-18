'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { country: 'Malawi', refugees: 52000, idps: 0 },
  { country: 'Mozambique', refugees: 38000, idps: 946000 },
  { country: 'Tanzania', refugees: 248000, idps: 0 },
  { country: 'Zambia', refugees: 103000, idps: 0 },
  { country: 'Zimbabwe', refugees: 22000, idps: 0 },
]

export function ChartRefugeeIDPPopulation() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Refugee and IDP Populations (2024)</CardTitle>
        <CardDescription>Number of refugees and IDPs in different countries</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="refugees" fill="#8884d8" />
            <Bar dataKey="idps" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

