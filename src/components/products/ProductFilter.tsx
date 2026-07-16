import { Button, Box, Flex, Group, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { RiSearchLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { useCategories } from '../../hooks/useProducts.ts'
import { useSearchRequestParams } from '../../hooks/useSearchRequestParams.ts'
import type { IProductParams } from '../../types/product.ts'

export const ProductFilter = () => {
  const { searchParams, setSearchParams } =
    useSearchRequestParams<IProductParams>()

  const { data: categories } = useCategories()

  const activeCategory = searchParams.categoryId ?? ''
  const minPrice = searchParams.price_min ?? ''
  const maxPrice = searchParams.price_max ?? ''

  const [searchValue, setSearchValue] = useState(searchParams.search ?? '')
  const [debouncedSearch] = useDebouncedValue(searchValue, 400)

  useEffect(() => {
    setSearchParams({ key: 'search', value: debouncedSearch })
  }, [debouncedSearch])

  const onCategoryClick = (categoryId: string) => {
    setSearchParams({ key: 'categoryId', value: categoryId })
  }

  return (
    <Group justify="center" gap="md">
      <Box>
        <Flex gap={30}>
          <TextInput
            w={260}
            radius="xl"
            placeholder="Please tell me name of your product"
            leftSection={<RiSearchLine size={16} />}
            value={searchValue}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
          />

          <TextInput
            w={120}
            radius="xl"
            type="number"
            placeholder="Min. price"
            value={minPrice}
            onChange={(e) =>
              setSearchParams({
                key: 'price_min',
                value: e.currentTarget.value,
              })
            }
          />

          <TextInput
            w={120}
            radius="xl"
            type="number"
            placeholder="Max. price"
            value={maxPrice}
            onChange={(e) =>
              setSearchParams({
                key: 'price_max',
                value: e.currentTarget.value,
              })
            }
          />
        </Flex>
      </Box>
      <Group justify='center' mt="md" gap="sm">
        <Button
          radius="xl"
          variant={activeCategory === '' ? 'filled' : 'default'}
          onClick={() => onCategoryClick('')}
        >
          All
        </Button>

        {categories?.map((category) => (
          <Button
            key={category.id}
            radius="xl"
            variant={
              activeCategory === String(category.id) ? 'filled' : 'default'
            }
            onClick={() => onCategoryClick(String(category.id))}
          >
            {category.name}
          </Button>
        ))}
      </Group>
    </Group>
  )
}
