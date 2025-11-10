import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  original_price: number | null;
  image_url: string;
  category: string;
  subcategory: string;
  rating: number;
  review_count: number;
  in_stock: boolean;
  stock_price: number | null;
  preorder_price: number | null;
  created_at: string;
  updated_at: string;
}
