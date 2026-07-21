import type{ IProduct, ICategory, IProductParams, IProductForm } from '../types/product'
import { $api } from './api'

const baseURL = '/products'

export const productsApi = {
  get: (params?: IProductParams) => $api.get<IProduct[]>(baseURL, { params }),
  getById: (id: IProduct['id']) => $api.get<IProduct>(`${baseURL}/${id}`),
  create: (data: IProductForm) => $api.post<IProduct>(baseURL, data),
   update: (id: IProduct['id'], data: Partial<IProductForm>) =>
    $api.put<IProduct>(`${baseURL}/${id}`, data),
  delete: (id: IProduct['id']) => $api.delete<boolean>(`${baseURL}/${id}`),
}

export const categoriesApi = {
  get: () => $api.get<ICategory[]>('/categories'),
}
