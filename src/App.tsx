import React, { useState } from "react";
import SwipeCard from "./components/SwipeCard";

const mockCards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    address: "123 Main St",
    price: "$500,000",
    beds: 3,
    baths: 2,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80",
    address: "456 Oak Ave",
    price: "$750,000",
    beds: 4,
    baths: 3,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    address: "789 Pine Rd",
    price: "$620,000",
    beds: 3,
    baths: 2,
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const current = mockCards[index];

  const handleSwipe = (_dir: "left" | "right") => {
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {current && (
        <SwipeCard onSwipe={handleSwipe} keyProp={current.id}>
          <div className="flex flex-col items-center w-full h-full">
            <img
              src={current.image}
              alt="House"
              className="w-64 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{current.address}</h2>
            <p className="text-gray-600">
              {current.price} • {current.beds} Bed • {current.baths} Bath
            </p>
          </div>
        </SwipeCard>
      )}
      {!current && (
        <div className="text-white text-2xl font-bold">No more cards!</div>
      )}
    </div>
  );
}

export default App;
