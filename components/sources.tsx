import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Sources() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sources</CardTitle>
        <CardDescription>References and further reading</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://data.unhcr.org/" className="text-blue-600 hover:underline">UNHCR Data</a></li>
          <li><a href="https://www.internal-displacement.org/global-report/grid2024/" className="text-blue-600 hover:underline">Global Report on Internal Displacement</a></li>
          <li><a href="https://www.unhcr.org/what-we-do/protect-human-rights/asylum-and-migration/new-york-declaration-refugees-and-migrants#CRRF" className="text-blue-600 hover:underline">UNHCR - New York Declaration</a></li>
          <li><a href="https://www.investigativeplatform-mw.org/show-story/corruption-killings-sexual-abuse-rock-refugee-re" className="text-blue-600 hover:underline">Investigative Platform Malawi - Corruption in Refugee Management</a></li>
          <li><a href="https://inuaadvocacy.org/2024/07/gunfire-erupts-in-dzaleka-refugee-camp/" className="text-blue-600 hover:underline">Inua Advocacy - Gunfire in Dzaleka Refugee Camp</a></li>
          <li><a href="https://inuaadvocacy.org/2024/10/combating-human-trafficking-at-dzaleka-refugee-camp/" className="text-blue-600 hover:underline">Inua Advocacy - Combating Human Trafficking</a></li>
        </ul>
      </CardContent>
    </Card>
  )
}

