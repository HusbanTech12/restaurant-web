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

export const menuItems: MenuItem[] = [
  // Appetizers
  { id: 1, name: "Crispy Calamari", description: "Lightly battered calamari served with spicy marinara and lemon aioli", price: 14, category: "Appetizers", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop", popular: true },
  { id: 2, name: "Truffle Fries", description: "Hand-cut fries with truffle oil, parmesan, and fresh herbs", price: 12, category: "Appetizers", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop", dietary: ["v"] },
  { id: 3, name: "Burrata Salad", description: "Creamy burrata with heirloom tomatoes, basil, and balsamic glaze", price: 16, category: "Appetizers", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
  { id: 4, name: "Tuna Tartare", description: "Fresh ahi tuna with avocado, sesame, and wonton crisps", price: 18, category: "Appetizers", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&h=400&fit=crop", popular: true },

  // Main Courses
  { id: 5, name: "Grilled Ribeye Steak", description: "12oz prime ribeye with truffle mashed potatoes and seasonal vegetables", price: 42, category: "Mains", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop", popular: true, dietary: ["gf"] },
  { id: 6, name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon butter sauce, asparagus, and wild rice", price: 32, category: "Mains", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop", dietary: ["gf"] },
  { id: 7, name: "Herb-Roasted Chicken", description: "Free-range chicken with rosemary jus, roasted vegetables, and Yukon gold potatoes", price: 28, category: "Mains", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop", popular: true },
  { id: 8, name: "Wild Mushroom Risotto", description: "Arborio rice with wild mushrooms, truffle oil, and aged parmesan", price: 26, category: "Mains", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
  { id: 9, name: "Lamb Chops", description: "New Zealand lamb rack with mint chimichurri and roasted root vegetables", price: 38, category: "Mains", image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600&h=400&fit=crop", dietary: ["gf"] },
  { id: 10, name: "Lobster Linguine", description: "Fresh lobster tail with linguine in a creamy tomato basil sauce", price: 36, category: "Mains", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop", popular: true },

  // Desserts
  { id: 11, name: "Tiramisu", description: "Classic Italian tiramisu with mascarpone and espresso-soaked ladyfingers", price: 12, category: "Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop", popular: true },
  { id: 12, name: "Crème Brûlée", description: "Vanilla bean custard with caramelized sugar topping", price: 11, category: "Desserts", image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
  { id: 13, name: "Chocolate Lava Cake", description: "Warm dark chocolate cake with molten center and vanilla ice cream", price: 14, category: "Desserts", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop", popular: true },
  { id: 14, name: "Seasonal Fruit Tart", description: "Fresh seasonal fruits on vanilla pastry cream with almond crust", price: 13, category: "Desserts", image: "https://images.unsplash.com/photo-1556217477-d325251ece38?w=600&h=400&fit=crop", dietary: ["v"] },

  // Beverages
  { id: 15, name: "Artisan Coffee", description: "Single-origin pour-over coffee", price: 5, category: "Beverages", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
  { id: 16, name: "Fresh Pressed Juice", description: "Seasonal cold-pressed juice blend", price: 7, category: "Beverages", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
  { id: 17, name: "Signature Cocktail", description: "House specialty cocktail with premium spirits", price: 15, category: "Beverages", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop" },
  { id: 18, name: "Wine Selection", description: "Curated wine by glass or bottle from our cellar", price: 14, category: "Beverages", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop", dietary: ["v", "gf"] },
];

export const categories = ["All", "Appetizers", "Mains", "Desserts", "Beverages"];
