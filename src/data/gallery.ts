export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", alt: "Elegant dining room", category: "Interior" },
  { id: 2, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop", alt: "Chef preparing signature dish", category: "Kitchen" },
  { id: 3, src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop", alt: "Outdoor patio seating", category: "Interior" },
  { id: 4, src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop", alt: "Grilled ribeye steak", category: "Food" },
  { id: 5, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop", alt: "Artisan pizza", category: "Food" },
  { id: 6, src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop", alt: "Private dining area", category: "Interior" },
  { id: 7, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop", alt: "Decadent dessert", category: "Food" },
  { id: 8, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", alt: "Bar area", category: "Interior" },
  { id: 9, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop", alt: "Plated main course", category: "Food" },
  { id: 10, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop", alt: "Restaurant exterior", category: "Exterior" },
  { id: 11, src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop", alt: "Fresh ingredients", category: "Food" },
  { id: 12, src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop", alt: "Cocktail presentation", category: "Food" },
];

export const galleryCategories = ["All", "Interior", "Food", "Kitchen", "Exterior"];
