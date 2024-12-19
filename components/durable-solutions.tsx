import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function DurableSolutions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Durable Solutions</CardTitle>
        <CardDescription>Long-term solutions for refugees in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">The UNHCR outlines three durable solutions for refugees:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Integration:</span> The host country offers citizenship or legal, economic, and social inclusion to refugees. This is not currently provided for in Malawi's policy framework.
          </li>
          <li>
            <span className="font-semibold">Repatriation:</span> The refugee returns to their country of origin when it is deemed safe. By 2023, a growing number of Burundian refugees expressed a desire to return home.
          </li>
          <li>
            <span className="font-semibold">Resettlement:</span> Refugees are transferred from the asylum country to another state that agrees to admit them and grant permanent residence. Only individuals with formal refugee status are eligible, and globally, less than 1% of refugees are resettled each year.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

