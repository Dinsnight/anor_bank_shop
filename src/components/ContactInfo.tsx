import { Container, Grid, Group, Stack, ThemeIcon, Text } from '@mantine/core'
import {
  IconMailPin,
  IconMapPin,
  IconPhone,
  IconTimeline,
} from '@tabler/icons-react'

const contacts = [
  {
    icon: IconMapPin,
    title: 'Address',
    value: 'Oxford Ave. Cary, NC 27511',
  },
  {
    icon: IconMailPin,
    title: 'Email',
    value: 'Badiriddin@example.com',
  },
  {
    icon: IconPhone,
    title: 'Phone',
    value: '+998 88 345-98-09',
  },
  {
    icon: IconTimeline,
    title: 'Opening hours',
    value: 'Sun-Mon: 10am - 10pm',
  },
]

export default function ContactInfo() {
  return (
    <Container>
      <Grid>
        {contacts.map((contact, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
            <Group align="center" gap="md" wrap="nowrap">
              <ThemeIcon>
                <contact.icon size={20} color="darkred" />
              </ThemeIcon>
              <Stack>
                <Text c="dimmed" size="xs">
                  {contact.title}
                </Text>

                <Text size="sm" fw={700}>
                  {contact.value}
                </Text>
              </Stack>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
