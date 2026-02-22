import React from 'react';
import Marquee from 'react-fast-marquee';
interface SlidingTextItem {
    id: number;
    text: string;
    icon: string;
}
const slidingTextData: SlidingTextItem[] = [
    { id: 1, text: "Premium", icon: "icon-jeep" },
    { id: 2, text: "Rates", icon: "icon-cuv" },
    { id: 3, text: "Car", icon: "icon-jeep" },
    { id: 4, text: "Rental", icon: "icon-cuv" },
    { id: 5, text: "Worldwide", icon: "icon-jeep" },
    { id: 6, text: "Affordable", icon: "icon-cuv" },
];

const DATAONE = [
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
    ...slidingTextData,
]
const SlidingTextOne: React.FC = () => {

    return (
        <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled marquee_mode">
                    <Marquee
                        speed={60}
                        pauseOnHover={true}
                        direction="left"
                        gradient={false}
                    >
                        {DATAONE.map((item: SlidingTextItem, i) => (
                            <span key={i} >
                                <h2
                                    className="sliding-text__title"
                                    data-hover={item.text}
                                >
                                    {item.text}
                                    <span className={item.icon}></span>
                                </h2>
                            </span>
                        ))}
                    </Marquee>
                </ul>
            </div>
        </section>
    );
};

export default SlidingTextOne;