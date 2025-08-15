import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Gists | DLSO Alumni',
  description: 'Latest stories, reunions, and celebrations from our DLSO Alumni family worldwide',
  keywords: 'DLSO, alumni, news, gists, reunion, stories, Ondo, choir',
}

export default function GistsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}