import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './NavBar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailCountainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListConteiner/ItemListConteiner';
const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
   
  );
}

export default App;