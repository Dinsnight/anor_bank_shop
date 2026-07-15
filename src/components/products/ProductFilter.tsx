import { Button, Group, TextInput } from '@mantine/core'
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

      <TextInput
        w={260}
        radius="xl"
        placeholder="Поиск по названию"
        leftSection={<RiSearchLine size={16} />}
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </Group>
  )
}
