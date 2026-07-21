import { Alert, Box, Center, Container, Loader, Pagination, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import Brands from '../components/Brands'
import type { IProductParams } from '../types/product'
import { useSearchRequestParams } from '../hooks/useSearchRequestParams'
import { useProducts } from '../hooks/useProducts'
import { ProductFilter } from '../components/products/ProductFilter'
import { ProductCard } from '../components/ProductCard'
import { CreateProductButton } from '../components/products/CreateProductButton'


const PAGE_SIZE = 6


export function ProductsPage() {
  const { getDefaultSearchParams, setSearchParams } =
    useSearchRequestParams<IProductParams>({
      defaultParams: { page: '1', size: String(PAGE_SIZE) },
    })

  const params = getDefaultSearchParams()

  const { data, isLoading, isError, error } = useProducts(params)

  const products = data?.data ?? []
  const totalPages = Math.ceil((data?.total ?? 0) / PAGE_SIZE)

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        
 <Box px={72} py={60}>
        <Stack gap={40} align="center">
          <CreateProductButton/>
          <Title order={2}>Category</Title>

          <ProductFilter />

          {isLoading ? (
            <Center h={200}>
              <Loader color="orange" />
            </Center>
          ) : isError ? (
            <Alert color="red" title="Not loading files">
              {error.message}
            </Alert>
          ) : products.length === 0 ? (
            <Text c="dimmed">Not found</Text>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" w="100%">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          )}

          {totalPages > 1 && (
            <Pagination
              radius="xl"
              total={totalPages}
              value={Number(params.page ?? 1)}
              onChange={(page) => setSearchParams({ key: 'page', value: page })}
            />
          )}
        </Stack>
      </Box>

        <Brands />
      </Stack>
    </Container>
  )
}
