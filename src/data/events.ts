export interface EventPackage {
  id: number;
  title: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
  features: string[];
}

export const eventPackages: EventPackage[] = [
  {
    id: 1,
    title: "Private Dining",
    description: "Host an intimate gathering in our elegant private dining room. Perfect for birthdays, anniversaries, and small celebrations.",
    capacity: "Up to 20 guests",
    price: "Starting at $75/pp",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
    features: ["Dedicated waitstaff", "Customizable menu", "Wine pairing options", "Audio system", "Decor included"],
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impression your clients and colleagues with a sophisticated corporate dining experience. We handle every detail.",
    capacity: "Up to 60 guests",
    price: "Starting at $65/pp",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
    features: ["AV equipment", "Presentation screen", "Private bar", "Vegetarian options", "Event coordinator"],
  },
  {
    id: 3,
    title: "Full Buyout",
    description: "Reserve the entire restaurant for your special occasion. Complete control over the menu, music, and atmosphere.",
    capacity: "Up to 120 guests",
    price: "Starting at $5,000",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
    features: ["Exclusive access", "Full customization", "Open bar option", "Live music ready", "Parking validation"],
  },
  {
    id: 4,
    title: "Catering Services",
    description: "Let us bring our award-winning cuisine to your venue. Perfect for weddings, galas, and large celebrations.",
    capacity: "50 - 500 guests",
    price: "Starting at $55/pp",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=500&fit=crop",
    features: ["Full-service catering", "Custom menu design", "Professional staff", "Equipment rental", "Setup & cleanup"],
  },
];
