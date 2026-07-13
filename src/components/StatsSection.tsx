import { Box, Container, SimpleGrid, Text } from '@mantine/core'

interface StatItem {
  value: string
  label: string
}

const statsData: StatItem[] = [
  { value: '20k+', label: 'Happy customers' },
  { value: '520+', label: 'Count of prodiucts' },
  { value: '25+', label: 'Years of experince' },
]

export function StatsSection() {
  return (
    <Box py={50}>
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {statsData.map((stat, index) => (
            <Box key={index}>
              <Text c="darkred" fw={800} style={{ fontSize: 45 }}>
                {stat.value}
              </Text>
              <Text c="dark" fw={700}>
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
