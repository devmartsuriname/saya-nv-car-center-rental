import React, { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import { testimonialData } from '../../all-content/testimonials/testimonialsData';
import type { TestimonialItem } from '../../all-content/testimonials/testimonialsType';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router';
import { Autoplay, Navigation } from 'swiper/modules';
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";

const TestimonialOne: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-one" id='testimonial'>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src={sectionTitleShape} alt="Image" />
                        </div>
                        <span className="section-title__tagline">Our Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='What Peoples Say' />
                        <TextAnimation text=' about Gorent' />
                    </h2>
                </div>
                <div className="testimonial-one__carousel owl-theme owl-carousel">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={setSwiperInstance}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            // 320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {
                            testimonialData.map((testimonial: TestimonialItem) => <SwiperSlide key={testimonial?.id}><div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__img">
                                            <img src={testimonial?.image} alt="Image" />
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
                            </div></SwiperSlide>)
                        }
                    </Swiper>
                    <div className="owl-nav">
                        <button type="button" role="presentation"
                            className="owl-prev"
                            onClick={() => swiperInstance?.slidePrev()}
                        >
                            <span className="far fa-long-arrow-left"></span>
                        </button>
                        <button type="button" role="presentation" className="owl-next"
                            onClick={() => swiperInstance?.slideNext()}
                        >
                            <span className="far fa-long-arrow-right"></span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialOne;