import { Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext.jsx'

export default function RequireAdmin({ children }) {
  const { user, isAdmin, loading } = useAuth()

  if (loading) return null
  if (!user) return <Navigate to="/login" replace />

  if (!isAdmin) {
    return (
      <div style={{ padding: 24 }}>
        <h1 style={{ margin: 0 }}>Access denied</h1>
        <p style={{ marginTop: 8 }}>You need admin access to view this page.</p>
      </div>
    )
  }

  return children
}

