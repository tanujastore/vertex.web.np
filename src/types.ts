export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  submittedAt: string;
}

export interface DemoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  mockTheme: 'restaurant' | 'gym' | 'salon';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  deliveryTime: string;
  features: string[];
  isPopular?: boolean;
}
