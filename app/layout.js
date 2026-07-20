import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'

export const metadata = {
  title: 'VMD Management Services | Security & Facility Management in Pune',
  description: 'Reliable Security Guards, Housekeeping & Facility Solutions for Residential, Commercial and Industrial Clients in Pune.',
  keywords: 'Security Agency in Pune, Housekeeping Services in Pune, Facility Management Pune, VMD Management Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
