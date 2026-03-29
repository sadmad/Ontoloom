import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Ontoloom — Turn documents into editable ontology graphs',
  description:
    'A customizable workspace for extracting concepts, entities, and relationships from PDFs using LLMs and interactive visualization.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
