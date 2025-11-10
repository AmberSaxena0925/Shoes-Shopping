/*
  # Create products table for e-commerce

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `brand` (text) - Product brand
      - `price` (numeric) - Current price
      - `original_price` (numeric) - Original price (for discounts)
      - `image_url` (text) - Main product image
      - `category` (text) - Product category
      - `subcategory` (text) - Product subcategory
      - `rating` (numeric) - Average rating
      - `review_count` (integer) - Number of reviews
      - `in_stock` (boolean) - Stock availability
      - `stock_price` (numeric) - In stock price variant
      - `preorder_price` (numeric) - Pre-order price variant
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (products are viewable by everyone)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  brand text NOT NULL,
  price numeric NOT NULL,
  original_price numeric,
  image_url text NOT NULL,
  category text NOT NULL DEFAULT '',
  subcategory text NOT NULL DEFAULT '',
  rating numeric DEFAULT 0,
  review_count integer DEFAULT 0,
  in_stock boolean DEFAULT true,
  stock_price numeric,
  preorder_price numeric,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);