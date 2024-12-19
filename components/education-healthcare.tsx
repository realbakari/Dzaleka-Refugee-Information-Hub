import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EducationHealthcare() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Education and Healthcare</CardTitle>
        <CardDescription>Challenges and opportunities for refugees in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Limited access to quality education due to overcrowded and under-resourced schools</li>
          <li>Shortage of secondary education opportunities</li>
          <li>Few chances for higher education, with some scholarships and distance learning programs available</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
        <ul className="list-disc pl-5">
          <li>One clinic in Dzaleka Camp, operated by the Ministry of Health, serving over 70,000 people</li>
          <li>Limited medical staff and resources to address prevalent health issues</li>
          <li>Challenges in accessing specialized care and treatment for chronic conditions</li>
          <li>Some refugee-owned private pharmacies and medical services present in the camp</li>
        </ul>
      </CardContent>
    </Card>
  )
}

