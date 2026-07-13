import { Paper, Select, Button, Stack } from '@mantine/core'

export default function BookingForm() {
  return (
    <Paper p="md">
      <Stack>
        <Select label="Car Type" data={['SUV', 'Sedan']} />
        <Select label="Pick up" data={['Tashkent']} />
        <Select label="Drop off" data={['Samarkand']} />
        <Button color="orange">Book Now</Button>
      </Stack>
    </Paper>
  )
}
