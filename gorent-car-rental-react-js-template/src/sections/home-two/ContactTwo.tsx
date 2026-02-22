import React, { useState } from 'react';
import { motion } from "framer-motion"
import CustomSelect from '../../components/elements/CustomSelect';
import contactMain from "../../assets/images/resources/contact-one-img-1.png"
import contactImg from "../../assets/images/shapes/section-title-tagline-shape-2.png"
import TextAnimation from '../../components/elements/TextAnimation';
const ContactTwo: React.FC = () => {
    const [service, setService] = useState("")
    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const payload = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('Email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('Phone') as HTMLInputElement).value,
            service, // from state
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };


        // minimal validation
        if (!payload.name || !payload.email || !payload.phone || !payload.service) {
            return;
        }

        // 🚀 send to API
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload),
        // });

        form.reset();
        setService('');
    };
    return (
        <section className="contact-one" id='contact'>
            <div className="contact-one__bg jarallax" >
            </div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{ amount: 0.02, once: true }}
                className="contact-one__img wow" >
                <img src={contactMain} alt="Image" />
            </motion.div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="contact-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src={contactImg} alt="Image" />
                                    </div>
                                    <span className="section-title__tagline">contact us</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='We create online success' />
                                    <TextAnimation text='Together with you.' />
                                </h2>
                            </div>
                            <form className="contact-form-validated contact-one__form" onSubmit={handleContactSubmit}>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="name" placeholder="Your Name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-one__input-box">
                                            <input type="email" name="Email" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="Phone" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="contact-one__input-box">
                                            <div className="select-box">
                                                <CustomSelect optionArray={[
                                                    { id: 1, value: "Service Type", label: "Service Type" },
                                                    { id: 2, value: "Type Of Service 1", label: "Type Of Service 1" },
                                                    { id: 3, value: "Type Of Service 2", label: "Type Of Service 2" },
                                                    { id: 4, value: "Type Of Service 3", label: "Type Of Service 3" },
                                                    { id: 5, value: "Type Of Service 4", label: "Type Of Service 4" },
                                                ]}
                                                    value={service}
                                                    onChange={(value) => setService(value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box text-message-box">
                                            <textarea name="message" placeholder="Messege"></textarea>
                                        </div>
                                        <div className="contact-one__btn-box">
                                            <button type="submit" className="thm-btn">
                                                send a message
                                                <span className="fas fa-arrow-right"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactTwo;