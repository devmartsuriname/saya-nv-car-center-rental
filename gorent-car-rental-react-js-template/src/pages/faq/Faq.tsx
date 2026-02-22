import React, { useState } from 'react';
import Banner from '../../sections/common/Banner';
import { motion } from "framer-motion"
import { faqsOne, faqsTwo } from '../../all-content/faq/faqData';
const Faq: React.FC = () => {
    const [isActiveFaq, setIsActiveFaq] = useState<number | null>(2);
    return (
        <>
            <Banner breadcrumb='Faq' />
            <div className="faq-one faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__left">
                                <div className="accrodion-grp faq-one-accrodion" >
                                    {
                                        faqsOne.map((item) => (
                                            <motion.div
                                                key={item?.id}
                                                initial={{ x: 50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.08 * item.id,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.05, once: true }}
                                                className={`accrodion ${isActiveFaq === item.id ? "active" : ""}`}
                                            >
                                                <div className="accrodion-title" onClick={() => setIsActiveFaq(item?.id)}>
                                                    <h4>{item?.question}</h4>
                                                </div>
                                                <motion.div
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.05 }}
                                                    className="accrodion-content" style={{ display: `${isActiveFaq === item.id ? "block" : "none"}` }}>
                                                    <div className="inner">
                                                        <p> {item?.description}</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__right">
                                <div className="accrodion-grp faq-one-accrodion" >
                                    {
                                        faqsTwo.map((item) => (
                                            <motion.div
                                                key={item?.id}
                                                initial={{ x: 50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.08 * item.id,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.05, once: true }}
                                                className={`accrodion ${isActiveFaq === item.id ? "active" : ""}`}
                                            >
                                                <div className="accrodion-title" onClick={() => setIsActiveFaq(item?.id)}>
                                                    <h4>{item?.question}</h4>
                                                </div>
                                                <motion.div
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.05 }}
                                                    className="accrodion-content" style={{ display: `${isActiveFaq === item.id ? "block" : "none"}` }}>
                                                    <div className="inner">
                                                        <p> {item?.description}</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;