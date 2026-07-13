import { Grid, Title } from '@mantine/core'
import ProductCard from './ProductCard'
import { products } from '../data/products'

interface Name {
  name: string
}

export default function ProductList({ name }: Name) {
  return (
    <>
      <Title order={2} my="lg" c="darkred">
        {name}
      </Title>

      <Grid>
        {products.map((car) => (
          <Grid.Col
            span={{
              base: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
            key={car.id}
          >
            <ProductCard {...car} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
