import React from 'react';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';

// Types
interface CounterItem {
    id: number;
    iconClass: string;
    count: number;
    suffix: string;
    label: string;
}

// Data Array
const counterData: CounterItem[] = [
    {
        id: 1,
        iconClass: 'icon-car',
        count: 1050,
        suffix: 'K',
        label: 'Vehicle fleet',
    },
    {
        id: 2,
        iconClass: 'icon-mileage',
        count: 5000,
        suffix: '+',
        label: 'Miles of drive',
    },
    {
        id: 3,
        iconClass: 'icon-reviews',
        count: 140,
        suffix: 'K',
        label: 'Happy customer',
    },
    {
        id: 4,
        iconClass: 'icon-pin-2',
        count: 1000,
        suffix: '+',
        label: 'Pickup & drop',
    },
];

const CounterThree: React.FC = () => {
    return (
        <section className="counter-three">
            <div className="counter-three__bg jarallax"></div>

            <div className="container">
                <ul className="row list-unstyled">
                    {counterData.map((item) => (
                        <li
                            key={item.id}
                            className="col-xl-3 col-lg-6 col-md-6"
                        >
                            <div className="counter-three__single">
                                <div className="counter-three__icon">
                                    <span className={item.iconClass}></span>
                                </div>

                                <div className="counter-three__count-box">
                                    <h3
                                        className="odometer"
                                    >
                                        <AdvanceCountUp ending={item?.count} />
                                    </h3>
                                    <span>{item.suffix}</span>
                                </div>

                                <p className="counter-three__count-text">
                                    {item.label}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CounterThree;
