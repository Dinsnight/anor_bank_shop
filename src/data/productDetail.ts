import type { ProductDetailsProp } from '../types/productDetails'

export const product: ProductDetailsProp = {
  name: 'Nike Air Max',
  price: 120,

  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',

  gallery: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200',
  ],

  category: 'Shoes',
  brand: 'Nike',

  stock: 25,
  rating: 4.8,
  delivery: '2-3 Days',

  features: [
    'Original Product',
    '1 Year Warranty',
    'Free Shipping',
    '30 Days Return',
    'Premium Materials',
    '24/7 Support',
  ],
}
