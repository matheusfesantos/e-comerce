import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Essence - Loja de Perfumes",
  description: "Descubra sua fragrância exclusiva na Essence",
  icons: {
    icon: "/images/icones/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

