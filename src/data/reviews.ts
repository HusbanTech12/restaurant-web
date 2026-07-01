export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    text: "An absolutely unforgettable dining experience. The ribeye was cooked to perfection and the truffle fries were divine. The ambiance is elegant yet welcoming. Will definitely be returning!",
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "James Rodriguez",
    rating: 5,
    text: "Best restaurant in town! The tasting menu is a culinary journey. Every dish tells a story and the wine pairings are exceptional. The service team is knowledgeable and attentive.",
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 5,
    text: "We had our anniversary dinner here and it was magical. The staff went above and beyond to make us feel special. The chocolate lava cake is a must-try!",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Michael Thompson",
    rating: 4,
    text: "Great food and fantastic atmosphere. The outdoor patio is lovely in the summer. Only minor critique is the wait time on weekends, but the quality makes up for it.",
    date: "December 2025",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Olivia Parker",
    rating: 5,
    text: "The Sunday brunch is absolutely incredible. Endless options prepared with such care and creativity. The fresh pastries are to die for. A hidden gem!",
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "David Kim",
    rating: 5,
    text: "As a food critic, I've dined at many fine establishments, but this place stands out. The chef's attention to detail and commitment to local, seasonal ingredients is commendable.",
    date: "October 2025",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
];
