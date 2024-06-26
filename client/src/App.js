
import './App.css';
import Products from './components/Products.js';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


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
      <Home/>
      <Login/>
      <Register/>
      <About/>

      <Products products={products} />
    </div>
  );
}

export default App;
