import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function SupportAdvocacy() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Support and Advocacy</CardTitle>
        <CardDescription>How you can help refugees in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Volunteer</h3>
            <p>Offer your time and skills to organizations working with refugees in Malawi.</p>
          </li>
          <li>
            <h3 className="font-semibold">Donate</h3>
            <p>Support organizations providing essential services to refugees through financial contributions.</p>
          </li>
          <li>
            <h3 className="font-semibold">Advocate</h3>
            <p>Raise awareness about refugee issues and advocate for policy changes to improve their lives.</p>
          </li>
          <li>
            <h3 className="font-semibold">Partner</h3>
            <p>Collaborate with local and international organizations to extend your impact.</p>
          </li>
          <li>
            <h3 className="font-semibold">Stay Informed</h3>
            <p>Keep up-to-date with refugee issues in Malawi and share accurate information.</p>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="https://inuaadvocacy.org/home/work/">
            <Button>Learn More About Inua Advocacy</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

