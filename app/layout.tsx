import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Иван Швейкин - Эксперт по организационным изменениям",
  description:
    "Комплексная трансформация компании. Удвоение прибыли за 3 года. Эксперт по внедрению технологий и организационному развитию.",
  keywords:
    "организационные изменения, трансформация бизнеса, консалтинг, управление изменениями, ADKAR, PROSCI, AGILE",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="https://cloud.mail.ru/public/enpD/Y1KkgfQTs" />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
