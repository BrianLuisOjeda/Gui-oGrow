import {createContext, useState} from 'react'

export const CartContext = createContext([]);

function CartContextProvider({ children }){

    const [cartList, setCartList] = useState([])

    const agregarProducto = (item) =>{
        setCartList( [...cartList, item] )
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
        
    )
}

export default CartContextProvider
/*
function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    
    const agregarProducto=(item)=>{
        setCart([...cart, item])
        console.log(cart)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            agregarProducto,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}


export default CartContextProvider
*/