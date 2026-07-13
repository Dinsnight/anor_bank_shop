import { Stack } from '@mantine/core'
import Hero from '../components/Hero.tsx'
import Features from '../components/Features.tsx'
import ProductList from '../components/ProductList.tsx'
import Facts from '../components/Facts.tsx'
import DownloadApp from '../components/DownloadApp.tsx'
import CTA from '../components/CTA.tsx'

export function HomePage() {
  return (
    <Stack px={50}>
      <Hero />
      <Features />
      <ProductList name="Chose your product" />
      <Facts />
      <DownloadApp />
      <CTA />
    </Stack>
  )
}
