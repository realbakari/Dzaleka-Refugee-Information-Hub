import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EconomicImpact() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Economic Impact of Refugees</CardTitle>
        <CardDescription>Contributions to Malawi's economy</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Despite restrictive laws, refugees have made significant contributions to Malawi's economy:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Entrepreneurship:</span> Refugees have transformed local commerce by establishing shops known for extended hours, reliability, and affordability.
          </li>
          <li>
            <span className="font-semibold">Agriculture:</span> Partnerships between refugees and Malawian landowners in Dowa District have revolutionized tomato farming and boosted the value of soya and groundnuts.
          </li>
          <li>
            <span className="font-semibold">Job Creation:</span> Refugee-led initiatives have created sustainable, long-term work for thousands of Malawians.
          </li>
          <li>
            <span className="font-semibold">Skills Transfer:</span> In the past, refugees with teaching backgrounds have filled essential gaps in science, math, and French courses in Malawian schools.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

