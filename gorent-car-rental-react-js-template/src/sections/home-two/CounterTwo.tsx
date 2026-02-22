import React from 'react';
import { motion } from "framer-motion"
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
interface CounterItemTwo {
    id: number;
    count: number;
    symbol: string;
    text: string;
}
const counterDataTwo: CounterItemTwo[] = [
    { id: 1, count: 1000, symbol: "+", text: "Vehicle fleet" },
    { id: 2, count: 10, symbol: "M+", text: "Miles of drive" },
    { id: 3, count: 15, symbol: "K+", text: "Booking reserved" },
    { id: 4, count: 50, symbol: "K+", text: "Pickup & drop" },
]
const CounterTwo: React.FC = () => {
    return (
        <section className="counter-two">
            <div className="container">
                <div className="counter-two__inner">
                    <ul className="list-unstyled counter-two__list">
                        {
                            counterDataTwo.map((item) => (
                                <motion.li
                                    initial={{ x: item?.id % 2 === 0 ? 30 : -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.2 * item?.id,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.01, once: true }}
                                    key={item.id}
                                >
                                    <div className="counter-two__single">
                                        <div className="counter-two__shape-1"></div>
                                        <div className="counter-two__shape-2"></div>
                                        <div className="counter-two__single-inner">
                                            <div className="counter-two__icon">
                                                <span className="icon-car"></span>
                                            </div>
                                            <div className="counter-two__count-box">
                                                <h3 className="odometer"><AdvanceCountUp ending={item?.count} /></h3>
                                                <span>{item?.symbol}</span>
                                            </div>
                                            <p className="counter-two__count-text">{item?.text}</p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))
                        } 
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CounterTwo;