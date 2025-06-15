import React, { useState } from "react";
import PropertyCard from "./components/PropertyCard";
import Welcome from "./pages/Welcome";
import StyleQuiz from "./pages/StyleQuiz";
import { mockProperties } from "./data/mockProperties";

type Screen = "welcome" | "styleQuiz" | "properties";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [propertyIndex, setPropertyIndex] = useState(0);
  const [userPreferences, setUserPreferences] = useState<string[]>([]);

  const currentProperty = mockProperties[propertyIndex];

  const handleGetStarted = () => {
    setCurrentScreen("styleQuiz");
  };

  const handleStyleQuizComplete = (preferences: string[]) => {
    setUserPreferences(preferences);
    setCurrentScreen("properties");
  };

  const handleBackFromStyleQuiz = () => {
    setCurrentScreen("welcome");
  };

  const handleNextProperty = () => {
    if (propertyIndex < mockProperties.length - 1)
      setPropertyIndex(propertyIndex + 1);
  };

  const handlePrevProperty = () => {
    if (propertyIndex > 0) setPropertyIndex(propertyIndex - 1);
  };

  const handleBackToWelcome = () => {
    setCurrentScreen("welcome");
    setPropertyIndex(0);
    setUserPreferences([]);
  };

  // Welcome Screen
  if (currentScreen === "welcome") {
    return <Welcome onGetStarted={handleGetStarted} />;
  }

  // Style Quiz Screen
  if (currentScreen === "styleQuiz") {
    return (
      <StyleQuiz
        onComplete={handleStyleQuizComplete}
        onBack={handleBackFromStyleQuiz}
      />
    );
  }

  // Property Browsing Screen
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
        {/* Back Button */}
        <button
          onClick={handleBackToWelcome}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ← Back
        </button>

        {/* User Preferences Display */}
        {userPreferences.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "12px",
            }}
          >
            Your styles: {userPreferences.join(", ")}
          </div>
        )}

        {currentProperty ? (
          <div style={{ marginBottom: "32px" }}>
            <PropertyCard property={currentProperty} />
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
            <div style={{ fontSize: "16px", marginTop: "16px" }}>
              <button
                onClick={handleBackToWelcome}
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  cursor: "pointer",
                }}
              >
                Start Over
              </button>
            </div>
          </div>
        )}

        {currentProperty && (
          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <button
              onClick={handlePrevProperty}
              disabled={propertyIndex === 0}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: propertyIndex === 0 ? "#374151" : "#374151",
                color: "white",
                border: "none",
                cursor: propertyIndex === 0 ? "not-allowed" : "pointer",
                opacity: propertyIndex === 0 ? 0.5 : 1,
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNextProperty}
              disabled={propertyIndex === mockProperties.length - 1}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor:
                  propertyIndex === mockProperties.length - 1
                    ? "#2563eb"
                    : "#2563eb",
                color: "white",
                border: "none",
                cursor:
                  propertyIndex === mockProperties.length - 1
                    ? "not-allowed"
                    : "pointer",
                opacity: propertyIndex === mockProperties.length - 1 ? 0.5 : 1,
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
