import { useCallback, useEffect, useState } from 'react'

import { fetchProducts } from '../services/products.js'

export function useProducts({ categoryId, minPrice, maxPrice, sort, search, isFeatured, limit } = {}) {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetchProducts({ categoryId, minPrice, maxPrice, sort, search, isFeatured, limit })
      setProducts(res.products)
      setTotal(res.total)
    } finally {
      setLoading(false)
    }
  }, [categoryId, maxPrice, minPrice, search, sort, isFeatured, limit])

  useEffect(() => {
    load()
  }, [load])

  return { products, total, loading, reload: load }
}

