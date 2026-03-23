import { useCallback, useEffect, useState } from 'react'

import {
  addCartItem,
  fetchCartItems,
  removeCartItem,
  updateCartItemQty,
} from '../services/cart.js'

export function useCart(userId) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const reload = useCallback(async () => {
    if (!userId) {
      setItems([])
      return
    }
    setLoading(true)
    try {
      const res = await fetchCartItems({ userId })
      setItems(res)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    reload()
  }, [reload])

  const add = useCallback(
    async (productId, quantity = 1) => {
      if (!userId) return
      setLoading(true)
      try {
        await addCartItem({ userId, productId, quantity })
        await reload()
      } finally {
        setLoading(false)
      }
    },
    [reload, userId],
  )

  const updateQty = useCallback(
    async (productId, quantity) => {
      if (!userId) return
      setLoading(true)
      try {
        await updateCartItemQty({ userId, productId, quantity })
        await reload()
      } finally {
        setLoading(false)
      }
    },
    [reload, userId],
  )

  const remove = useCallback(
    async (productId) => {
      if (!userId) return
      setLoading(true)
      try {
        await removeCartItem({ userId, productId })
        await reload()
      } finally {
        setLoading(false)
      }
    },
    [reload, userId],
  )

  return { items, loading, reload, add, updateQty, remove }
}

