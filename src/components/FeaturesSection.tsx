import {
  Container,
  SimpleGrid,
  Stack,
  Title,
  Box,
  Text,
  Flex,
  ThemeIcon,
  Image,
} from '@mantine/core'
import type { FeatureItem } from '../types/featureItem'
import { IconCheck } from '@tabler/icons-react'

const featuresData: FeatureItem[] = [
  {
    text: 'Velit semper morbi. Purus non eu cursus porttitor tristique et gravida',
  },
  {
    text: 'Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum ',
  },
  {
    text: 'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor ',
  },
  { text: 'Quis nunc interdum gravida ullamcorper' },
]

export default function FeaturesSection() {
  return (
    <Box>
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Stack>
            <Stack>
              <Title fw={800} lh={1.2}>
                Unlock unforgettable
                <br />
                memories on the road
              </Title>
              <Text c="dimmed" lh={1.6} size="sm">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper
              </Text>
            </Stack>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              {featuresData.map((feature, index) => (
                <Flex key={index}>
                  <ThemeIcon>
                    <IconCheck />
                  </ThemeIcon>
                  <Text>{feature.text}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Stack>
          <Box style={{ width: '100%' }}>
            <Image
              src="https://i.pinimg.com/736x/05/db/17/05db1760416862f9f3410738eff93eec.jpg"
              alt="Unlock unforgettable memories on the road"
              radius="lg"
              fit="cover"
              style={{
                aspectRatio: '4 / 3',
                width: '100%',
                maxHeight: 450,
              }}
              fallbackSrc="https://placehold.co/600x450?text=Road+Trip"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
