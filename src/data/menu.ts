export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  dietary?: string[];
}

export function formatPkr(amount: number) {
  return `Rs ${Math.round(amount).toLocaleString("en-PK")}`;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Malai Boti",
    description: "Charcoal-grilled chicken tikka marinated in cream, mild spices, and a hint of cardamom",
    price: 980,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "Vegetable Samosa",
    description: "Crisp pastry filled with spiced potato and peas, served with imli chutney",
    price: 380,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
    dietary: ["v"],
  },
  {
    id: 3,
    name: "Dahi Baray",
    description: "Soft lentil dumplings in chilled yogurt, tamarind, and roasted cumin",
    price: 420,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    dietary: ["v"],
  },
  {
    id: 4,
    name: "Dynamite Prawns",
    description: "Crispy prawns tossed in a mild spicy sauce, a Clifton favourite to share",
    price: 1650,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 5,
    name: "Mutton Karahi",
    description: "Half kilo of goat cooked in tomato, ginger, and green chilli. Served with naan",
    price: 2850,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop",
    popular: true,
    dietary: ["gf"],
  },
  {
    id: 6,
    name: "Chicken Biryani",
    description: "Dum-cooked basmati with bone-in chicken, fried onion, and raita",
    price: 780,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 7,
    name: "Beef Nihari",
    description: "Slow-cooked beef shank in a deep nihari masala, with ginger, lemon, and naan",
    price: 1250,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    dietary: ["gf"],
  },
  {
    id: 8,
    name: "Chicken White Handi",
    description: "Boneless chicken in a light creamy gravy, finished with green chilli and coriander",
    price: 1450,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 9,
    name: "Paneer Handi",
    description: "Cottage cheese in a tomato and cashew gravy. A full vegetarian handi",
    price: 1150,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop",
    dietary: ["v"],
  },
  {
    id: 10,
    name: "Seekh Kabab Platter",
    description: "Four charcoal seekh kababs with naan, chutney, and a fresh salad",
    price: 1750,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop",
    popular: true,
  },
  {
    id: 11,
    name: "Gulab Jamun",
    description: "Warm milk dumplings in saffron syrup. Two pieces",
    price: 380,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5979?w=600&h=400&fit=crop",
    popular: true,
    dietary: ["v"],
  },
  {
    id: 12,
    name: "Kheer",
    description: "Slow-cooked rice pudding with cardamom, pistachio, and almonds",
    price: 420,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
    dietary: ["v", "gf"],
  },
  {
    id: 13,
    name: "Gajar ka Halwa",
    description: "Carrot halwa finished with khoya, served warm",
    price: 480,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&h=400&fit=crop",
    popular: true,
    dietary: ["v"],
  },
  {
    id: 14,
    name: "Matka Kulfi",
    description: "House kulfi set in a clay matka, with pistachio",
    price: 350,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1556217477-d325251ece38?w=600&h=400&fit=crop",
    dietary: ["v"],
  },
  {
    id: 15,
    name: "Kashmiri Chai",
    description: "Pink noon chai with crushed pistachio",
    price: 280,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop",
    dietary: ["v", "gf"],
  },
  {
    id: 16,
    name: "Sweet Lassi",
    description: "Chilled yogurt drink, lightly sweet, with a pinch of cardamom",
    price: 320,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop",
    dietary: ["v", "gf"],
  },
  {
    id: 17,
    name: "Fresh Lime Soda",
    description: "Sweet or salted, made to order",
    price: 220,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
    dietary: ["v", "gf"],
  },
  {
    id: 18,
    name: "Mint Margarita",
    description: "House mocktail of lime, mint, and soda. No alcohol",
    price: 350,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop",
    dietary: ["v", "gf"],
  },
];

export const categories = ["All", "Appetizers", "Mains", "Desserts", "Beverages"];
