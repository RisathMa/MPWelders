import { Service, Project } from './types';

export const CONTACT_INFO = {
  phone: "+94 77 123 4567", // Example SL Number
  phoneDisplay: "077 123 4567",
  email: "contact@mpwelders.lk",
  whatsapp: "94771234567", 
  address: "No. 45, High Level Road, Maharagama, Sri Lanka",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  }
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Gates & Grills",
    description: "Modern and classic designs for sliding gates, swing gates, window grills, and balcony railings tailored for Sri Lankan homes.",
    iconName: "Hammer"
  },
  {
    id: 2,
    title: "Roofing Frameworks",
    description: "Durable steel structures for roofing, Amano sheets, and car porches. Built to withstand local weather conditions.",
    iconName: "Construction"
  },
  {
    id: 3,
    title: "Heavy Machinery Repair",
    description: "On-site welding repairs for excavators, lorries, and industrial machinery. 24/7 emergency service available.",
    iconName: "Truck"
  },
  {
    id: 4,
    title: "Stainless Steel & Aluminum",
    description: "Premium pantry cupboards, handrails, and kitchen equipment welding for hotels and modern residences.",
    iconName: "Flame"
  }
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "Modern Roller Gate",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1621262077976-58273673f44a?auto=format&fit=crop&q=80&w=800",
    description: "Remote controlled steel roller gate with wood finish inlay."
  },
  {
    id: 2,
    title: "Commercial Warehouse Roof",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    description: "Large scale structural steel roofing framework."
  },
  {
    id: 3,
    title: "Luxury Staircase Railing",
    category: "Custom",
    imageUrl: "https://images.unsplash.com/photo-1565610098073-458bb6121403?auto=format&fit=crop&q=80&w=800",
    description: "Modern floating staircase with tempered glass and steel."
  },
  {
    id: 4,
    title: "Excavator Bucket Restoration",
    category: "Repair",
    imageUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=800",
    description: "Hard-facing and structural repair for construction equipment."
  },
  {
    id: 5,
    title: "Hotel Kitchen Fabrication",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1585671790691-1cb593dc49c5?auto=format&fit=crop&q=80&w=800",
    description: "Stainless steel worktables and shelving for commercial kitchen."
  },
  {
    id: 6,
    title: "Security Grills",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1620610931557-494b238618e5?auto=format&fit=crop&q=80&w=800", // Replaced with a fence/grill like image
    description: "High-security window grills with decorative patterns."
  }
];