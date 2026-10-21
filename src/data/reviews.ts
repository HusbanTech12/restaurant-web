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
    name: "Ayesha Khan",
    rating: 5,
    text: "The mutton karahi tasted like a proper dawat at home, and the naan came straight off the tandoor. We were in Clifton for a family dinner and the staff looked after the kids without being asked.",
    date: "March 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    rating: 5,
    text: "Best chicken biryani I have had on this side of Karachi. The raita is fresh, the portion is honest, and they did not rush us on a Saturday night.",
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Fatima Noor",
    rating: 5,
    text: "We booked Saffron for our anniversary. The seekh kabab platter and gajar ka halwa were excellent, and they shifted us to a quieter table when we asked.",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Hassan Raza",
    rating: 4,
    text: "Strong food and a comfortable room. Friday night in Boat Basin does mean a short wait, but the nihari was worth it. Parking on Khayaban-e-Roomi is the only hassle.",
    date: "December 2025",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Mariam Siddiqui",
    rating: 5,
    text: "Sunday lunch with my parents. The dahi baray were light, the chicken handi was not oily, and Kashmiri chai at the end was a nice touch.",
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Usman Ali",
    rating: 5,
    text: "I eat out across DHA and Clifton most weeks. Saffron is the one I bring clients to. Portions are clear, the bill is in rupees with no surprises, and the malai boti is consistently good.",
    date: "October 2025",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
];
