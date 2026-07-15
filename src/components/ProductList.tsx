import { Grid, Title } from '@mantine/core'
import { useProducts } from '../hooks/useProducts'
import { ProductCard } from './ProductCard'



interface Name {
  name: string
}

export default function ProductList({ name }: Name) {
  const { data, isLoading, isError, error } = useProducts()

  console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <Title order={2} my="lg" c="darkred">
        {name}
      </Title>

      <Grid>
        {data?.data.map((product) => (
          <Grid.Col
            key={product.id}
            span={{
              base: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
