-- KOVA V2: Expanded Luxury Catalog DB Reset & Seed
-- Run this deeply inside your Supabase SQL Editor.
-- WARNING: This will fiercely purge all existing products, categories, cart_items, and order_items!

-- 1. Wipe all existing data (Cascade handles foreign keys gracefully)
TRUNCATE TABLE categories CASCADE;
TRUNCATE TABLE products CASCADE;

-- 2. Establish Luxury Categories
INSERT INTO categories (name, slug) VALUES
  ('Women''s Ready-to-Wear', 'womens-rtw'),
  ('Men''s Ready-to-Wear', 'mens-rtw'),
  ('Leather Goods & Handbags', 'handbags'),
  ('Fine Accessories', 'accessories');

-- 3. Seed Expanded Luxury Product Catalog
INSERT INTO products (title, description, price, category, image_url, rating, rating_count, is_featured)
VALUES
  -- Women's RTW
  (
    'Oversized Cashmere Turtleneck Knit',
    'Spun from exceptionally soft, heavyweight Mongolian cashmere. This oversized knit features a dramatic exaggerated neckline and drop shoulders, wrapping the body in an architectural cocoon of pure comfort. Hand-finished in Italy. Dry clean only.',
    1250.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1500&auto=format&fit=crop',
    4.9,
    14,
    true
  ),
  (
    'Silk Georgette Evening Gown',
    'A masterwork of fluid draping. This floor-sweeping gown is bias-cut from heavy silk georgette, designed to move like liquid around the body. Features an asymmetrical neckline and a deep, open back.',
    4100.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1500&auto=format&fit=crop',
    5.0,
    5,
    true
  ),
  (
    'Tailored Wool Crepe Trousers',
    'Impeccably sharply tailored trousers crafted from heavy wool crepe. Features a staggering high waist and a wide, flowing leg silhouette that pools elegantly at the floor. Complete with tonal silk lining.',
    950.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1500&auto=format&fit=crop',
    4.8,
    32,
    false
  ),
  (
    'Asymmetric Ribbed Mohair Sweater',
    'A delightfully textured offering of brushed silk and mohair blend. The ribbed construction is warped asymmetrically across the torso, exposing a single shoulder in a raw but elegant drape.',
    1100.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1500&auto=format&fit=crop',
    4.7,
    18,
    false
  ),
  (
    'Structured Double-Faced Wool Camel Coat',
    'The quintessential luxury layering piece. Completely unlined and meticulously finished by hand, this double-faced wool coat features a generous tie belt and exaggerated storm flaps. Timeless architecture.',
    3400.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1500&auto=format&fit=crop',
    4.9,
    27,
    true
  ),
  (
    'Pleated Silk Midi Skirt',
    'Fluid and airy, this midi skirt is crafted from pure silk habotai. Knife pleats offer rigid structure to an otherwise weightless garment, producing brilliant kinetic movement when walking.',
    1050.00,
    'womens-rtw',
    'https://images.unsplash.com/photo-1583391733958-d25e07fac044?q=80&w=1500&auto=format&fit=crop',
    4.5,
    11,
    false
  ),

  -- Men's RTW
  (
    'Structured Wool Gabardine Blazer',
    'A masterclass in sharp tailoring. Woven from dense virgin wool gabardine, this blazer features sculpted shoulders, a defined waist, and tonal silk lining. An authoritative silhouette rooted in minimalist tradition.',
    2890.00,
    'mens-rtw',
    'https://images.unsplash.com/photo-1593030103066-0093718efce9?q=80&w=1500&auto=format&fit=crop',
    5.0,
    8,
    false
  ),
  (
    'Double-Breasted Cashmere Overcoat',
    'The ultimate outerwear statement piece. Constructed from double-faced cashmere offering unparalleled warmth without excessive weight. Features peak lapels, horn buttons, and an elegant trailing hem. Tailored in London.',
    5600.00,
    'mens-rtw',
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1500&auto=format&fit=crop',
    4.9,
    11,
    true
  ),
  (
    'Heavyweight Silk Camp-Collar Shirt',
    'Cut from exceptionally heavy 30mm silk twill. This short-sleeve camp collar shirt drapes luxuriously heavily against the body, offering a relaxed but undeniably opulent summer aesthetic.',
    980.00,
    'mens-rtw',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1500&auto=format&fit=crop',
    4.8,
    44,
    false
  ),
  (
    'Chunky Alpaca Blend Cardigan',
    'A violently textured knit featuring a deeply plunged V-neck and oversized horn buttons. Woven from a blend of raw alpaca hair and virgin wool for an intentionally distressed luxury finish.',
    1400.00,
    'mens-rtw',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1500&auto=format&fit=crop',
    4.6,
    21,
    false
  ),
  (
    'Technical Silk Bomber Jacket',
    'A hybrid bridging utilitarian function and absolute luxury. The exterior is milled from water-repellent technical silk, packed with lightweight down, and finished with heavy ruthenium hardware.',
    2400.00,
    'mens-rtw',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1500&auto=format&fit=crop',
    4.9,
    19,
    true
  ),

  -- Handbags
  (
    'The Obsidian Minimalist Tote',
    'Crafted from seamless full-grain calfskin leather with absolutely zero visible hardware or branding. The interior is lined with suede and features a single floating pocket. It embodies quiet luxury and utilitarian elegance.',
    3200.00,
    'handbags',
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1500&auto=format&fit=crop',
    4.8,
    22,
    true
  ),
  (
    'Woven Leather Envelope Clutch',
    'An intricate display of artisanal craftsmanship. Constructed using a complex intrecciato woven technique over supple lambskin. Slim, entirely unbranded, and perfectly sized for evening essentials.',
    1850.00,
    'handbags',
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1500&auto=format&fit=crop',
    4.7,
    19,
    false
  ),
  (
    'Structured Top-Handle Calfskin Bag',
    'Architecturally rigid and aggressively elegant. Cut from French calfskin and detailed with a single geometric brass clasp. Operates equally well as a sharp daytime carry or strict evening piece.',
    4100.00,
    'handbags',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1500&auto=format&fit=crop',
    5.0,
    33,
    true
  ),
  (
    'Suede Slouchy Hobo Bag',
    'A juxtaposition of soft structure and cavernous utility. Fully crafted from buttery tobacco suede with an extra-wide strap designed to fuse seamlessly onto the shoulder. Unlined interior showcases the leather purity.',
    2800.00,
    'handbags',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1500&auto=format&fit=crop',
    4.8,
    41,
    false
  ),
  (
    'Grained Leather Crossbody Pouch',
    'The ultimate hands-free accessory. Deeply textured grained leather forged into a razor-thin rectangular pouch. Accommodates only the absolute essentials: a phone, cards, and keys.',
    1200.00,
    'handbags',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1500&auto=format&fit=crop',
    4.6,
    55,
    false
  ),
  (
    'Sculptural Minaudière',
    'Part evening bag, part contemporary art. Forged from crushed mirrored brass, this hard-shell clutch reflects its surroundings beautifully and fastens with an invisible magnetic snap.',
    2950.00,
    'handbags',
    'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1500&auto=format&fit=crop',
    4.9,
    14,
    true
  ),

  -- Accessories
  (
    'Tortoiseshell Acetate Sunglasses',
    'Sculpted from a single block of premium Italian acetate and hand-polished for 72 hours. Features perfectly flat dark lenses offering 100% UV protection and a heavy, satisfying architectural weight.',
    450.00,
    'accessories',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1500&auto=format&fit=crop',
    4.6,
    31,
    false
  ),
  (
    'Brushed Silver Cuff Bracelet',
    'Forged from heavy solid 925 sterling silver with a brutally raw, brushed industrial finish. The cuff is ergonomically asymmetrical to rest perfectly on the wrist bone. A quiet but heavy statement.',
    890.00,
    'accessories',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1500&auto=format&fit=crop',
    4.8,
    42,
    false
  ),
  (
    'Heavy Gold Link Chain Necklace',
    'A solid 18k yellow gold heavy link chain. The interlocking rings are flattened manually to ensure it sits perfectly flush against the collarbone. Secures via a hidden cylindrical latch.',
    3200.00,
    'accessories',
    'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1500&auto=format&fit=crop',
    4.9,
    18,
    true
  ),
  (
    'Ribbed Cashmere Fringe Scarf',
    'A colossal, enveloping scarf woven in Scotland from double-ply cashmere. Finished with elongated, hand-knotted fringing. Offers incomparable insulation and soft editorial volume.',
    650.00,
    'accessories',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1500&auto=format&fit=crop',
    4.7,
    63,
    false
  ),
  (
    'Classic Leather Dress Belt',
    'Understated perfection. Cut from French box calfskin and detailed with a palladium-plated, square-edged buckle. The reverse side is lined in warm nubuck for structural longevity.',
    480.00,
    'accessories',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1500&auto=format&fit=crop',
    4.5,
    88,
    false
  ),
  (
    'Sculptural Brass Drop Earrings',
    'Organically formed hollow brass drops that mimic the erratic flow of molten metal. Surprisingly lightweight despite their dominating visual footprint. Plated in 24k gold.',
    720.00,
    'accessories',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1500&auto=format&fit=crop',
    4.8,
    49,
    false
  );
