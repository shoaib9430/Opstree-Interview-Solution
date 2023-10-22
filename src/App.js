// App.js
import React, { useState } from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";

const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (newCar) => {
    const existingCarIndex = cars.findIndex(
      (car) => car.name === newCar.name && car.model === newCar.model
    );

    if (existingCarIndex !== -1) {
      // If a car with the same brand and model exists, update its quantity.
      const updatedCars = [...cars];
      updatedCars[existingCarIndex].quantity += newCar.quantity;
      setCars(updatedCars);
    } else {
      // If it's a new car, add it to the list.
      setCars([...cars, newCar]);
    }
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      <CarForm onAddCar={addCar} />
      <CarList cars={cars} />
    </div>
  );
};

export default App;
