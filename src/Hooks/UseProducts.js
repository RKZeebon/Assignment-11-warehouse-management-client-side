import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://guarded-gorge-33419.herokuapp.com/products')
            const data = await response.json()
            setProducts(data)

        }
        fetchData()
    }, [])

    return [products, setProducts]
}

export default useProducts;