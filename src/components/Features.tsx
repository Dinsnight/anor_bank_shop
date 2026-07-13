import { Grid, Paper, Stack, Text } from '@mantine/core'
import { MdApproval, MdBathtub, MdCallToAction } from 'react-icons/md'

export default function Features() {
  return (
    <Grid my="xl">
      <Grid.Col span={4}>
        <Paper p="lg" radius="md">
          <Stack align="center" gap="sm">
            <MdApproval size={32} />

            <Text fw={700}>Availability</Text>
            <Text ta="center" size="sm" c="dimmed">
              Diam tincidunt tincidunt erat at semper fermentum. Id ultricies
              quis.
            </Text>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={4}>
        <Paper p="lg" radius="md">
          <Stack align="center" gap="sm">
            <MdBathtub size={32} />
            <Text fw={700}>Comfort</Text>
            <Text ta="center" size="sm" c="dimmed">
              Gravida auctor fermentum morbi vulputate ac egestas orci etium
              convallis.
            </Text>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={4}>
        <Paper p="lg" radius="md">
          <Stack align="center" gap="sm">
            <MdCallToAction size={32} />
            <Text fw={700}>Savings</Text>
            <Text ta="center" size="sm" c="dimmed">
              Pretium convallis id diam sed commodo vestibulum lobortis
              volutpat.
            </Text>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  )
}
