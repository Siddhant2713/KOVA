import { Link } from 'react-router-dom'
import { FiTrash2, FiShoppingCart } from 'react-icons/fi'
import { useCompare } from '../../context/CompareContext.jsx'
import { useCartContext } from '../../context/CartContext.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import './Compare.css'

export default function Compare() {
  const { items, removeFromCompare, clearCompare } = useCompare()
  const { add } = useCartContext()
  const { user } = useAuth()

  if (items.length === 0) {
    return (
      <div className="kova-empty" style={{ margin: '80px auto', maxWidth: 400 }}>
        <h2>Compare List Empty</h2>
        <p>You haven't selected any products to compare.</p>
        <Link to="/products" className="kova-btn kova-btn--solid">Browse Products</Link>
      </div>
    )
  }

  return (
    <div className="kova-compare">
      <div className="kova-compare__header">
        <h1 className="kova-compare__title">Compare Products</h1>
        <button className="kova-btn kova-btn--ghost" onClick={clearCompare}>Clear List</button>
      </div>

      <div className="kova-compare__table-wrap">
        <table className="kova-compare__table">
          <thead>
            <tr>
              <th className="kova-compare__feature-col">Features</th>
              {items.map(product => (
                <th key={product.id} className="kova-compare__product-col">
                  <button className="kova-compare__remove" onClick={() => removeFromCompare(product.id)}>
                    <FiTrash2 /> Remove
                  </button>
                  <img src={product.image_url} alt={product.title} />
                  <h3><Link to={`/products/${product.id}`}>{product.title}</Link></h3>
                  <div className="kova-compare__price">${Number(product.price).toFixed(2)}</div>
                  <button
                    className="kova-btn kova-btn--solid kova-btn--sm kova-compare__add"
                    onClick={() => user ? add(product.id, 1) : alert("Login required")}
                  >
                    <FiShoppingCart /> Add
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="kova-compare__feature-col">Category</td>
              {items.map(product => (
                <td key={product.id} className="kova-compare__cell kova-compare__category">
                  {product.category}
                </td>
              ))}
            </tr>
            <tr>
              <td className="kova-compare__feature-col">Rating</td>
              {items.map(product => (
                <td key={product.id} className="kova-compare__cell">
                  {product.rating} / 5 ({product.rating_count} reviews)
                </td>
              ))}
            </tr>
            <tr>
              <td className="kova-compare__feature-col">Description</td>
              {items.map(product => (
                <td key={product.id} className="kova-compare__cell kova-compare__desc">
                  {product.description}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
