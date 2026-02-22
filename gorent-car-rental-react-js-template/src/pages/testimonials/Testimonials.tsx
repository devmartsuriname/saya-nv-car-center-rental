import React from 'react';
import Banner from '../../sections/common/Banner';
import { Link } from 'react-router';
import { testimonialData } from '../../all-content/testimonials/testimonialsData';
import type { TestimonialItem } from '../../all-content/testimonials/testimonialsType';

const Testimonials: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Testimonials' />
            <div className="testimonials-page">
                <div className="container">
                    <div className="row">
                        {
                            testimonialData.map((testimonial: TestimonialItem) => <div key={testimonial?.id} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__img">
                                            <img src={testimonial?.image} alt="testimonial image" />
                                        </div>
                                        <div className="testimonial-one__content">
                                            <h4 className="testimonial-one__client-name"><Link to={testimonial?.link}>{testimonial?.name}</Link>
                                            </h4>
                                            <p className="testimonial-one__sub-title">{testimonial?.role}</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-one__text">{testimonial?.text}</p>
                                    <div className="testimonial-one__rating">
                                        {
                                            Array.from({ length: testimonial?.rating }).map((_, index) => (
                                                <span key={index} className="icon-star"></span>
                                            ))
                                        }
                                    </div>
                                    <div className="testimonial-one__quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;