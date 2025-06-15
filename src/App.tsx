import React, { useState } from "react";
import PropertyCard from "./components/PropertyCard";
import { mockProperties } from "./data/mockProperties";

function App() {
  const [index, setIndex] = useState(0);
  const current = mockProperties[index];

  const handleNext = () => {
    if (index < mockProperties.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {current ? (
          <div style={{ marginBottom: "32px" }}>
            <PropertyCard property={current} />
          </div>
        ) : (
          <div
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "32px",
            }}
          >
            No more properties!
          </div>
        )}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={handlePrev}
            disabled={index === 0}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              backgroundColor: index === 0 ? "#374151" : "#374151",
              color: "white",
              border: "none",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.5 : 1,
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={index === mockProperties.length - 1}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              backgroundColor:
                index === mockProperties.length - 1 ? "#2563eb" : "#2563eb",
              color: "white",
              border: "none",
              cursor:
                index === mockProperties.length - 1 ? "not-allowed" : "pointer",
              opacity: index === mockProperties.length - 1 ? 0.5 : 1,
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
