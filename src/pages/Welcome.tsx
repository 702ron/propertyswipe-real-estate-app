import React from "react";

interface WelcomeProps {
  onGetStarted: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onGetStarted }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Logo/Brand */}
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "16px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        🏠 PropertySwipe
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "24px",
          fontWeight: "300",
          marginBottom: "32px",
          maxWidth: "600px",
          lineHeight: "1.4",
        }}
      >
        Find your dream home with a swipe
      </div>

      {/* Value Proposition */}
      <div
        style={{
          fontSize: "18px",
          marginBottom: "48px",
          maxWidth: "500px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        Discover properties that match your style and preferences. Swipe through
        curated listings and get connected with top real estate agents.
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "48px",
          maxWidth: "400px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "20px" }}>✨</span>
          <span>Personalized property recommendations</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "20px" }}>🎯</span>
          <span>Connect with verified agents instantly</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "20px" }}>⚡</span>
          <span>Save time with smart matching</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onGetStarted}
        style={{
          backgroundColor: "#ffffff",
          color: "#667eea",
          border: "none",
          borderRadius: "50px",
          padding: "16px 48px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
          transform: "translateY(0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
        }}
      >
        Get Started
      </button>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        Join thousands finding their perfect home
      </div>
    </div>
  );
};

export default Welcome;
