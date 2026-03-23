-- Kova schema (template)
-- Run this in Supabase SQL editor (or via migrations) before applying RLS policies.

create extension if not exists "pgcrypto";

-- Categories managed by admin
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

-- Extends auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_url text,
  role text not null default 'customer',
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  category_id uuid references public.categories (id) on delete set null,
  image_url text,

  price numeric(12, 2) not null default 0,
  rating_avg numeric(4, 2) not null default 0,
  rating_count integer not null default 0,

  is_new boolean not null default false,
  is_best_seller boolean not null default false,
  discount_percent integer not null default 0,

  created_at timestamptz not null default now()
);

-- Cart (user-owned)
create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete restrict,

  quantity integer not null default 1 check (quantity > 0),
  price_snapshot numeric(12, 2) not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (user_id, product_id)
);

-- Wishlist (user-owned)
create table if not exists public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete restrict,

  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

-- Orders (user-owned)
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,

  status text not null default 'pending', -- pending/paid/shipped/cancelled/fulfilled
  subtotal numeric(12, 2) not null default 0,
  tax numeric(12, 2) not null default 0,
  total numeric(12, 2) not null default 0,

  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,

  product_id uuid references public.products (id) on delete set null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12, 2) not null default 0,

  title_snapshot text not null default '',
  image_url_snapshot text,

  created_at timestamptz not null default now()
);

-- Reviews (user-owned)
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete cascade,

  rating integer not null check (rating >= 1 and rating <= 5),
  title text,
  body text not null default '',

  helpful_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (user_id, product_id)
);

-- Recently viewed (user-owned)
create table if not exists public.recently_viewed (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete cascade,
  category_id uuid references public.categories (id) on delete set null,

  viewed_at timestamptz not null default now(),

  unique (user_id, product_id)
);

