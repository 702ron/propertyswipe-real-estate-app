import React, { useState } from "react";

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

  const handleNext = () => {
    if (index < mockCards.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      {current ? (
        <div className="w-80 max-w-full h-96 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center select-none">
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
      ) : (
        <div className="text-white text-2xl font-bold">No more cards!</div>
      )}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={index === mockCards.length - 1}
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
