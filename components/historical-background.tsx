import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function HistoricalBackground() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Historical Background</CardTitle>
        <CardDescription>Malawi's history of hosting refugees</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Luwani Camp opened in 1977 for Mozambican refugees, closed in 2007</li>
          <li>Dzaleka Camp, originally a political prison, repurposed in 1994 for refugees from Rwanda and Burundi</li>
          <li>Malawi hosted over one million Mozambican refugees during the 1980s and early 1990s</li>
          <li>Malawi ratified the UN Refugee Convention and enacted the Refugee Act in 1989</li>
          <li>Dzaleka's population has grown from 10,000-12,000 to over 60,000 by 2024</li>
          <li>Malawi has also experienced refugee outflows in the 1960s and 1970s due to political persecution</li>
        </ul>
      </CardContent>
    </Card>
  )
}

