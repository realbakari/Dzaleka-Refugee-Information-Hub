import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function PurposeAndScope() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Purpose and Scope</CardTitle>
        <CardDescription>Understanding the refugee situation in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          This guide offers a comprehensive account of the refugee situation in Malawi, providing readers with a deep and accurate understanding of past and present circumstances.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>First comprehensive resource on Malawi's refugee situation</li>
          <li>Regularly updated to reflect evolving conditions</li>
          <li>Aims to provide accurate information and dispel myths</li>
          <li>Addresses historical context, legal frameworks, and living conditions</li>
          <li>Serves as a tool for education, advocacy, and action</li>
          <li>Encourages informed dialogue on refugee issues in Malawi</li>
        </ul>
      </CardContent>
    </Card>
  )
}

