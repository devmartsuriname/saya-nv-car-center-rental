import type { PopularCarItem, PricingItem } from "./pricingType";


export const pricingData: PricingItem[] = [
    {
        id: 1,
        title: "Skyline Taxi",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: 10,
        duration: "/month",
        icon: "icon-taxi",
        link: "/inner/pricing",
        points: [
            { label: "Initial charge:", value: "$06" },
            { label: "Additional Kilometre:", value: "$06" },
            { label: "Per minutes stopped traffic:", value: "$06" },
            { label: "Waiting Charge:", value: "$06" },
        ],
    },
    {
        id: 2,
        title: "Urban Cabs",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: 30,
        duration: "/month",
        icon: "icon-cuv",
        link: "/pricing",
        points: [
            { label: "Initial charge:", value: "$06" },
            { label: "Additional Kilometre:", value: "$06" },
            { label: "Per minutes stopped traffic:", value: "$06" },
            { label: "Waiting Charge:", value: "$06" },
        ],
    },
    {
        id: 3,
        title: "TurboTaxi",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: 50,
        duration: "/month",
        icon: "icon-jeep",
        link: "/pricing",
        points: [
            { label: "Initial charge:", value: "$06" },
            { label: "Additional Kilometre:", value: "$06" },
            { label: "Per minutes stopped traffic:", value: "$06" },
            { label: "Waiting Charge:", value: "$06" },
        ],
    },
];




export const popularCarData: PopularCarItem[] = [
  {
    id: 1,
    title: "Sports Coupe",
    icon: "icon-sports-car",
    count: 3,
    link: "/inner/car-list-v-1",
  },
  {
    id: 2,
    title: "Crossover",
    icon: "icon-car-2",
    count: 5,
    link:"/inner/car-list-v-1",
  },
  {
    id: 3,
    title: "Pickup",
    icon: "icon-car-1",
    count: 8,
    link: "/inner/car-list-v-1",
  },
  {
    id: 4,
    title: "Family MPV",
    icon: "icon-cuv",
    count: 6,
    link: "/inner/car-list-v-1",
  },
  {
    id: 5,
    title: "Pickup",
    icon: "icon-taxi",
    count: 7,
    link: "/inner/car-list-v-1",
  },
  {
    id: 6,
    title: "Sedan",
    icon: "icon-sedan",
    count: 9,
    link: "/inner/car-list-v-1",
  },
  {
    id: 7,
    title: "Family MPV",
    icon: "icon-cuv",
    count: 6,
    link: "/inner/car-list-v-1",
  },
];