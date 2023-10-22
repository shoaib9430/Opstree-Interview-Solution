// CarList.js
import React from "react";

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            Name: {car.name}, Model: {car.model}, Quantity: {car.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
