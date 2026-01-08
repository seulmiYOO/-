export interface GuideStep {
  id: string;
  title: string;
  category: string;
  description: string;
  details?: { label: string; value: string; icon?: React.ReactNode }[];
  imageUrl: string;
  themeColor: string; // Tailwind class for background
  extraContent?: {
    description: string;
    imageUrl: string;
  };
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}