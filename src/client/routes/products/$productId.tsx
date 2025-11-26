import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { remult } from '../../lib/api'
import { Product } from '../../../shared/entities/Product'
import { StatusBar } from '../../components/layout/StatusBar'
import { Header } from '../../components/layout/Header'
import { ProductImage } from '../../components/product/ProductImage'
import { ProductHeader } from '../../components/product/ProductHeader'
import { RatingDisplay } from '../../components/product/RatingDisplay'
import { DescriptionSection } from '../../components/product/DescriptionSection'
import { SizeSelector } from '../../components/product/SizeSelector'
import { PriceDisplay } from '../../components/product/PriceDisplay'
import { BuyButton } from '../../components/product/BuyButton'
import '../../styles/product-detail.css'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailComponent,
})

function ProductDetailComponent() {
  const { productId } = Route.useParams()
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M')

  const productRepo = remult.repo(Product)

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => productRepo.findId(productId),
  })

  if (isLoading) {
    return (
      <div className="product-detail-page">
        <div className="product-container">
          <StatusBar />
          <Header title="Detail" />
          <div className="loading-container">
            <p>Loading product...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="product-detail-page">
        <div className="product-container">
          <StatusBar />
          <Header title="Detail" />
          <div className="error-container">
            <p>Product not found</p>
          </div>
        </div>
      </div>
    )
  }

  const handleBuyNow = () => {
    console.log(`Buying ${product.name} - Size: ${selectedSize}`)
    alert(`Added ${product.name} (${selectedSize}) to cart!`)
  }

  return (
    <div className="product-detail-page">
      <div className="product-container">
        <StatusBar />
        <Header title="Detail" />

        <ProductImage src={product.image} alt={product.name} />

        <div className="product-content">
          <ProductHeader
            name={product.name}
            temperature={product.temperature}
            features={{
              spicy: product.hasSpicy,
              coffee: product.hasCoffee,
              gift: product.hasGift,
            }}
          />

          <RatingDisplay score={product.rating} reviewCount={product.reviewCount} />

          <DescriptionSection description={product.description} />

          <SizeSelector
            defaultSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </div>

        <div className="bottom-spacer" />

        <div className="bottom-action-bar">
          <PriceDisplay price={product.price} />
          <BuyButton onClick={handleBuyNow} />
        </div>
      </div>
    </div>
  )
}
