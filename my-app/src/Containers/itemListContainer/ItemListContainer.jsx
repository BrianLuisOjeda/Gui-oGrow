import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import getFirestore from '../../firebase'
import ItemList from '../ItemList'
import Loading from '../../assets/Loading'
import NavegacionInter from '../navegacionInter/NavegacionInter'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {Auto, Fem, CBD} = useParams();

    useEffect(() => {
        const db = getFirestore()
        
        if (Auto) {
            const dbQuery = db.collection('productos')
            const productosAutos = dbQuery.where('tipo','==', Auto)
            productosAutos.get()
            .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(setLoading(false))
            
        }else if(Fem){
            const dbQuery = db.collection('productos')
            const productosAutos = dbQuery.where('tipo','==', Fem)
            productosAutos.get()
            .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(setLoading(false))
        }else if(CBD){
            const dbQuery = db.collection('productos')
            const productosAutos = dbQuery.where('CBD','==', 'Medicinal')
            productosAutos.get()
            .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(setLoading(false))
        }else {
            const dbQuery = db.collection('productos')
            dbQuery.get()
            .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch(error => console.log(error))
            .finally(setLoading(false))
        }
    }, [Auto, Fem, CBD])
    console.log(products)

    return (
        <div className='itemListContainer'>
            <div className="containerNavegacionInter">
                <Link to='/SeedStockers/Auto'>
                    <NavegacionInter titulo='Auto'/>
                </Link>
                <Link to='/SeedStockers/Fem'>
                    <NavegacionInter titulo='Fem'/>
                </Link>
                <Link to='/SeedStockers/CBD'>
                    <NavegacionInter titulo='CBD'/>
                </Link>
            <NavegacionInter titulo='Fast'/>
            </div>
            {loading ? 
            <Loading/> :
             <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer
