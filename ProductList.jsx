import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Styling

const plantsArray = [
  { id: 1, name: 'Monstera', price: 25, category: 'Tropical', imageUrl: "D:/code/paradise-nursery/src/monstera.jpeg" },
  { id: 2, name: 'Fiddle Leaf Fig', price: 40, category: 'Tropical', imageUrl: "D:/code/paradise-nursery/src/fiddleleaffig.jpeg" },
  { id: 3, name: 'Snake Plant', price: 20, category: 'Succulent', imageUrl: "D:/code/paradise-nursery/src/snake_plant.jpeg" },
  { id: 4, name: 'Aloe Vera', price: 15, category: 'Succulent', imageUrl: "D:/code/paradise-nursery/src/aloevera.jpeg"},
  { id: 5, name: 'Cactus', price: 10, category: 'Cactus', imageUrl: "D:/code/paradise-nursery/src/cactus.jpeg" },
  { id: 6, name: 'Peace Lily', price: 30, category: 'Flowering', imageUrl: "D:/code/paradise-nursery/src/lily.jpeg" }
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.id]: true });
  };

  return (
    <div className="product-grid">
      {plantsArray.map(plant => (
        <div key={plant.id} className="product-card">
          <img src={plant.imageUrl} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.id]}
          >
            {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

