import { useCallback, useEffect, useState } from 'react'
import {
    fetchAllProductsAdmin,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadProductImage,
} from '../services/admin.js'

export function useAdminProducts() {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const reload = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetchAllProductsAdmin({ search })
            setProducts(res.products)
            setTotal(res.total)
        } finally {
            setLoading(false)
        }
    }, [search])

    useEffect(() => {
        reload()
    }, [reload])

    const create = useCallback(async (product) => {
        const result = await createProduct({ product })
        if (result) await reload()
        return result
    }, [reload])

    const update = useCallback(async (id, updates) => {
        const result = await updateProduct({ id, updates })
        if (result) await reload()
        return result
    }, [reload])

    const remove = useCallback(async (id) => {
        const success = await deleteProduct({ id })
        if (success) await reload()
        return success
    }, [reload])

    const uploadImage = useCallback(async (file) => {
        return uploadProductImage({ file })
    }, [])

    return {
        products, total, loading,
        search, setSearch,
        reload, create, update, remove, uploadImage,
    }
}
