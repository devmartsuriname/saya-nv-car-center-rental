import React from 'react';

const ContactMain: React.FC = () => {
    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const contactData = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            number: (form.elements.namedItem('number') as HTMLInputElement).value,
            company: (form.elements.namedItem('company') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        console.log('Contact Data:', contactData);

        if (!contactData.name || !contactData.email) { 
            return;
        }

        // 🔗 API call here
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(contactData),
        // });

        form.reset();
    };
    return (
        <>
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-call"></span>
                                </div>
                                <p>Contact Us</p>
                                <h3><a href="tel:558270575405">+55 827 057 5405</a></h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-email"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3><a href="mailto:example@gamil.com">example@gamil.com</a></h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                        {/*Contact Two Single Start*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Office Location</p>
                                <h3>12 Green Road 05 New Yark</h3>
                            </div>
                        </div>
                        {/*Contact Two Single End*/}
                    </div>
                </div>
            </section>
            {/*Contact Info End*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                        className="google-map__one" ></iframe>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                                    <form onSubmit={handleContactSubmit} id="contact-form" className="contact-form-validated contact-page__form" >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" name="name" placeholder="Your name" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="email" name="email" placeholder="Your Email" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Mobile" name="number" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Company" name="company" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea name="message" placeholder="Messege"></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <button type="submit" className="thm-btn contact-page__btn"
                                                        data-loading-text="Please wait...">
                                                        <span className="thm-btn-text">Send A Message</span>
                                                        <span className="thm-btn-icon-box"><i
                                                            className="fas fa-arrow-right"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="ajax-response mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMain;