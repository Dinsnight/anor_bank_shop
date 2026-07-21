import { useMutation, useQueryClient } from '@tanstack/react-query'
import { productsApi } from '../api/products.ts'
import type { IProduct, IProductForm } from '../types/product.ts'
import { PRODUCTS_KEY } from './useProducts.ts'



export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: IProductForm) => productsApi.create(data).then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
    },
  })
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<IProductForm> }) =>
      productsApi.update(id, data).then((res) => res.data),

    onSuccess: (updated: IProduct) => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
      queryClient.setQueryData([PRODUCTS_KEY, String(updated.id)], updated)
    },
  })
}


export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => productsApi.delete(id).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] })
    },
  })
}