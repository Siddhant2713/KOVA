import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchOrderDetails } from '../../services/orders.js'
import './Orders.css'

export default function OrderDetail() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const data = await fetchOrderDetails(id)
      setOrder(data)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <div className="kova-loading">Loading order details...</div>

  if (!order) return (
    <div className="kova-empty" style={{ margin: '80px auto', maxWidth: 400 }}>
      <h2>Order Not Found</h2>
      <p>We could not find the details for this order.</p>
      <Link to="/orders" className="kova-btn kova-btn--solid">Back to Orders</Link>
    </div>
  )

  return (
    <div className="kova-orders">
      <div style={{ marginBottom: 32 }}>
        <Link to="/orders" style={{ textDecoration: 'none', color: 'var(--text)', opacity: 0.8, fontWeight: 500 }}>
          &larr; Back to Order History
        </Link>
      </div>

      <h1 className="kova-orders__title" style={{ marginBottom: 24, paddingBottom: 0, borderBottom: 'none' }}>
        Order Details
      </h1>
      <p style={{ fontFamily: 'var(--mono)', fontSize: 14, opacity: 0.6, marginBottom: 40 }}>ID: {order.id}</p>

      <div className="kova-order-card">
        <div className="kova-order-card__header" style={{ background: 'transparent' }}>
          <div>
            <span className="kova-order-card__label">Order Placed</span>
            <span className="kova-order-card__value">{new Date(order.created_at).toLocaleDateString()}</span>
          </div>
          <div>
            <span className="kova-order-card__label">Total</span>
            <span className="kova-order-card__value">${order.total.toFixed(2)}</span>
          </div>
          <div>
            <span className="kova-order-card__label">Status</span>
            <span className={`kova-order-badge kova-order-badge--${order.status}`}>
              {order.status.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="kova-order-card__body" style={{ padding: 0 }}>
          <div style={{ padding: '24px 24px 16px 24px', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: 16, marginBottom: 16 }}>Items Included</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {order.order_items?.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <img src={item.products?.image_url} alt="" style={{ width: 60, height: 60, objectFit: 'contain', background: '#fff', borderRadius: 8, border: '1px solid var(--border)', mixBlendMode: 'multiply' }} />
                  <div style={{ flex: 1 }}>
                    <Link to={`/products/${item.product_id}`} style={{ fontWeight: 600, color: 'var(--text-h)', textDecoration: 'none' }}>
                      {item.products?.title}
                    </Link>
                    <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>Qty: {item.quantity}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontWeight: 600 }}>
                    ${(item.quantity * item.price_at_purchase).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, width: 300, marginLeft: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
              <span>Subtotal</span><span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.8 }}>
              <span>Tax</span><span>${order.tax.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 18, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
              <span>Total</span><span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
