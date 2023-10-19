import React, { useState, useEffect } from "react";
import axios from 'axios';

const ManageCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("/api/cars");
      setCars(res.data);
    };
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    await axios.delete(`/api/cars/${id}`);
    setCars(cars.filter((car) => car._id !== id));
  };

  const editCar = async (id, car) => {
    await axios.put(`/api/cars/${id}`, car);
    setCars(cars.map((c) => (c._id === id ? car : c)));
  };

  const handleDeleteAll = async () => {
    await axios.delete("/api/cars/deleteall");
    setCars([]);
  };

  return (
    <div className="container">
      <h1>Manage Cars</h1>
      <div className="cars">
        {cars.map((car) => (
          <div key={car._id}>
            <h2>{car.title}</h2>
            <p>{car.description}</p>
            <p>Price: ${car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage} miles</p>
            <img src={car.image} alt={car.title} />
            <button onClick={() => deleteCar(car._id)}>Delete</button>
            <button onClick={() => editCar(car._id, car)}>Edit</button>
          </div>
        ))}
      </div>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default ManageCars;