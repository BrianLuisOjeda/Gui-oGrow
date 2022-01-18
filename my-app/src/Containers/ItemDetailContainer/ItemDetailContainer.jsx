import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getFirestore from '../../firebase'
import Loading from '../../assets/Loading'
import ItemDetail from './ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('productos')
        const productoEncontrado = dbQuery.doc(idProduct)
        productoEncontrado.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('este item no existe')
                }
                setProduct({ id: doc.id, ...doc.data() })
            })
            .catch((error) => {
                console.log('error buscando el item solicitado', error)
            })
            .finally(setLoading(false))

    }, [idProduct])

    return (
        <>
            <div className='itemDetailContainer'>
                {loading ? <Loading className="loading" /> : <ItemDetail product={product} />}
            </div>
        </>
    )
}

export default ItemDetailContainer
