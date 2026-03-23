import { Link } from 'react-router-dom'
import { useWishlistContext } from '../../context/WishlistContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import './Wishlist.css'

export default function Wishlist() {
  const { user } = useAuth()
  const { items } = useWishlistContext()

  if (!user) {
    return (
      <div className="kova-empty" style={{ margin: '80px auto', maxWidth: 400 }}>
        <h2>Login Required</h2>
        <p>Please log in to view your wishlist.</p>
        <Link to="/login" className="kova-btn kova-btn--solid">Log In</Link>
      </div>
    )
  }

  if (!items || items.length === 0) {
    return (
      <div className="kova-wishlist-empty">
        <h2>Your Wishlist is Empty</h2>
        <p>Save items you love to revisit them later.</p>
        <Link to="/products" className="kova-btn kova-btn--solid">Explore Products</Link>
      </div>
    )
  }

  return (
    <div className="kova-wishlist">
      <h1 className="kova-wishlist__title">Your Wishlist ({items.length})</h1>
      <ProductGrid>
        {items.map(item => (
          item.products ? <ProductCard key={item.id} product={item.products} /> : null
        ))}
      </ProductGrid>
    </div>
  )
}
