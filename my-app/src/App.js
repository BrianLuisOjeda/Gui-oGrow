import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Context/CartContext'
import Navbar from './components/NavBar';
import Home from './Containers/Home/Home';
import Contacto from './Containers/Contacto/Contacto'
import ItemListContainer from './Containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './Containers/Cart/Cart'


function App() {

  return (
    <>
        <CartContextProvider>
        <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={ <Home/> } />
                    <Route exact path='/Contacto' element={ <Contacto/> } />
                    <Route exact path='/Cart' element={ <Cart/> } />
                    <Route exact path='/Categorias/SeedStockers' element={ <ItemListContainer/> } />
                    <Route exact path='/SeedStockers/:Auto' element={ <ItemListContainer/> } />
                    <Route exact path='/SeedStockers/:Fem' element={ <ItemListContainer/> } />
                    <Route exact path='/SeedStockers/:CBD' element={ <ItemListContainer/> } />
                    <Route exact path='/detalle/:idProduct' element={ <ItemDetailContainer/> } />
                </Routes>   
            </BrowserRouter>
        </CartContextProvider>
            
        
    </>
  );
}

export default App;
