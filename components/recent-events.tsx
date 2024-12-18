import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentEvents() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Events</CardTitle>
        <CardDescription>Key events affecting refugees in Malawi (2022-2024)</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>November 22, 2022: Unrest at Dzaleka Camp over distribution of aid materials</li>
          <li>December 14, 2022: Grenade attack on Burundian community leader Butoyi Fideli</li>
          <li>May 17, 2023: Forced relocation of urban refugees back to Dzaleka Camp</li>
          <li>July 17, 2024: Malawi Defence Force raid on Dzaleka Camp targeting suspected human traffickers</li>
          <li>October 12, 2024: Second widespread raid on Dzaleka Camp, resulting in arrests and injuries</li>
        </ul>
      </CardContent>
    </Card>
  )
}

