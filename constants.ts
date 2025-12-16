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

// Data has been moved to translations.ts to support localization
export const SERVICES: Service[] = [];
export const PORTFOLIO_ITEMS: Project[] = [];