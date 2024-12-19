import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Dzaleka Refugee Camp</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Dzaleka Refugee Camp, located in Dowa district about 50km north of Lilongwe, Malawi's capital city, was established in 1994 in response to a surge of forcibly displaced people fleeing genocide, violence, and wars in Burundi, Rwanda and the Democratic Republic of Congo (DRC).</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Camp Population</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Originally designed to accommodate 10,000 refugees, Dzaleka now hosts over 50,000 forcibly displaced persons, making it one of the most congested camps in the world. The majority of camp residents are from DRC (80%), with others from Burundi, Rwanda, Somalia and Ethiopia.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Living Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Due to severe overcrowding, living conditions in Dzaleka are challenging. Many refugees live in dilapidated shelters, and access to basic services such as water, sanitation, and healthcare is limited. Despite these challenges, the camp has a vibrant community life, with refugees engaging in various economic activities and educational pursuits.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Education and Skills Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Dzaleka has several primary and secondary schools, as well as vocational training centers. However, these facilities are often overcrowded and under-resourced. Despite these challenges, many refugees have shown remarkable resilience, with some pursuing higher education through distance learning programs.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <p>While Dzaleka faces numerous challenges, including limited resources and restrictions on movement and employment for refugees, it also presents opportunities. Many refugees have developed entrepreneurial initiatives, contributing to the camp's economy and demonstrating the potential for self-reliance. However, more support is needed to improve living conditions and create sustainable livelihoods for the camp's residents.</p>
        </CardContent>
      </Card>
    </div>
  )
}

