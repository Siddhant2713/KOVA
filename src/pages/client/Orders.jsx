import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { fetchUserOrders } from '../../services/orders.js'
import './Orders.css'

export default function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (user) {
        const data = await fetchUserOrders({ userId: user.id })
        setOrders(data)
      }
      setLoading(false)
    }
    load()
  }, [user])

  if (!user) {
    return (
      <div className="kova-empty" style={{ margin: '80px auto', maxWidth: 400 }}>
        <h2>Login Required</h2>
        <p>Please log in to view your order history.</p>
        <Link to="/login" className="kova-btn kova-btn--solid">Log In</Link>
      </div>
    )
  }

  return (
    <div className="kova-orders">
      <h1 className="kova-orders__title">Order History</h1>

      {loading ? (
        <div className="kova-loading">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="kova-empty">
          <p>You haven't placed any orders yet.</p>
          <Link to="/products" className="kova-btn kova-btn--solid">Start Shopping</Link>
        </div>
      ) : (
        <div className="kova-orders__list">
          {orders.map(o => (
            <div className="kova-order-card" key={o.id}>
              <div className="kova-order-card__header">
                <div>
                  <span className="kova-order-card__label">Order Placed</span>
                  <span className="kova-order-card__value">{new Date(o.created_at).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="kova-order-card__label">Total</span>
                  <span className="kova-order-card__value">${o.total.toFixed(2)}</span>
                </div>
                <div>
                  <span className="kova-order-card__label">Status</span>
                  <span className={`kova-order-badge kova-order-badge--${o.status}`}>
                    {o.status.toUpperCase()}
                  </span>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Link to={`/orders/${o.id}`} className="kova-order-card__view">View Details</Link>
                </div>
              </div>
              <div className="kova-order-card__body">
                Order ID: <span style={{ fontFamily: 'var(--mono)' }}>{o.id}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
