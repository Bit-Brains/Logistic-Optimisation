
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Main from './pages/Main'
import Product from './pages/Product'
import About from './pages/About'
import ContactUs from './pages/ContactUs'





function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/About' element={<About category = "About"/>}/>
      <Route path='/Items' element={<ShopCategory />}/>
      <Route path='/ContactUs' element={<ContactUs />}/>
      <Route path='/product' element={<Product/>}>
       <Route path=':productId ' element={<Product/>}/>
      </Route>

     
      <Route path='/login' element={<LoginSignup/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
