import { Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from '../components/layout/AppLayout.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import RequireAdmin from './RequireAdmin.jsx'

// Client pages
import Home from '../pages/client/Home.jsx'
import Products from '../pages/client/Products.jsx'
import ProductDetail from '../pages/client/ProductDetail.jsx'
import Cart from '../pages/client/Cart.jsx'
import Wishlist from '../pages/client/Wishlist.jsx'
import Checkout from '../pages/client/Checkout.jsx'
import Compare from '../pages/client/Compare.jsx'
import Orders from '../pages/client/Orders.jsx'
import OrderDetail from '../pages/client/OrderDetail.jsx'
import Login from '../pages/client/Login.jsx'
import Register from '../pages/client/Register.jsx'

// Admin pages
import Dashboard from '../pages/admin/Dashboard.jsx'
import ProductsAdmin from '../pages/admin/ProductsAdmin.jsx'
import OrdersAdmin from '../pages/admin/OrdersAdmin.jsx'
import CustomersAdmin from '../pages/admin/CustomersAdmin.jsx'
import CategoriesAdmin from '../pages/admin/CategoriesAdmin.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
        <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="compare" element={<Compare />} />
        <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="orders/:id" element={<ProtectedRoute><OrderDetail /></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="admin" element={<RequireAdmin><Dashboard /></RequireAdmin>} />
        <Route
          path="admin/products"
          element={<RequireAdmin><ProductsAdmin /></RequireAdmin>}
        />
        <Route path="admin/orders" element={<RequireAdmin><OrdersAdmin /></RequireAdmin>} />
        <Route
          path="admin/customers"
          element={<RequireAdmin><CustomersAdmin /></RequireAdmin>}
        />
        <Route
          path="admin/categories"
          element={<RequireAdmin><CategoriesAdmin /></RequireAdmin>}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

