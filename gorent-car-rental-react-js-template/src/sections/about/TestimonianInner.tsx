import React, { useState } from "react";
import { Link } from "react-router";

import shape1 from "../../assets/images/shapes/testimonial-two-shape-1.png";
import shape2 from "../../assets/images/shapes/testimonial-two-shape-2.png";
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";

import TextAnimation from "../../components/elements/TextAnimation";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { testimonialsTwo } from "../../all-content/testimonials/testimonialsData";


const TestimonianInner: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="testimonial-two">
            <div className="testimonial-two__shape-1 float-bob-y">
                <img src={shape1} alt="image" />
            </div>

            <div className="testimonial-two__shape-2 float-bob-x">
                <img src={shape2} alt="image" />
            </div>

            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src={sectionShape} alt="image" />
                        </div>
                        <span className="section-title__tagline">Testimonials</span>
                    </div>

                    <h2 className="section-title__title title-animation">
                        <TextAnimation text="What Peoples Say" />
                        <TextAnimation text="about Gorent" />
                    </h2>
                </div>
                <div className="testimonial-two__carousel owl-carousel owl-theme">
                    <Swiper
                        slidesPerView={3}
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
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {testimonialsTwo.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="item" >
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__quote">
                                            <span className="icon-quote"></span>
                                        </div>

                                        <div className="testimonial-two__img">
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <p className="testimonial-two__text">{item.text}</p>

                                        <div className="testimonial-two__client-info">
                                            <div className="testimonial-two__client-content">
                                                <h4 className="testimonial-two__client-name">
                                                    <Link to={item.link}>{item.name}</Link>
                                                </h4>
                                                <p className="testimonial-two__client-sub-title">
                                                    {item.role}
                                                </p>
                                            </div>

                                            <div className="testimonial-two__rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <span className="icon-star" key={(i + 50)}></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="owl-nav" style={{ zIndex: '105' }}>
                        <button type="button"
                            className="owl-prev rotate180"
                            onClick={() => swiperInstance?.slidePrev()}
                        >
                            <span className="far fa-long-arrow-left"></span>
                        </button>
                        <button type="button" className="owl-next"
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

export default TestimonianInner;
