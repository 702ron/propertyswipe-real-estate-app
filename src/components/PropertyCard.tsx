import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string | number;
  images: string[];
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft?: number;
  description?: string;
  features?: string[];
}

interface PropertyCardProps {
  property: Property;
  onImageChange?: (index: number) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onImageChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % property.images.length;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      currentImageIndex === 0
        ? property.images.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    onImageChange?.(index);
  };

  return (
    <div
      style={{
        width: "320px",
        height: "480px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Image Carousel */}
      <div
        style={{ position: "relative", height: "280px", overflow: "hidden" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={property.images[currentImageIndex]}
            alt={`${property.address} - Image ${currentImageIndex + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "4px",
            }}
          >
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor:
                    index === currentImageIndex
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1f2937",
            marginBottom: "4px",
          }}
        >
          {property.price}
        </div>

        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            marginBottom: "8px",
          }}
        >
          {property.address}
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "12px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          <span>{property.bedrooms} bed</span>
          <span>{property.bathrooms} bath</span>
          {property.sqft && <span>{property.sqft.toLocaleString()} sqft</span>}
        </div>

        {/* Features */}
        {property.features && property.features.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginTop: "8px",
            }}
          >
            {property.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#6b7280",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span
                style={{
                  color: "#6b7280",
                  fontSize: "12px",
                  padding: "2px 4px",
                }}
              >
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
