import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function InuaAdvocacyPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Inua Advocacy</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Inua Advocacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Inua Advocacy is a non-profit organization dedicated to empowering refugees and advocating for their rights. Founded by former refugees, Inua Advocacy works tirelessly to improve the lives of displaced persons in Dzaleka Refugee Camp and beyond.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Inua Advocacy's mission is to amplify the voices of refugees, provide accurate information about refugee situations, and advocate for policies that protect and empower displaced persons. We believe in the power of education, community engagement, and policy reform to create lasting change.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Documenting and sharing refugee stories</li>
            <li>Conducting research on refugee issues in Malawi</li>
            <li>Advocating for improved living conditions in Dzaleka Refugee Camp</li>
            <li>Promoting education and skills development among refugees</li>
            <li>Collaborating with local and international organizations to support refugee rights</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Get Involved</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You can support Inua Advocacy's work in several ways:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Volunteer your skills and time</li>
            <li>Donate to support our initiatives</li>
            <li>Share our resources and raise awareness about refugee issues</li>
            <li>Collaborate with us on research or advocacy projects</li>
          </ul>
          <p className="mt-4">For more information, visit our website or contact us directly.</p>
          <Link href="https://inuaadvocacy.org" className="text-primary hover:underline mt-2 inline-block">Visit Inua Advocacy Website</Link>
        </CardContent>
      </Card>
    </div>
  )
}

