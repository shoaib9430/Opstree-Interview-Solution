// CarForm.js
import React, { useState } from "react";

const CarForm = ({ onAddCar }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCar({ name, model, quantity: parseInt(quantity) });
    setName("");
    setModel("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Add a Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
