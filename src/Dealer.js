import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
 const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    color: '',
    mileage: '',
    image: '',
 });

 const { title, description, price, color, mileage, image } = formData;

 const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const onSubmit = async (e) => {
    e.preventDefault();
    const newCar = {
      title,
      description,
      price,
      color,
      mileage,
      image,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newCar);
      const res = await axios.post('/api/cars', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
 };

 return (
    <div className="container">
      <h1>Add Car</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Color"
          name="color"
          value={color}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="number"
          placeholder="Mileage"
          name="mileage"
          value={mileage}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={(e) => onChange(e)}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
 );
};

export default AddCar;
