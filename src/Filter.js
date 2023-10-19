import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cars = () => {
 const [cars, setCars] = useState([]);
 const [filteredCars, setFilteredCars] = useState([]);
 const [price, setPrice] = useState('');
 const [color, setColor] = useState('');
 const [mileage, setMileage] = useState('');

 useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get('/api/cars');
      setCars(res.data);
      setFilteredCars(res.data);
    };
    fetchCars();
 }, []);

 useEffect(() => {
    const filtered = cars.filter(
      (car) =>
        (price ? car.price <= price : true) &&
        (color ? car.color === color : true) &&
        (mileage ? car.mileage <= mileage : true)
    );
    setFilteredCars(filtered);
 }, [price, color, mileage]);

 return (
    <div className="container">
      <h1>Cars</h1>
      <div className="filters">
        <input
          type="number"
          placeholder="Max Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
      </div>
      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car._id}>
            <h2>{car.title}</h2>
            <p>{car.description}</p>
            <p>Price: ${car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage} miles</p>
            <img src={car.image} alt={car.title} />
          </div>
        ))}
      </div>
    </div>
 );
};

export default Cars;