import { Paper, Grid, Title, Text, Button, Stack, Select } from '@mantine/core'

export default function Hero() {
  return (
    <Paper p="xl" radius="xl" bg="darkred">
      <Grid align="center">
        <Grid.Col span={7}>
          <Title c="white">Experience the road like never before</Title>

          <Text c="white" mt="md">
            Simple car rental website built with Mantine.
          </Text>

          <Button mt="lg" color="yellow">
            Rent Now
          </Button>
        </Grid.Col>

        <Grid.Col span={5}>
          <Stack>
            <Select placeholder="Products type" data={['Sumsung', 'Redmi']} />
            <Select
              placeholder="Place of rent"
              data={['Chilonzor', 'Shayhontahur']}
            />
            <Select
              placeholder="Place of return"
              data={['Chilonzor', 'Shayhontahur']}
            />
            <Select placeholder="Pick up" data={['City']} />
            <Select placeholder="Return" data={['City']} />
            <Button bg={'yellow'}>Book</Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
