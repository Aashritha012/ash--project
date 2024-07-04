import React, { useState } from 'react'; // Import useState from react
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/pages/Products.js';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profile from "./components/pages/profile";


const products = [
  {
      productId: 12342,
      productName: "Strawberry Lip Gloss"

  },
  {
      productId: 12765,
      productName: "Black-shaded EyeLiner"
  },
  {
      productId: 12987,
      productName: "Pink Matte Lipstick"
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Use useState here for authentication state

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Navbar/>}>
        <Route path="Login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route index element={<About />}/>
       </Route>
       </Routes>
      </BrowserRouter>

      <Products products={products} />
    </div>
  );
}

export default App;