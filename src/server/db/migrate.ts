import { SqlDatabase } from 'remult'
import { PostgresDataProvider } from 'remult/postgres'
import { pool } from './connection'

/**
 * Database Migration Runner
 *
 * This script creates or updates database tables based on Remult entity definitions.
 * Run the generated SQL files manually or use this script to execute migrations.
 */

async function migrate() {
  console.log('🔄 Starting database migration...')

  try {
    const dataProvider = new SqlDatabase(new PostgresDataProvider(pool))

    // Create tasks table
    console.log('📊 Creating/updating tables...')

    const sql = `
      -- Create table for Task entity
      CREATE TABLE IF NOT EXISTS "tasks" (
        "id" TEXT PRIMARY KEY,
        "title" TEXT NOT NULL,
        "description" TEXT,
        "completed" BOOLEAN NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- Add indexes for performance
      CREATE INDEX IF NOT EXISTS "idx_tasks_completed" ON "tasks" ("completed");
      CREATE INDEX IF NOT EXISTS "idx_tasks_createdAt" ON "tasks" ("createdAt");

      -- Create table for Product entity
      CREATE TABLE IF NOT EXISTS "products" (
        "id" TEXT PRIMARY KEY,
        "name" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "price" NUMERIC(10, 2) NOT NULL DEFAULT 0,
        "rating" NUMERIC(3, 2) NOT NULL DEFAULT 0,
        "reviewCount" INTEGER NOT NULL DEFAULT 0,
        "temperature" TEXT NOT NULL DEFAULT 'Hot',
        "image" TEXT NOT NULL,
        "hasSpicy" BOOLEAN NOT NULL DEFAULT false,
        "hasCoffee" BOOLEAN NOT NULL DEFAULT false,
        "hasGift" BOOLEAN NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- Add indexes for Product
      CREATE INDEX IF NOT EXISTS "idx_products_name" ON "products" ("name");
      CREATE INDEX IF NOT EXISTS "idx_products_rating" ON "products" ("rating");
      CREATE INDEX IF NOT EXISTS "idx_products_price" ON "products" ("price");
      CREATE INDEX IF NOT EXISTS "idx_products_createdAt" ON "products" ("createdAt");

      -- Create or replace function to update updatedAt timestamp
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."updatedAt" = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;

      -- Create trigger for Task
      DROP TRIGGER IF EXISTS update_tasks_updated_at ON "tasks";
      CREATE TRIGGER update_tasks_updated_at
        BEFORE UPDATE ON "tasks"
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();

      -- Create trigger for Product
      DROP TRIGGER IF EXISTS update_products_updated_at ON "products";
      CREATE TRIGGER update_products_updated_at
        BEFORE UPDATE ON "products"
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `

    await dataProvider.execute(sql)

    console.log('✅ Migration completed successfully!')
    console.log('\nTables created/updated:')
    console.log('  - tasks')
    console.log('  - products')

    await pool.end()
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    await pool.end()
    process.exit(1)
  }
}

migrate()
