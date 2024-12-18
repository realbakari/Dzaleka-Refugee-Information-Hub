import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const faqData = [
  {
    question: "What is the process for seeking asylum in Malawi?",
    answer: "Asylum seekers must report to any government authority within 48 hours of entering Malawi. They will then go through an immigration interview, apply for refugee status at the Refugee Status Determination (RSD) office in Dzaleka, and await a decision from a review committee."
  },
  {
    question: "Are refugees allowed to work in Malawi?",
    answer: "Currently, Malawi's Refugee Act restricts refugees from engaging in employment or self-employment outside of designated camps. However, there are ongoing discussions and advocacy efforts to change this policy."
  },
  {
    question: "What education opportunities are available for refugee children in Dzaleka?",
    answer: "Dzaleka Camp has several primary and secondary schools. However, these are often overcrowded and under-resourced. Some organizations offer scholarships and distance learning programs for higher education, but opportunities are limited."
  },
  {
    question: "How can I help refugees in Malawi?",
    answer: "You can help by volunteering with organizations working in Dzaleka, donating to reputable NGOs supporting refugees, advocating for refugee rights, or partnering with refugee-led initiatives. Visit our 'Support Refugees' section for more information."
  },
  {
    question: "What is the current population of Dzaleka Refugee Camp?",
    answer: "As of 2024, Dzaleka Refugee Camp hosts over 60,000 refugees and asylum seekers, despite being originally designed for 10,000 to 12,000 people."
  }
]

export function FAQSection() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription>Common questions about refugees in Malawi and Dzaleka Camp</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

