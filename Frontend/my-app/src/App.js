
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'




function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/About' element={<ShopCategory category = "About"/>}/>
      <Route path='/Menu' element={<ShopCategory category = "women"/>}/>
      <Route path='/Contact Us' element={<ShopCategory category = "kid"/>}/>
      <Route path='/product' element={<Product/>}>
       <Route path=':productId ' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
