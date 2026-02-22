import React, { useState } from 'react';
import { motion } from "framer-motion"
import bookingImg from "../../assets/images/resources/booking-one-img-1.png";
import bookingShape from "../../assets/images/shapes/booking-one-shape-1.png";
import CustomSelect from "../../components/elements/CustomSelect";

const Booking: React.FC = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [carType, setCarType] = useState('');
    const [date, setDate] = useState('');

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!pickupLocation || pickupLocation === 'Enter a Location')
            newErrors.pickup = 'Pickup location required';

        if (!dropoffLocation || dropoffLocation === 'Enter a Location')
            newErrors.dropoff = 'Dropoff location required';

        if (!carType) newErrors.carType = 'Car type required';
        if (!date) newErrors.date = 'Date required';

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return;

        const bookingData = {
            pickupLocation,
            dropoffLocation,
            carType,
            date,
        };
        if (bookingData) return;

    };
    return (
        <section className="booking-one">
            <div className="booking-one__wrap">
                <div className="booking-one__bg" ></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="booking-one__left">
                                <motion.div
                                    className="booking-one__img wow "
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.01, once: true }}
                                >
                                    <img src={bookingImg} alt="booking" />
                                </motion.div>

                                <motion.div
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.01, once: true }}
                                    className="booking-one__shape-1 ">
                                    <img src={bookingShape} alt="shape" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7">
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                className="booking-one__right wow slideInRight"
                            >
                                <div className="booking-one__content">
                                    {/* Title */}
                                    <div className="booking-one__title-box">
                                        <div
                                            className="booking-one__title-shape"
                                        />
                                        <h3 className="booking-one__title">Book a car</h3>
                                    </div>

                                    {/* Form */}
                                    <form
                                        className="booking-one__form"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="row">
                                            {/* Pickup */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-pin-2"></span> Pickup
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { value: "Enter a Location", label: "Enter a Location" },
                                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                                { value: "Enter a Location 05", label: "Enter a Location 05" },
                                                            ]}
                                                            value={pickupLocation}
                                                            onChange={(value) => setPickupLocation(value)}
                                                        /> 
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Dropoff */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-pin-2"></span> Drop off
                                                    </p>
                                                    <div className="select-box">

                                                        <CustomSelect
                                                            optionArray={[
                                                                { value: "Enter a Location", label: "Enter a Location" },
                                                                { value: "Enter a Location 01", label: "Enter a Location 01" },
                                                                { value: "Enter a Location 02", label: "Enter a Location 02" },
                                                                { value: "Enter a Location 03", label: "Enter a Location 03" },
                                                                { value: "Enter a Location 04", label: "Enter a Location 04" },
                                                                { value: "Enter a Location 05", label: "Enter a Location 05" },
                                                            ]}
                                                            value={dropoffLocation}
                                                            onChange={(value) => setDropoffLocation(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Car Type */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-cuv"></span> Your car type
                                                    </p>
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { value: "Sedan", label: "Sedan" },
                                                                { value: "SUV", label: "SUV" },
                                                                { value: "Microbus", label: "Microbus" },
                                                                { value: "Luxury", label: "Luxury" },
                                                            ]}
                                                            value={carType}
                                                            onChange={(value) => setCarType(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Date */}
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="booking-one__input-box">
                                                    <p className="booking-one__input-title">
                                                        <span className="icon-date"></span> Date
                                                    </p>
                                                    <input
                                                        type="date"
                                                        value={date}
                                                        onChange={(e) => setDate(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <div className="col-xl-12">
                                                <div className="booking-one__btn-box">
                                                    <button type="submit" className="thm-btn">
                                                        Book Now
                                                        <span className="fas fa-arrow-right"></span>
                                                    </button>
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

export default Booking;