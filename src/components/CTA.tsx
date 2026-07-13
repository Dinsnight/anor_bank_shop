import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  TextInput,
  Title,
} from '@mantine/core'

export default function CTA() {
  return (
    <BackgroundImage src="nimadur" radius="lg" py={70} bg="darkred">
      <Container size="lg">
        <Flex justify="space-between" align="center" wrap="wrap" gap={40}>
          <Box maw={500}>
            <Title order={1} c="white" mb="md">
              Enjoy every mile with
              <br />
              adorable companionship.
            </Title>

            <Text c="rgba(255,255,255,.8)" size="sm" mb="xl">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </Text>

            <TextInput
              placeholder="City"
              radius="xl"
              size="md"
              rightSectionWidth={90}
              rightSection={
                <Button color="darkred" radius="xl" size="xs" mr={6}>
                  Search
                </Button>
              }
            />
          </Box>

          <Image src="/anor.png" w={260} fit="contain" />
        </Flex>
      </Container>
    </BackgroundImage>
  )
}
