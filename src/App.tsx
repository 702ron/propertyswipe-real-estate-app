import React from "react";
import SwipeCard from "./components/SwipeCard";

function App() {
  const handleSwipe = (dir: "left" | "right") => {
    alert(`Swiped ${dir}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SwipeCard onSwipe={handleSwipe}>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="House"
            className="w-64 h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">123 Main St</h2>
          <p className="text-gray-600">$500,000 • 3 Bed • 2 Bath</p>
        </div>
      </SwipeCard>
    </div>
  );
}

export default App;
