import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function LegalFramework() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Legal Framework</CardTitle>
        <CardDescription>Understanding the laws governing refugees in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Refugee Act of 1989</h3>
        <p className="mb-4">
          The Refugee Act of 1989 establishes the legal framework for the reception, admission, and treatment of refugees in Malawi. While it aligns with key international refugee laws, it has faced criticism for being outdated and insufficient in addressing current refugee needs.
        </p>
        <h3 className="text-lg font-semibold mb-2">Reservations to the 1951 UN Refugee Convention</h3>
        <p className="mb-2">Malawi's reservations limit certain rights of refugees, including:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Freedom of Movement: Refugees must reside in designated camps</li>
          <li>Employment: Restrictions on work outside camps</li>
          <li>Public Relief and Assistance: Limited access to social services</li>
        </ul>
        <p>
          These reservations significantly impact refugees' ability to achieve self-sufficiency and integrate into Malawian society.
        </p>
      </CardContent>
    </Card>
  )
}

