import { useCallback, useMemo, useState } from 'react'

export function useCompare() {
  const [items, setItems] = useState([]) // max 3 products

  const add = useCallback((product) => {
    setItems((prev) => {
      if (!product) return prev
      const exists = prev.some((p) => p.id === product.id)
      if (exists) return prev

      const next = [...prev, product]
      return next.slice(-3)
    })
  }, [])

  const remove = useCallback((productId) => {
    setItems((prev) => prev.filter((p) => p.id !== productId))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const map = useMemo(() => items, [items])

  return { items: map, add, remove, clear }
}

