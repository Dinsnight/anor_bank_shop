import { Badge, Button, Card, Group, Image, Stack, Text } from '@mantine/core'
import { IconSnowflake, IconSettings, IconUser } from '@tabler/icons-react'

type ProductCardProps = {
  image: string
  name: string
  category: string
  price: number
}

export default function ProductCard({
  image,
  name,
  category,
  price,
}: ProductCardProps) {
  return (
    <Card shadow="sm" radius="lg" p="md" withBorder style={{ height: '100%' }}>
      <Card.Section>
        <Image src={image} h={170} fit="contain" p="md" bg="#f8f8f8" />
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Group justify="space-between" align="flex-start">
          <div>
            <Text fw={700} size="lg">
              {name}
            </Text>

            <Text size="sm" c="dimmed">
              {category}
            </Text>
          </div>

          <div style={{ textAlign: 'right' }}>
            <Text fw={700} c="darkred" size="lg">
              ${price}
            </Text>

            <Text size="xs" c="dimmed">
              per day
            </Text>
          </div>
        </Group>

        <Group gap="md" mt="xs">
          <Badge
            variant="light"
            color="gray"
            leftSection={<IconSettings size={14} />}
          >
            Automat
          </Badge>

          <Badge
            variant="light"
            color="gray"
            leftSection={<IconUser size={14} />}
          >
            PB 95
          </Badge>

          <Badge
            variant="light"
            color="gray"
            leftSection={<IconSnowflake size={14} />}
          >
            Air Conditioner
          </Badge>
        </Group>

        <Button fullWidth radius="md" mt="md" color="darkred">
          View Details
        </Button>
      </Stack>
    </Card>
  )
}
