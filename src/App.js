import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import NotFound from  './components/NotFound'
import Launch from './components/Launch'
//import LaunchShoe from './components/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ProductDetailPage from './components/ProductDetail'


function App() {
  return (
    <div className="" >
     

    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
           <Route path="/about" exact element={<About/>}/>
           <Route path="/men" element={<Launch category="men" />} />
          <Route path="/women" element={<Launch category="women" />} />
          <Route path="/kids" element={<Launch category="kids" />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
