import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Official Organizations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="https://www.unhcr.org/malawi.html" className="text-primary hover:underline">UNHCR Malawi</Link> - Official website of the UN Refugee Agency in Malawi</li>
            <li><Link href="https://www.wfp.org/countries/malawi" className="text-primary hover:underline">World Food Programme Malawi</Link> - Information on WFP's work in Malawi, including support for refugees</li>
            <li><Link href="https://www.unicef.org/malawi/" className="text-primary hover:underline">UNICEF Malawi</Link> - UNICEF's work in Malawi, including support for refugee children</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Data and Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="https://data.unhcr.org/en/country/mwi" className="text-primary hover:underline">UNHCR Operational Data Portal - Malawi</Link> - Up-to-date statistics and reports on refugees in Malawi</li>
            <li><Link href="https://www.refugeesinternational.org/reports/2023/5/15/malawi-forced-returns-to-dzaleka-refugee-camp" className="text-primary hover:underline">Refugees International - Malawi Report</Link> - Report on forced returns to Dzaleka Refugee Camp</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>NGOs and Support Organizations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="https://www.jesuit.org.uk/refugee-service-malawi" className="text-primary hover:underline">Jesuit Refugee Service Malawi</Link> - Information on JRS's work in Dzaleka Refugee Camp</li>
            <li><Link href="https://www.plan-international.org/malawi/" className="text-primary hover:underline">Plan International Malawi</Link> - Plan International's work in Malawi, including support for refugees</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Community-Based Organizations (CBOs)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>There Is Hope - Vocational and entrepreneurship training</li>
            <li>Dzaleka Community Radio Station - Information dissemination and community engagement</li>
            <li>Dzaleka Youth Association - Youth empowerment and skills development</li>
            <li>Dzaleka Women's Forum - Women's rights advocacy and support</li>
            <li>Malawi Red Cross Society - Health and social services</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Academic Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="https://academic.oup.com/jrs/article-abstract/33/1/131/5488806" className="text-primary hover:underline">Journal of Refugee Studies - Malawi's Encampment Policy</Link> - Academic article on Malawi's refugee policies</li>
            <li><Link href="https://www.tandfonline.com/doi/full/10.1080/01436597.2020.1784002" className="text-primary hover:underline">Third World Quarterly - Refugee Economies in Malawi</Link> - Research on refugee economies in Malawi</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

