import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [isReload, setIsReload] = useState(false)
    useEffect(() => {
        fetch('https://guarded-gorge-33419.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isReload])

    return { products, setProducts, isReload, setIsReload }
}

export default useProducts;