import React from 'react';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Header from './components/Header';
import './App.css'
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" elements={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
