import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'

export default function DownloadApp() {
  return (
    <Container size="lg" py={2}>
      <Flex justify="space-between" align="center" wrap="wrap" gap={60}>
        <Stack maw={420} gap="lg">
          <Title order={1} fw={700}>
            Download
            <br />
            mobile app
          </Title>

          <Text c="dimmed" size="sm">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at in. Turpis aliquet
            cras hendrerit enim condimentum.
          </Text>

          <Flex gap="md">
            <Button color="transperent" radius="md">
              <Image
                src="https://www.scrapehero.com/wp/wp-content/uploads/2019/01/app-store-scrape.png"
                w={140}
              />
            </Button>

            <Button color="transperent" radius="md">
              <Image
                src="https://i.pinimg.com/1200x/aa/0b/f7/aa0bf7cb7a859f4f5ca2142f2c9286e3.jpg"
                w={140}
              />
            </Button>
          </Flex>
        </Stack>

        <Box pos="relative" w={350} h={420}>
          <Image
            src="./public/phone.png"
            w={270}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          />

          <Image
            src="./public/phone.png"
            w={270}
            style={{
              position: 'absolute',
              left: 150,
              top: 30,
              zIndex: 2,
            }}
          />
        </Box>
      </Flex>
    </Container>
  )
}
