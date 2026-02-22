export interface PricingItem {
    id: number;
    title: string;
    description: string;
    price: number;
    duration: string;
    icon: string;
    points: {
        label: string;
        value: string;
    }[];
    link: string;
}

export interface PopularCarItem {
  id: number;
  title: string;
  icon: string;
  count: number;
  link: string;
}