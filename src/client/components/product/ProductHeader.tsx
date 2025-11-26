import { SpicyIcon } from '../icons/SpicyIcon'
import { CoffeeBeanIcon } from '../icons/CoffeeBeanIcon'
import { GiftIcon } from '../icons/GiftIcon'

interface ProductHeaderProps {
  name: string
  temperature: 'Ice' | 'Hot'
  features?: {
    spicy?: boolean
    coffee?: boolean
    gift?: boolean
  }
}

export function ProductHeader({
  name,
  temperature,
  features = {},
}: ProductHeaderProps) {
  return (
    <div className="product-info">
      <h2 className="product-name">{name}</h2>
      <p className="product-temperature">{temperature}</p>
      <div className="product-features">
        {features.spicy && (
          <div className="feature-icon" title="Spicy">
            <SpicyIcon />
          </div>
        )}
        {features.coffee && (
          <div className="feature-icon" title="Coffee">
            <CoffeeBeanIcon />
          </div>
        )}
        {features.gift && (
          <div className="feature-icon" title="Gift">
            <GiftIcon />
          </div>
        )}
      </div>
    </div>
  )
}
