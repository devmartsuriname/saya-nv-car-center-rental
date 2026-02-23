import React, { useState } from 'react';
import { motion } from "framer-motion"
import bookingImg from "../../assets/images/resources/booking-one-img-1.png";
import bookingShape from "../../assets/images/shapes/booking-one-shape-1.png";
import CustomSelect from "../../components/elements/CustomSelect";

const QuickRequest: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // No backend logic — structural only
    };

    const whatsappNumber = '1234567890';
    const whatsappMessage = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nMessage: ${message}`
    );

    return (
        <section className="booking-one">
            <div className="booking-one__wrap">
                <div className="booking-one__bg"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="booking-one__left">
                                <motion.div
                                    className="booking-one__img wow"
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ amount: 0.01, once: true }}
                                >
                                    <img src={bookingImg} alt="booking" />
                                </motion.div>

                                <motion.div
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ amount: 0.01, once: true }}
                                    className="booking-one__shape-1"
                                >
                                    <img src={bookingShape} alt="shape" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7">
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ amount: 0.01, once: true }}
                                className="booking-one__right wow slideInRight"
                            >
                                <div className="booking-one__content">
                                    <div className="booking-one__title-box">
                                        <div className="booking-one__title-shape" />
                                        <h3 className="booking-one__title">Quick Request</h3>
                                    </div>

                                    <form className="booking-one__form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            {/* Name */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-avatar"></span> Name
                                                    </p>
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-pin-2"></span> Phone
                                                    </p>
                                                    <input
                                                        type="text"
                                                        placeholder="Your Phone Number"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Desired Vehicle */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-cuv"></span> Desired Vehicle
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { value: "", label: "Select Vehicle (Optional)" },
                                                                { value: "Sedan", label: "Sedan" },
                                                                { value: "SUV", label: "SUV" },
                                                                { value: "Microbus", label: "Microbus" },
                                                                { value: "Luxury", label: "Luxury" },
                                                            ]}
                                                            value={vehicle}
                                                            onChange={(value) => setVehicle(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-date"></span> Message
                                                    </p>
                                                    <textarea
                                                        placeholder="Your Message (Optional)"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        rows={3}
                                                    />
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="col-xl-12">
                                                <div className="booking-one__btn-box" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                                    <button type="submit" className="thm-btn">
                                                        Submit Request
                                                        <span className="fas fa-arrow-right"></span>
                                                    </button>
                                                    <a
                                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="thm-btn"
                                                        style={{ background: '#25D366' }}
                                                    >
                                                        <span className="fab fa-whatsapp" style={{ marginRight: '8px' }}></span>
                                                        WhatsApp
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="result"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickRequest;
