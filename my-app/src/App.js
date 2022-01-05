import Navbar from './components/NavBar';
import ItemListContainer from './Containers/itemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={ <ItemListContainer/> } />
        </Routes>
        
    </BrowserRouter>
      
    </>
  );
}

export default App;
