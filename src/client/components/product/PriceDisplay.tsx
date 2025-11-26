interface PriceDisplayProps {
  price: number
  currency?: string
}

export function PriceDisplay({ price, currency = '$' }: PriceDisplayProps) {
  return (
    <div className="price-display">
      <p className="price-label">Price</p>
      <p className="price-amount">
        {currency} {price.toFixed(2)}
      </p>
    </div>
  )
}
