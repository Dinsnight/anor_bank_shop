import { Container, Stack, Title, Text, Grid } from '@mantine/core'
import VideoSection from '../components/VideoSection'
import { StatsSection } from '../components/StatsSection'
import FeaturesSection from '../components/FeaturesSection'
import DownloadApp from '../components/DownloadApp'
import CTA from '../components/CTA'

export function AboutUsPage() {
  return (
    <Container size="lg" py={70}>
      <Stack align="center">
        <Title>About us</Title>
        <Text size="sm" c="dimmed">
          Home / <b style={{ color: 'darkred' }}>About us</b>
        </Text>
      </Stack>
      <Grid pt={60}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Title>
            Where every
            <br />
            drive feels
            <br />
            extraordinary
          </Title>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 8 }}>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={3} mb="sm">
                Variety Brands
              </Title>

              <Text c="dimmed" size="sm">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={3} mb="sm">
                Variety Brands
              </Title>

              <Text c="dimmed" size="sm">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={3} mb="sm">
                Variety Brands
              </Title>

              <Text c="dimmed" size="sm">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={3} mb="sm">
                Variety Brands
              </Title>

              <Text c="dimmed" size="sm">
                Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                sit quam natoque ornare cursus viverra odio
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <VideoSection />
      <StatsSection />
      <FeaturesSection />
      <CTA />
      <DownloadApp />
    </Container>
  )
}
