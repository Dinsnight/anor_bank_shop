import { useQuery } from '@tanstack/react-query'
import { categoriesApi, productsApi } from '../api/products'
import type { IProductParams } from '../types/product'

export const PRODUCT_KEY = 'products-key'
export const CATEGORIES_KEY = 'categories-key'

export const useProducts = (params?: IProductParams) => {
  const { page, size, ...filters } = params ?? {}

  const current = Number(page ?? 1)
  const limit = Number(size ?? 6)
  const start = (current - 1) * limit

  return useQuery({
    queryKey: [PRODUCT_KEY, filters, current, limit],
    queryFn: () => productsApi.get().then((resp) => resp.data),
    select: (all) => {
      let filtered = all

      if (filters.search) {
        filtered = filtered.filter((product)=>
        product.title.toLowerCase().includes(filters.search!.toLowerCase()))
      }

      if (filters.categoryId) {
        filtered = filtered.filter(
          (product) => String(product.category.id) === filters.categoryId
        )
      }

      if (filters.price_min) {
        filtered = filtered.filter(
          (product)=> product.price >= Number(filters.price_min))
      }

       if (filters.price_max) {
        filtered = filtered.filter(
          (product)=> product.price <= Number(filters.price_max))
      }



      return{
        data: filtered.slice(start, start + limit),
      total: filtered.length,
      }
      
    },
  })
}

export const useProductById = (id?: string) =>
  useQuery({
    queryKey: [PRODUCT_KEY, id],
    queryFn: () => productsApi.getById(Number(id)).then((resp) => resp.data),
  })

export const useCategories = () =>
  useQuery({
    queryKey: [CATEGORIES_KEY],
    queryFn: () => categoriesApi.get().then((resp) => resp.data),
    staleTime: Infinity,
  })
