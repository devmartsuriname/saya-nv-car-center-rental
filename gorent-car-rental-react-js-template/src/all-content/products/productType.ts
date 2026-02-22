
export interface ProductItem {
    id: number;
    title: string;
    image: string;
    price: number;
    previousPrice?: number;
    rating: number;
    isNew?: boolean;
    discouunt?: string; 
}