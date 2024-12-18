import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CorruptionAndCriminality() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Corruption and Criminality</CardTitle>
        <CardDescription>Challenges faced in refugee management</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reports of bribery and exploitation in refugee services</li>
          <li>Fraudulent schemes swindling refugees of millions of Kwacha for false resettlement promises</li>
          <li>Allegations of sexual exploitation in the Refugee Status Determination process</li>
          <li>Corruption during forced re-encampment, including charges for certification letters and housing</li>
          <li>Human trafficking networks operating within Dzaleka Refugee Camp</li>
          <li>Lack of proper investigation and prosecution of criminal activities</li>
        </ul>
      </CardContent>
    </Card>
  )
}

