
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/pages/Products.js';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


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
]


function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <BrowserRouter>
       <Route path='/' element={<Navbar/>}>
        <Route path="Login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route index element={<About />}/>
       </Route>
      </BrowserRouter>

      <Products products={products} />
    </div>
  );
}

export default App;
