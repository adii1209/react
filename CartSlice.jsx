import React from 'react';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css'; // Specific styles

const ProductListingPage = () => {
  const plants = [
    {
      id: 1,
      name: 'Aloe Vera',
      description: 'Great for skin health.',
      price: 10.99,
      image: 'D:/code/Alovera-plant.jpeg',
      category: 'Medicinal Plants',
    },
    {
      id: 2,
      name: 'Lavender',
      description: 'Aromatic herb for relaxation.',
      price: 8.99,
      image: 'D:/code/images.jpeg',
      category: 'Aromatic Plants',
    },
    // Add more plants here...
  ];

  return (
    <div className="product-listing-page">
      <h2>Our Plants</h2>
      <div className="plant-section">
        <h3>Aromatic Plants</h3>
        <div className="plant-cards">
          {plants.filter(plant => plant.category === 'Aromatic Plants').map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
      <div className="plant-section">
        <h3>Medicinal Plants</h3>
        <div className="plant-cards">
          {plants.filter(plant => plant.category === 'Medicinal Plants').map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
