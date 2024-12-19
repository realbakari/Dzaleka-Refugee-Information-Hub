import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CorruptionAndCriminality() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Corruption and Criminality</CardTitle>
        <CardDescription>Challenges faced in refugee management</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Corruption and criminality pose significant challenges to refugee management in Malawi:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Widespread reports of bribery and exploitation in refugee services</li>
          <li>Fraudulent schemes swindling refugees of millions of Kwacha for false resettlement promises</li>
          <li>Allegations of sexual exploitation in the Refugee Status Determination process</li>
          <li>Corruption during forced re-encampment, including charges for certification letters and housing</li>
          <li>Human trafficking networks operating within Dzaleka Refugee Camp</li>
          <li>Lack of proper investigation and prosecution of criminal activities</li>
        </ul>
        <p className="mt-4">These issues exacerbate the already challenging conditions in refugee camps and undermine efforts to support refugees in achieving self-reliance and dignity.</p>
      </CardContent>
    </Card>
  )
}

