import { useCallback, useEffect, useState } from 'react'

import {
  fetchWishlistItems,
  isProductWishlisted,
  toggleWishlistItem,
} from '../services/wishlist.js'

export function useWishlist(userId) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const reload = useCallback(async () => {
    if (!userId) {
      setItems([])
      return
    }
    setLoading(true)
    try {
      const res = await fetchWishlistItems({ userId })
      setItems(res)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    reload()
  }, [reload])

  const toggle = useCallback(
    async (productId) => {
      if (!userId) return
      setLoading(true)
      try {
        await toggleWishlistItem({ userId, productId })
        await reload()
      } finally {
        setLoading(false)
      }
    },
    [reload, userId],
  )

  const isWishlisted = useCallback(
    async (productId) => {
      if (!userId) return false
      return isProductWishlisted({ userId, productId })
    },
    [userId],
  )

  return { items, loading, reload, toggle, isWishlisted }
}

