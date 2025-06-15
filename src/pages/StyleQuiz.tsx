import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StyleImage {
  id: number;
  url: string;
  style: string;
  description: string;
}

interface StyleQuizProps {
  onComplete: (preferences: string[]) => void;
  onBack: () => void;
}

const styleImages: StyleImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    style: "modern",
    description: "Modern minimalist home",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    style: "traditional",
    description: "Traditional colonial style",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    style: "farmhouse",
    description: "Rustic farmhouse charm",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    style: "contemporary",
    description: "Contemporary design",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
    style: "craftsman",
    description: "Craftsman bungalow",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    style: "ranch",
    description: "Classic ranch style",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    style: "victorian",
    description: "Victorian elegance",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    style: "mediterranean",
    description: "Mediterranean villa",
  },
];

const StyleQuiz: React.FC<StyleQuizProps> = ({ onComplete, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedStyles, setLikedStyles] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentImage = styleImages[currentIndex];
  const progress = ((currentIndex + 1) / styleImages.length) * 100;

  const handleChoice = (liked: boolean) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (liked && !likedStyles.includes(currentImage.style)) {
      setLikedStyles([...likedStyles, currentImage.style]);
    }

    setTimeout(() => {
      if (currentIndex < styleImages.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      } else {
        // Quiz complete
        onComplete(likedStyles);
      }
    }, 300);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1f2937",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onBack}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        <div style={{ color: "white", fontSize: "18px", fontWeight: "600" }}>
          Style Discovery
        </div>

        <div style={{ color: "white", fontSize: "14px" }}>
          {currentIndex + 1} / {styleImages.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          height: "4px",
          backgroundColor: "rgba(255,255,255,0.1)",
          margin: "0 20px",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#667eea",
            width: `${progress}%`,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Instructions */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ margin: "0 0 8px 0", fontSize: "24px" }}>
          What's your style?
        </h2>
        <p style={{ margin: 0, opacity: 0.8, fontSize: "16px" }}>
          Tap ❤️ if you love it, ✕ if it's not for you
        </p>
      </div>

      {/* Image Card */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "320px",
              height: "400px",
              backgroundColor: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={currentImage.url}
              alt={currentImage.description}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "20px",
                  color: "#1f2937",
                }}
              >
                {currentImage.style.charAt(0).toUpperCase() +
                  currentImage.style.slice(1)}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                {currentImage.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <button
          onClick={() => handleChoice(false)}
          disabled={isAnimating}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid #ef4444",
            backgroundColor: "transparent",
            color: "#ef4444",
            fontSize: "24px",
            cursor: isAnimating ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isAnimating ? 0.5 : 1,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!isAnimating) {
              e.currentTarget.style.backgroundColor = "#ef4444";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (!isAnimating) {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ef4444";
            }
          }}
        >
          ✕
        </button>

        <button
          onClick={() => handleChoice(true)}
          disabled={isAnimating}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid #10b981",
            backgroundColor: "transparent",
            color: "#10b981",
            fontSize: "24px",
            cursor: isAnimating ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isAnimating ? 0.5 : 1,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!isAnimating) {
              e.currentTarget.style.backgroundColor = "#10b981";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (!isAnimating) {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#10b981";
            }
          }}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default StyleQuiz;
