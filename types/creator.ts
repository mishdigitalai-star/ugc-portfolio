export type AIDisclosure = 'AI-Generated' | 'AI-Enhanced' | 'Hybrid (Human + AI)' | 'Human-Created';

export interface Creator {
  id: string;
  name: string;
  slug: string;
  profilePhoto: string;
  niche: string;
  bio: string;
  email: string;
  aiDisclosure: AIDisclosure;
  stats: {
    followers: string;
    engagementRate: string;
    brandsWorkedWith: number;
  };
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  brandLogos: string[];
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  quote: string;
  avatar?: string;
}
