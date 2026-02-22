import processBg1 from "../../assets/images/backgrounds/process-one-single-bg-1.jpg";
import processBg2 from "../../assets/images/backgrounds/process-one-single-bg-2.jpg";
import processBg3 from "../../assets/images/backgrounds/process-one-single-bg-3.jpg";
import processBg4 from "../../assets/images/backgrounds/process-one-single-bg-4.jpg";
import type { ProcessStep } from "./processType";
import pricingImg1 from '../../assets/images/resources/pricing-2-1.png';
import pricingImg2 from '../../assets/images/resources/pricing-2-2.png';
import pricingImg3 from '../../assets/images/resources/pricing-2-3.png';
import pricingImg4 from '../../assets/images/resources/pricing-2-4.png';

export const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: "Choose A Car",
        description:
            "Open multiply a green form lesser their from in made herb multiply",
        icon: "icon-car-wash",
        bg: processBg1,
    },
    {
        id: 2,
        title: "Come In Contact",
        description:
            "Open multiply a green form lesser their from in made herb multiply",
        icon: "icon-in-person",
        bg: processBg2,
    },
    {
        id: 3,
        title: "Pick-Up Locations",
        description:
            "Open multiply a green form lesser their from in made herb multiply",
        icon: "icon-car-insurance",
        bg: processBg3,
    },
    {
        id: 4,
        title: "Enjoy Driving",
        description:
            "Open multiply a green form lesser their from in made herb multiply",
        icon: "icon-steering-wheel",
        bg: processBg4,
    },
];





// Types
interface PricingPlanThree {
    id: number;
    title: string;
    price: number;
    image: string;
    features: string[];
}

// Data
export const pricingPlansThree: PricingPlanThree[] = [
    {
        id: 1,
        title: 'Basic',
        price: 500,
        image: pricingImg1,
        features: [
            'Car service is essential for maintaining.',
            'Performance and longevity of vehicle.',
            'Per minutes stopped traffic',
            'Online booking',
            '24/7 customer support',
        ],
    },
    {
        id: 2,
        title: 'Standard',
        price: 600,
        image: pricingImg2,
        features: [
            'Car service is essential for maintaining.',
            'Performance and longevity of vehicle.',
            'Per minutes stopped traffic',
            'Online booking',
            '24/7 customer support',
        ],
    },
    {
        id: 3,
        title: 'Premium',
        price: 700,
        image: pricingImg3,
        features: [
            'Car service is essential for maintaining.',
            'Performance and longevity of vehicle.',
            'Per minutes stopped traffic',
            'Online booking',
            '24/7 customer support',
        ],
    },
    {
        id: 4,
        title: 'Vip',
        price: 900,
        image: pricingImg4,
        features: [
            'Car service is essential for maintaining.',
            'Performance and longevity of vehicle.',
            'Per minutes stopped traffic',
            'Online booking',
            '24/7 customer support',
        ],
    },
];












