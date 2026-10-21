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
    description: "A closed section for birthdays, anniversaries, and small family dinners. We set the menu around karahi, BBQ, and biryani.",
    capacity: "Up to 20 guests",
    price: "From Rs 3,500/pp",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
    features: ["Dedicated waitstaff", "Custom menu", "Welcome drinks", "Sound system", "Simple floral decor"],
  },
  {
    id: 2,
    title: "Corporate Meals",
    description: "Client lunches and office dinners in Clifton. Quiet seating, a set menu, and a coordinator who stays through service.",
    capacity: "Up to 60 guests",
    price: "From Rs 2,800/pp",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
    features: ["Projector on request", "Presentation screen", "Private seating", "Vegetarian handi", "Event coordinator"],
  },
  {
    id: 3,
    title: "Full Buyout",
    description: "Take the whole restaurant for a mehndi, walima reception, or a private night. Menu, music, and timing are yours.",
    capacity: "Up to 120 guests",
    price: "From Rs 450,000",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
    features: ["Exclusive access", "Full menu control", "Mocktail bar", "Live music ready", "Valet coordination"],
  },
  {
    id: 4,
    title: "Dawat Catering",
    description: "We cook and serve at your home or hall. Built for walima, dholki, and large family dawats across Karachi.",
    capacity: "50 - 500 guests",
    price: "From Rs 2,200/pp",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=500&fit=crop",
    features: ["Full-service catering", "Custom menu", "Serving staff", "Live BBQ station", "Setup and cleanup"],
  },
];
