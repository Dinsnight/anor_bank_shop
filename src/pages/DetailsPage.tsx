import ProductDetails from '../components/ProductDetails'
import { product } from '../data/productDetail'

export function DetailsPage() {
  return (
    <>
      <ProductDetails {...product} />


    </>
  )
}
