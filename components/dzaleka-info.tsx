import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function DzalekaInfo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dzaleka Refugee Camp Overview</CardTitle>
        <CardDescription>Key information about Dzaleka Refugee Camp</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>Established in 1994 in response to the Rwandan genocide and conflicts in Burundi and DRC</li>
          <li>Originally designed to host 10,000 to 12,000 refugees</li>
          <li>Current population: Over 60,000 (as of 2024)</li>
          <li>Located in Dowa District, about 45km north of Lilongwe, Malawi's capital</li>
          <li>Main nationalities: Congolese, Burundians, Rwandans, Somalis, and Ethiopians</li>
          <li>Faces challenges including overcrowding, limited resources, and restricted movement</li>
          <li>Hosts various educational institutions, including primary and secondary schools</li>
          <li>Home to entrepreneurial activities and small businesses run by refugees</li>
          <li>Supported by UNHCR, WFP, and various NGOs providing essential services</li>
        </ul>
      </CardContent>
    </Card>
  )
}

