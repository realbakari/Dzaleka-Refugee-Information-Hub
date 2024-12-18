import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function KeyTerminology() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Key Terminology</CardTitle>
        <CardDescription>Understanding important refugee-related terms</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold">Asylum Seeker</dt>
            <dd>A person who has left their country of origin and applied for asylum in another country, but whose claim has not yet been decided.</dd>
          </div>
          <div>
            <dt className="font-semibold">Refugee</dt>
            <dd>A person whose asylum claim has been approved, resulting in official refugee status.</dd>
          </div>
          <div>
            <dt className="font-semibold">Stateless Person</dt>
            <dd>An individual not recognized as a national by any state under its law.</dd>
          </div>
          <div>
            <dt className="font-semibold">People of Concern (POCs)</dt>
            <dd>This category includes refugees, asylum seekers, and stateless persons.</dd>
          </div>
          <div>
            <dt className="font-semibold">Undocumented Migrant</dt>
            <dd>Someone who lacks authorization to enter or stay in a country.</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

