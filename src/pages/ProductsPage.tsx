import { Button, Container, Group, Stack, Title } from '@mantine/core'
import ProductList from '../components/ProductList'
import Brands from '../components/Brands'

const categories = [
  'All products',
  'Clothes',
  'Electronics',
  'Furniture',
  'Shoes',
  'Miscellaneous',
]

export function ProductsPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title ta="center" order={2}>
          Select a vehicle group
        </Title>

        <Group justify="center" gap="md">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? 'filled' : 'light'}
              radius="xl"
              color="darkred"
            >
              {category}
            </Button>
          ))}
        </Group>

        <ProductList name="Choose your product" />

        <Brands />
      </Stack>
    </Container>
  )
}
