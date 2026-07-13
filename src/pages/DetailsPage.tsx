import ProductDetails from '../components/ProductDetails'
import { product } from '../data/productDetail'
import ProductList from '../components/ProductList'

export function DetailsPage() {
  return (
    <>
      <ProductDetails {...product} />

      <ProductList name="Other product" />
    </>
  )
}
