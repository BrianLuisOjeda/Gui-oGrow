import React from 'react'
import ItemList from '../ItemList'
import Loading from '../../assets/Loading'
import { useEffect, useState } from 'react'
import getFirestore from '../../firebase'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos')
        dbQuery.get()
            .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log('error'))
            .finally(setLoading(false))
    }, [])
    console.log(products)

    return (
        <div className='itemListContainer'>
            {loading ? <Loading/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
