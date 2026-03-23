# Kova — "Dressed in Silence"

Welcome to **Kova**, a full-stack luxury clothing and apparel digital storefront. 

Kova represents a complete architectural and aesthetic departure from traditional utilitarian e-commerce platforms. Inspired by high-end fashion houses like *Bottega Veneta*, *Loro Piana*, and *The Row*, Kova is built to deliver an atmosphere-first, editorial browsing experience. It combines a warm, minimalist UI with a robust, data-dense administrative backbone.

---

## 🏛️ Architecture & Tech Stack

Kova is built on a modern, decoupled React frontend powered by a Supabase backend.

- **Frontend Core**: React 18, Vite, React Router DOM (v6.22)
- **Styling Architecture**: Tailwind CSS (v3) + PostCSS + Framer Motion
- **Database & Backend**: Supabase (PostgreSQL, Row Level Security, Supabase Auth, Storage)
- **State Management**: React Context API (`AuthContext`, `CartContext`, `WishlistContext`, `ThemeContext`, `CompareContext`)
- **Icons & Typography**: `react-icons`, *Cormorant Garamond* (Display), *DM Sans* (Body)

## 🎨 Design System: The V2 Pivot

The storefront operates strictly on a custom luxury design system defined in `tailwind.config.js` and `index.css`:
- **Palette**: Avoids pure black/white/blue. Utilizes curated warm tones: `Ivory`, `Parchment`, `Silk` (borders), `Warmgray`, `Charcoal`, and `Obsidian`.
- **Typography**: Heavily features tracked-out (wide) uppercase labels (`tracking-luxury`), sentence-case serif headings, and sharp, geometric elements.
- **Geometry**: All borders and radii are strictly `rounded-none`.
- **Dynamic Theming**: Flawless Dark Mode toggle that logically maps `cream` and `obsidian` elements to invert properties globally, backed by `ThemeContext`.

## 🛍️ Features

### Core Storefront (Client)
- **Editorial UI**: Split-screen authenticated views, infinite scrolling marquees, and rich grid layouts (Aspect Ratio 3/4 mapping).
- **Product Discovery**: Dynamic Search, Categorical filtering, fully functional **Wishlist** and **Compare** tables.
- **Cart & Checkout**: Drawer-based Cart implementation with simulated checkout workflows.
- **Personalization**: "Recently Viewed" algorithms mapping localized user history via Supabase `upsert` hooks.
- **Order History**: Customers can track their placed orders, view shipment statuses visually via badge mapping, and view invoice breakdowns.

### The Dashboard (Admin)
The administrative backend is structurally segregated beneath an `<AdminLayout />` shell. It features a stark, high-contrast, data-dense interface explicitly optimized for management, not discovery.
- **Role-Based Access (RLS)**: Protected behind `RequireAdmin` wrappers and Supabase DB-level security.
- **Business Analytics**: Real-time aggregation of Total Revenue, Order counts, Customer Growth, and Low-Stock warnings via parallel Supabase indexing.
- **Product Management**: Full CRUD interface. Upload high-res staging imagery directly to Supabase Storage arrays.
- **Order Processing**: Track, fulfill, status-switch (`pending` -> `shipped` -> `delivered`), and intelligently monitor financial flows.
- **Taxonomy Oversight**: Automatic URL slug-generation for categorical tags.

---

## 🛠️ Local Setup & Deployment

1. **Clone the project**
   ```bash
   git clone https://github.com/Siddhant2713/KOVA.git
   cd KOVA
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file referencing the provided `.env.example`:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Initialize Database Schema**
   Execute these SQL files in your Supabase project's SQL Editor in this exact order:
   - Run `supabase_schema.sql` first (instantiates tables + basic public RLS policies).
   - Run `supabase/rls.sql` second (establishes the `is_admin()` function and all Admin write policies).
   - Run `supabase/storage.sql` third (configures the product-images bucket policies).

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173`. 
   
> **Note on Admin Access**: The storefront routes directly into the client shell. To access the dashboard locally, you must log in with designated admin credentials or manually update a user's role to `'admin'` within the Supabase `profiles` table to bypass the routing middleware.

## 📝 License
Proprietary. All rights reserved.
