import { useState } from 'react'
import {
  Button,
  Card,
  Grid,
  Group,
  Image,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import {
  FaBox,
  FaTag,
  FaWarehouse,
  FaStar,
  FaTruck,
  FaCheckCircle,
} from 'react-icons/fa'
import type { ProductDetailsProp } from '../types/productDetails'

export default function ProductDetails({
  name,
  price,
  image,
  gallery,
  category,
  brand,
  stock,
  rating,
  delivery,
  features,
}: ProductDetailsProp) {
  const [selectedImage, setSelectedImage] = useState(image)

  const productInfo = [
    {
      icon: FaBox,
      label: 'Category',
      value: category,
    },
    {
      icon: FaTag,
      label: 'Brand',
      value: brand,
    },
    {
      icon: FaWarehouse,
      label: 'Stock',
      value: stock,
    },
    {
      icon: FaStar,
      label: 'Rating',
      value: rating,
    },
  ]

  return (
    <Stack gap="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card radius="lg" p="lg">
            <Stack gap="md">
              <Title order={2}>{name}</Title>
              <Text c="darkred">${price}$</Text>
              <Image src={selectedImage} h={400} fit="contain" />

              <Group justify="center" gap="sm">
                {[image, ...gallery].map((img, index) => (
                  <Card
                    key={index}
                    withBorder
                    radius="md"
                    p={4}
                    style={{
                      cursor: 'pointer',
                      border:
                        selectedImage === img
                          ? '2px solid #A30041'
                          : '1px solid #e9ecef',
                    }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image src={img} w={90} h={70} fit="cover" />
                  </Card>
                ))}
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack>
            <Title order={3}>Product Information</Title>

            <Grid>
              {productInfo.map((item) => {
                const Icon = item.icon

                return (
                  <Grid.Col key={item.label} span={{ base: 12, sm: 6 }}>
                    <Card withBorder radius="lg" h="100%">
                      <Group align="flex-start">
                        <ThemeIcon color="darkred" variant="light" size="lg">
                          <Icon size={18} />
                        </ThemeIcon>

                        <Stack gap={2}>
                          <Text size="sm" c="dimmed">
                            {item.label}
                          </Text>

                          <Text fw={600}>{item.value}</Text>
                        </Stack>
                      </Group>
                    </Card>
                  </Grid.Col>
                )
              })}

              <Grid.Col span={12}>
                <Card withBorder radius="lg">
                  <Group align="flex-start">
                    <ThemeIcon color="darkred" variant="light" size="lg">
                      <FaTruck size={18} />
                    </ThemeIcon>

                    <Stack gap={2}>
                      <Text size="sm" c="dimmed">
                        Delivery
                      </Text>

                      <Text fw={600}>{delivery}</Text>
                    </Stack>
                  </Group>
                </Card>
              </Grid.Col>
            </Grid>

            <Button fullWidth mt="md" size="lg" radius="xl" color="darkred">
              Buy Now
            </Button>

            <Stack gap="sm">
              <Title order={4}>Product Features</Title>

              <List
                spacing="md"
                icon={
                  <ThemeIcon
                    color="darkred"
                    variant="light"
                    radius="xl"
                    size={22}
                  >
                    <FaCheckCircle size={12} />
                  </ThemeIcon>
                }
              >
                {features.map((feature) => (
                  <List.Item key={feature}>{feature}</List.Item>
                ))}
              </List>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
