import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">Providing comprehensive information about refugees in Malawi and Dzaleka Refugee Camp.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary">Resources</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.unhcr.org/malawi.html" className="text-muted-foreground hover:text-primary">UNHCR Malawi</a></li>
              <li><a href="https://data.unhcr.org/en/country/mwi" className="text-muted-foreground hover:text-primary">Refugee Data</a></li>
              <li><a href="https://www.refugeesinternational.org/reports/2023/5/15/malawi-forced-returns-to-dzaleka-refugee-camp" className="text-muted-foreground hover:text-primary">Refugee Reports</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground">Email: dzalekaconnect@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-muted-foreground">&copy; 2024 Dzaleka.com - Dzaleka Connect Publishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

