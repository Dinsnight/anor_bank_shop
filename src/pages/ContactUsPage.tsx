import { Container, Stack, Text, Title } from '@mantine/core'
import { BookingSection } from '../components/BookingSection'
import ContactInfo from '../components/ContactInfo'
import BlogComponent from '../components/BlogComponent'
import Brands from '../components/Brands'

export function ContactUsPage() {
  return (
    <Container>
      <Stack align="center">
        <Title>Contact Us</Title>
        <Text size="sm" c="dimmed">
          Home / <b style={{ color: 'darkred' }}>Contact Us</b>
        </Text>
      </Stack>
      <BookingSection />
      <ContactInfo />
      <Text fw={900} ta="center" mt="xl" fz={70} c="darkred">
        Latest blog posts & news
      </Text>
      <BlogComponent />
      <Brands />
    </Container>
  )
}
