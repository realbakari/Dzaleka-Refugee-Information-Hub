import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const myths = [
  {
    myth: "Refugees receive business capital from UNHCR",
    reality: "UNHCR does not provide refugees with capital to start businesses. Refugees typically rely on personal networks or establish businesses based on trust agreements with Malawian suppliers."
  },
  {
    myth: "Refugees sell groceries cheaply due to free food aid",
    reality: "The food aid provided is minimal and not enough for personal subsistence, let alone as business capital. As of May 2019, cash assistance replaced food aid, amounting to only USD 7.50 per person per month."
  },
  {
    myth: "Refugees don't pay taxes",
    reality: "Refugees who own businesses are subject to the same tax regulations as local entrepreneurs, including VAT collection obligations."
  },
  {
    myth: "Refugees import goods without customs clearance",
    reality: "Most refugees source goods from Malawian suppliers. Those who import goods partner with legal business associates to ensure all necessary customs procedures are followed."
  },
  {
    myth: "Refugees are in Malawi to take over the economy",
    reality: "Refugees have fled their countries out of necessity for safety, not for economic gain. This fear is unfounded and overlooks the reasons for seeking refuge."
  }
]

export function DebunkingMyths() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Debunking Myths</CardTitle>
        <CardDescription>Common misconceptions about refugees in Malawi</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {myths.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.myth}</AccordionTrigger>
              <AccordionContent>{item.reality}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

