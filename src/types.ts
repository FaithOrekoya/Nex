export type UserRole = 'federal' | 'civilian' | 'carrier';

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  role: UserRole;
  phone: string;
  equipmentType: string;
  laneOrigin: string;
  laneDestination: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Carriers' | 'Agencies';
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}

export interface ShipmentRecord {
  id: string;
  origin: string;
  originCode: string;
  destination: string;
  destCode: string;
  equipment: '53ft Dry Van' | 'Refrigerated Reefer' | 'Flatbed Specialized' | 'Intermodal Box';
  weight: string;
  status: 'In Transit' | 'Matched' | 'Staging' | 'Tender Accepted';
  carrierType: 'Certified Carrier Tier-1' | 'Fleet Partner' | 'Dedicated Intermodal';
  progress: number;
  estDelivery: string;
  commodity: string;
  distance: string;
}

export interface ActivityEvent {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  category: 'Match' | 'Dispatch' | 'Compliance' | 'Route';
}
