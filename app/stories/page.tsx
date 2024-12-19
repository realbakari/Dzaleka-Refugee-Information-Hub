import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stories = [
  {
    name: "Remy Gakwaya",
    achievement: "Founder of TakenoLAB and Relon Malawi",
    story: "Remy Gakwaya, a self-taught computer programmer, began teaching his skills to others in Dzaleka camp. His initiative grew in reach and success, leading to the establishment of TakenoLAB. Remy's impact extended further when he founded Relon Malawi, a network connecting all refugee-led organizations in the country."
  },
  {
    name: "Marcel Chiruza",
    achievement: "Founder of Fountain of Hope",
    story: "Marcel Chiruza arrived at Dzaleka with a background in community development from the DRC. He founded Fountain of Hope, an organization that has made significant contributions to education and income-generation initiatives, benefiting both refugees and Malawians."
  },
  {
    name: "Menes la Plume (Trésor Nzengu Mpauni)",
    achievement: "Founder of Tumaini Festival",
    story: "Menes la Plume, a Congolese poet and musician, has become a symbol of resilience and hope for refugees in Malawi. His crowning achievement is the Tumaini Festival, the world's first music and arts festival held in a refugee camp. This annual event has significantly boosted Malawi's tourism industry and the camp's informal economy."
  },
  {
    name: "Salama Africa",
    achievement: "Award-winning Dance Group",
    story: "Founded by Freddy Farini, Toussaint Farini, Alain Tenta, and Iris Nganji, Salama Africa has become a cornerstone of Malawi's dance scene. The group has won multiple national awards and performed at prestigious festivals and events alongside well-known Malawian artists."
  },
  {
    name: "Stanislas Nshimirimana",
    achievement: "Founder of Amahoro Burundian Drummers",
    story: "Stanislas Nshimirimana, a Burundian refugee with a complex migration history, founded Amahoro Burundian Drummers in 2006. The group has captivated audiences across Malawi, performing at major festivals, corporate events, and presidential galas. Their performances spread a message of peace and appreciation for cultural heritage."
  },
  {
    name: "Raphael Ndabaga",
    achievement: "Founder of Mirash Films",
    story: "Congolese refugee Raphael Ndabaga founded Mirash Films, a film production company that has achieved remarkable success. Between 2023 and 2024, Mirash Films won a total of 6 awards at national and international film festivals in Malawi, showcasing the creative talent within the refugee community."
  }
]

export default function StoriesPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Personal Stories of Achievement</h1>
      <p className="text-center mb-8 text-muted-foreground">These stories highlight the remarkable achievements of refugees from Dzaleka Camp, demonstrating their resilience, creativity, and contributions to both the refugee and host communities.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{story.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-semibold mb-2 text-primary">{story.achievement}</p>
              <p>{story.story}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

