
export interface ListingItem {
    id: number;
    image: string;
    brand: string;
    title: string;
    transmission: string;
    mileage: string;
    fuel: string;
    package: string;
    minAge: string;
    persons: string;
    pricePerDay: number;
    link: string;
}
export interface CarItemTwo {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    link: string;
}

interface CarMeta {
    icon: string;
    text: string;
}

export interface ListingThreeItem {
    id: number;
    image: string;
    brand: string;
    title: string;
    price: number;
    metaOne: CarMeta[];
    metaTwo: CarMeta[];
}








