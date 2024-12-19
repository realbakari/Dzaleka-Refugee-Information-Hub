import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Stakeholders() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Key Stakeholders</CardTitle>
        <CardDescription>Organizations and groups involved in refugee management</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Government of Malawi</h3>
            <p>Responsible for policy development, regulation, and enforcement of refugee laws.</p>
          </li>
          <li>
            <h3 className="font-semibold">UNHCR</h3>
            <p>Provides protection, assistance, and coordinates humanitarian efforts for refugees.</p>
          </li>
          <li>
            <h3 className="font-semibold">Implementing Partners</h3>
            <p>Organizations contracted by UNHCR to deliver services directly to refugees.</p>
          </li>
          <li>
            <h3 className="font-semibold">Cooperating Partners</h3>
            <p>Organizations that focus on specific aspects of refugee management, approved by the Ministry of Homeland Security.</p>
          </li>
          <li>
            <h3 className="font-semibold">Community-Based Organizations (CBOs)</h3>
            <p>Refugee-led organizations providing essential services and embodying self-reliance.</p>
          </li>
          <li>
            <h3 className="font-semibold">Donors</h3>
            <p>Governments, individuals, and organizations providing funding for refugee assistance programs.</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

