-- Migration: Add products table
-- Created: 2025-11-26

-- Create table for Product
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

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS "idx_products_name" ON "products" ("name");
CREATE INDEX IF NOT EXISTS "idx_products_rating" ON "products" ("rating");
CREATE INDEX IF NOT EXISTS "idx_products_price" ON "products" ("price");
CREATE INDEX IF NOT EXISTS "idx_products_createdAt" ON "products" ("createdAt");

-- Add trigger for updatedAt (reuse existing function)
DROP TRIGGER IF EXISTS update_products_updated_at ON "products";
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON "products"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
