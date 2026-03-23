import { useCallback, useEffect, useState } from 'react'

import {
  fetchRecentlyViewedRecommendations,
  logRecentlyViewed,
} from '../services/recentlyViewed.js'

export function useRecentlyViewed({ userId, categoryId } = {}) {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)

  const reload = useCallback(async () => {
    if (!userId || !categoryId) {
      setRecommendations([])
      return
    }
    setLoading(true)
    try {
      const res = await fetchRecentlyViewedRecommendations({ userId, categoryId })
      setRecommendations(res)
    } finally {
      setLoading(false)
    }
  }, [categoryId, userId])

  useEffect(() => {
    reload()
  }, [reload])

  const logView = useCallback(
    async ({ productId }) => {
      if (!userId) return null
      return logRecentlyViewed({ userId, productId, categoryId })
    },
    [categoryId, userId],
  )

  return { recommendations, loading, reload, logView }
}

