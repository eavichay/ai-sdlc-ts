import { Entity, Fields } from 'remult'

@Entity('products', {
  allowApiCrud: true,
})
export class Product {
  @Fields.cuid()
  id = ''

  @Fields.string()
  name = ''

  @Fields.string()
  description = ''

  @Fields.number()
  price = 0

  @Fields.number()
  rating = 0

  @Fields.number()
  reviewCount = 0

  @Fields.string()
  temperature: 'Ice' | 'Hot' = 'Hot'

  @Fields.string()
  image = ''

  @Fields.boolean()
  hasSpicy = false

  @Fields.boolean()
  hasCoffee = false

  @Fields.boolean()
  hasGift = false

  @Fields.createdAt()
  createdAt = new Date()

  @Fields.updatedAt()
  updatedAt = new Date()
}
