export interface Property {
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

export const mockProperties: Property[] = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    ],
    address: "123 Main St, Beverly Hills, CA",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    description: "Stunning modern home with panoramic city views",
    features: [
      "Pool",
      "Garage",
      "Garden",
      "Fireplace",
      "Walk-in Closet",
      "Hardwood Floors",
    ],
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=80",
    ],
    address: "456 Oak Ave, Santa Monica, CA",
    price: "$1,850,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    description: "Charming coastal home near the beach",
    features: ["Ocean View", "Deck", "Updated Kitchen", "Central AC"],
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    ],
    address: "789 Pine Rd, Malibu, CA",
    price: "$3,200,000",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    description: "Luxury estate with private beach access",
    features: [
      "Beach Access",
      "Wine Cellar",
      "Home Theater",
      "Gym",
      "Guest House",
      "Infinity Pool",
    ],
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    ],
    address: "321 Elm St, West Hollywood, CA",
    price: "$1,200,000",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    description: "Modern condo in the heart of the city",
    features: ["City View", "Balcony", "Concierge", "Rooftop Pool"],
  },
];
