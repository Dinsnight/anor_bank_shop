import {
  SimpleGrid,
  Container,
  Title,
  Button,
  Select,
  Input,
  Stack,
  Image,
  Box,
  Paper,
} from '@mantine/core'
import { useState } from 'react'

export function BookingSection() {
  const [productType, setProductType] = useState<string | null>(null)
  const [rentalPlace, setRentalPlace] = useState<string | null>(null)
  const [returnPlace, setReturnPlace] = useState<string | null>(null)

  return (
    <Box py={60} bg="white">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 40 }}>
          <Paper
            p={{ base: 'xl', sm: 40 }}
            radius="lg"
            style={{
              backgroundColor: '#A20042',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Title order={2} c="white" ta="center" mb={30} fw={700} size="h3">
              Book your car
            </Title>

            <Stack gap="md" c="red">
              <Select
                placeholder="product type"
                data={['Nike', 'SUIII', 'Badriddn', 'Badr product']}
                value={productType}
                onChange={setProductType}
              />

              <Select
                placeholder="Place of rental"
                data={[
                  'Airport Terminal 1',
                  'Downtown Office',
                  'Central Station',
                ]}
                value={rentalPlace}
                onChange={setRentalPlace}
              />

              <Select
                placeholder="Place of return"
                data={[
                  'Airport Terminal 1',
                  'Downtown Office',
                  'Central Station',
                ]}
                value={returnPlace}
                onChange={setReturnPlace}
              />

              <Input type="date" placeholder="Rental date" variant="unstyled" />

              {/* Дата возврата */}
              <Input type="date" placeholder="Return date" variant="unstyled" />

              <Button
                fullWidth
                size="md"
                mt={15}
                radius="md"
                bg="darkred"
                fw={600}
              >
                Book now
              </Button>
            </Stack>
          </Paper>

          <Box style={{ display: 'flex', width: '100%' }}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG9iMeMTxHgOlXLEzqF7ujE-zbA0uwFWjEb9wVc3c32zhVTmRv84XsIU&s=10"
              alt="Car presentation"
              radius="lg"
              fit="cover"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 350,
              }}
              fallbackSrc="https://placehold.co/600x450?text=Car+Image"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
