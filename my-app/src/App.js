import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './Containers/Home/Home';
import ItemListContainer from './Containers/itemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route exact path='/Categorias/SeedStockers' element={ <ItemListContainer/> } />
            <Route exact path='/SeedStockers/:Auto' element={ <ItemListContainer/> } />
            <Route exact path='/SeedStockers/:Fem' element={ <ItemListContainer/> } />
            <Route exact path='/SeedStockers/:CBD' element={ <ItemListContainer/> } />
            <Route exact path='/SeedStockers/:Fast' element={ <ItemListContainer/> } />
        </Routes>
        
    </BrowserRouter>
      
    </>
  );
}

export default App;
