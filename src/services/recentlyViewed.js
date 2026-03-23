import { supabase } from '../lib/supabaseClient.js'

export async function logRecentlyViewed({ userId, productId, categoryId }) {
  if (!supabase) return null
  return null
}

export async function fetchRecentlyViewedRecommendations({ userId, categoryId }) {
  if (!supabase) return []
  return []
}

