//import logo from './logo.svg';

import { Routes ,Route } from 'react-router-dom';
import './App.css';
import React  from 'react';
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Login1 from "./pages/login1";
import Olvido from "./pages/Olvido";
import About from "./pages/About";
import Register from "./components/layout/Register";
//import PaymentForms from "../src/js/PaymentForms";
//import PaymentForm from "../src/js/PaymentForm";
import Checkout from "./pages/Checkout";
import './styles/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import ContactUs from "./components/layout/ContactForm";
import Contact from "./pages/ContactoPage";




function App() {
  return (
    <>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/login1' element={<Login1/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/olvido' element={<Olvido/>} />
      <Route path='/about' element={<About/>} />
      
      </Routes> 
      <Footer/> 
    </>
    
  );
}

export default App;
