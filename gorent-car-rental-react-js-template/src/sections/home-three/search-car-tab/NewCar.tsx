import React from 'react';
import { motion } from "framer-motion"
import CustomSelect from '../../../components/elements/CustomSelect';

const NewCar: React.FC = () => {
    return (
        <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            viewport={{ amount: 0.1 }}
            className="tabs-content__inner">
            <form className="contact-form-validated search-car__form" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span className="icon-pin-2"></span>
                                Pickup</p>
                            <div className="select-box">
                                <CustomSelect optionArray={[
                                    { value: "Enter a Location", label: "Enter a Location" },
                                    { value: "Enter a Location 01", label: "Enter a Location 01" },
                                    { value: "Enter a Location 02", label: "Enter a Location 02" },
                                    { value: "Enter a Location 03", label: "Enter a Location 03" },
                                    { value: "Enter a Location 04", label: "Enter a Location 04" },
                                    { value: "Enter a Location 05", label: "Enter a Location 05" }
                                ]} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span
                                className="icon-date"></span>Pickup Date</p>
                            <input type="date" placeholder="mm/dd/yyy" name="date" id="datepicker" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span
                                className="icon-clock"></span>Pickup Time</p>
                            <input type="time" name="time" placeholder="Chose A Time" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span className="icon-pin-2"></span>
                                Drop of
                            </p>
                            <div className="select-box">
                                <CustomSelect optionArray={[
                                    { value: "Enter a Location", label: "Enter a Location" },
                                    { value: "Enter a Location 01", label: "Enter a Location 01" },
                                    { value: "Enter a Location 02", label: "Enter a Location 02" },
                                    { value: "Enter a Location 03", label: "Enter a Location 03" },
                                    { value: "Enter a Location 04", label: "Enter a Location 04" },
                                    { value: "Enter a Location 05", label: "Enter a Location 05" }
                                ]} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span
                                className="icon-date"></span>Drop of Date</p>
                            <input type="date" placeholder="mm/dd/yyy" name="date" id="datepicker-2" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="search-car__input-box">
                            <p className="search-car__input-title"> <span
                                className="icon-clock"></span>Drop of Time</p>
                            <input type="time" name="time" placeholder="Chose A Time" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="search-car__btn-box">
                            <button type="submit" className="thm-btn">Find a Vehicle
                                <span className="fas fa-search"></span></button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="result"></div>
        </motion.div>
    );
};

export default NewCar;