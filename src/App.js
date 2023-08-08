import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Header } from './Header';
import { Homepage } from './Homepage';
import { Product } from './Product';
import { Cart } from './Cart';
import React from 'react';
function App() {
  const [cart,setCart]=React.useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header cart={cart}/>}>
          <Route index element={<Homepage/>}></Route>
        
          <Route path='product' element={<Product cart={cart} setCart={setCart}/>}></Route>
          <Route path='cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
