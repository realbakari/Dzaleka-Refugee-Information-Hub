'use client'

import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { name: 'DRC', value: 40000 },
  { name: 'Burundi', value: 30000 },
  { name: 'Rwanda', value: 20000 },
  { name: 'Somalia', value: 5000 },
  { name: 'Ethiopia', value: 3000 },
  { name: 'Others', value: 2000 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export function ChartDzalekaNationalities() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nationalities in Dzaleka Refugee Camp</CardTitle>
        <CardDescription>Estimated breakdown of refugee nationalities (2024)</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

