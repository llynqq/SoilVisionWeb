export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'scan' | 'spray' | 'fertilizer';
  benefits: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
}
