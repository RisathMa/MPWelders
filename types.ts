export interface Project {
  id: number;
  title: string;
  category: 'Commercial' | 'Residential' | 'Custom' | 'Repair';
  imageUrl: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface AIAnalysisResponse {
  summary: string;
  estimatedComplexity: 'Low' | 'Medium' | 'High';
  suggestedMaterials: string[];
  recommendedQuestions: string[];
}

export enum ContactMethod {
  PHONE = 'phone',
  EMAIL = 'email',
  WHATSAPP = 'whatsapp',
  SMS = 'sms'
}