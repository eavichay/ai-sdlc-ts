import { remult } from 'remult'
import { SqlDatabase } from 'remult'
import { PostgresDataProvider } from 'remult/postgres'
import { pool } from './connection'
import { Product } from '../../shared/entities/Product'

async function seedProducts() {
  // Initialize Remult with database connection
  remult.dataProvider = new SqlDatabase(new PostgresDataProvider(pool))

  const productRepo = remult.repo(Product)

  // Sample products to seed
  const sampleProducts = [
    {
      name: 'Cappuccino',
      description:
        'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The foam on top makes it a perfect morning drink with a smooth, creamy texture.',
      price: 4.53,
      rating: 4.8,
      reviewCount: 230,
      temperature: 'Hot' as const,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop',
      hasSpicy: false,
      hasCoffee: true,
      hasGift: true,
    },
    {
      name: 'Iced Latte',
      description:
        'Refreshing iced latte made with premium espresso and cold milk poured over ice. Perfect for hot summer days when you need a cool caffeine boost.',
      price: 5.25,
      rating: 4.6,
      reviewCount: 189,
      temperature: 'Ice' as const,
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
      hasSpicy: false,
      hasCoffee: true,
      hasGift: false,
    },
    {
      name: 'Spicy Mocha',
      description:
        'Rich chocolate mocha with a kick of spice. Made with dark chocolate, espresso, steamed milk, and a hint of cayenne pepper for an adventurous taste.',
      price: 5.99,
      rating: 4.4,
      reviewCount: 156,
      temperature: 'Hot' as const,
      image: 'https://images.unsplash.com/photo-1578374173705-0955808e9bdb?w=400&h=300&fit=crop',
      hasSpicy: true,
      hasCoffee: true,
      hasGift: true,
    },
  ]

  console.log('Seeding products...')

  for (const productData of sampleProducts) {
    const existing = await productRepo.findFirst({ name: productData.name })
    if (!existing) {
      await productRepo.insert(productData)
      console.log(`✓ Created product: ${productData.name}`)
    } else {
      console.log(`- Product already exists: ${productData.name}`)
    }
  }

  console.log('✅ Product seeding completed!')
  await pool.end()
}

seedProducts().catch((error) => {
  console.error('Error seeding products:', error)
  process.exit(1)
})
