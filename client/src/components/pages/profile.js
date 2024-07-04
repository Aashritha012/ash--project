import React, { useState, useEffect } from 'react';
import { fetchData } from '../../main.js'; 

const Profile = () => {
  const [user] = useState({ username: 'Aashritha' });
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ productId: '', productName: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData(`/user/${user.username}/products`, {}, 'GET');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [user.username]);

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData(`/user/${user.username}/products`, newProduct, 'POST');
      setProducts([...products, data]);
      setNewProduct({ productId: '', productName: '' });
      setMessage('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{user.username}'s Profile</h2>
      <form onSubmit={addProduct} className="mb-3">
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">ProductId</label>
          <input
            type="text"
            className="form-control"
            id="productId"
            value={newProduct.productId}
            onChange={(e) => setNewProduct({ ...newProduct, productId: e.target.value })}
            placeholder="Enter productId"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={newProduct.productName}
            onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
      {message && <p className="text-center text-success">{message}</p>}
      <h3 className="mt-4">Your Products</h3>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            <strong>ProductId:</strong> {product.productId} | <strong>ProductName:</strong> {product.productName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
