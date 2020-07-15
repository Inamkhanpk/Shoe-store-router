import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import NotFound from  './components/NotFound'
import Launch from './components/Launch'
import LaunchShoe from './components/LaunchShoe'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'


function App() {
  return (
    <div className="" >
     

    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/home' exact element={<Launch/>} />
           <Route path="/about" exact element={<About/>}/>
          <Route path="/home/:slug" exact element={<LaunchShoe />} />
      
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
