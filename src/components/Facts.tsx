import {
  Box,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'

import { FaCar, FaUsers, FaCalendarAlt, FaBullseye } from 'react-icons/fa'

const stats = [
  {
    icon: <FaCar />,
    value: '540+',
    label: 'Cars',
  },
  {
    icon: <FaUsers />,
    value: '20k+',
    label: 'Customers',
  },
  {
    icon: <FaCalendarAlt />,
    value: '25+',
    label: 'Years',
  },
  {
    icon: <FaBullseye />,
    value: '20m+',
    label: 'Miles',
  },
]

export default function Facts() {
  return (
    <Box
      py={80}
      bg="darkred"
      style={{
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <Container size="lg">
        <Stack align="center" gap="xs">
          <Title c="white" order={2}>
            Facts In Numbers
          </Title>

          <Text c="rgba(255,255,255,.8)" size="sm" ta="center" maw={600}>
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt erat at semper fermentum.
          </Text>
        </Stack>

        <Flex mt={50} justify="space-between" wrap="wrap" gap="lg">
          {stats.map((item) => (
            <Card key={item.label} radius="lg" shadow="sm" p="md" w={210}>
              <Group align="center" gap="md">
                <ThemeIcon
                  size={46}
                  radius="md"
                  color="darkred"
                  variant="filled"
                >
                  {item.icon}
                </ThemeIcon>

                <div>
                  <Text fw={700} size="xl">
                    {item.value}
                  </Text>

                  <Text size="sm" c="dimmed">
                    {item.label}
                  </Text>
                </div>
              </Group>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
