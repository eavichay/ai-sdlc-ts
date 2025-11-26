interface ProductImageProps {
  src: string
  alt: string
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="product-image-container">
      <img src={src} alt={alt} className="product-image" />
    </div>
  )
}
