import React from 'react';
import shapeTitleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import shapeTitleImgTwo from "../../assets/images/shapes/section-title-tagline-shape-2.png";
import { Link } from 'react-router';
import { motion } from "framer-motion"
import { popularCarData, pricingData } from '../../all-content/pricing/PricingData';
import type { PopularCarItem, PricingItem } from '../../all-content/pricing/pricingType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import TextAnimation from '../../components/elements/TextAnimation';

const PricingOne: React.FC = () => {
    return (
        <>
            <section className="pricing-one">
                <div className="pricing-one__shape-1"></div>
                <div className="pricing-one__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape">
                                <img src={shapeTitleImg} alt="Image" />
                            </div>
                            <span className="section-title__tagline">Pricing & Plan</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            <TextAnimation text='Time Quick and Easy to' />
                            <TextAnimation text='Transportation' />
                        </h2>
                    </div>
                    <div className="row">
                        {
                            pricingData.map((item: PricingItem) => <motion.div
                                initial={{ y: item?.id % 2 === 0 ? 50 : -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.3 * item?.id || 0.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.5, once: true }}
                                key={item?.id} className="col-xl-4 col-lg-6 col-md-6 wow">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__title-box">
                                        <h2 className="pricing-one__title">{item?.title}</h2>
                                        <p className="pricing-one__text">{item?.description}</p>
                                    </div>
                                    <div className="pricing-one__price-and-icon-box">
                                        <div className="pricing-one__price-box">
                                            <h3 className="pricing-one__price">${item?.price} <span>{item?.duration}</span> </h3>
                                        </div>
                                        <div className="pricing-one__icon-box">
                                            <span className={`${item?.icon || "icon-taxi"} `}></span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled pricing-one__points">
                                        {item.points.map((point, index) => (
                                            <li key={index}>
                                                <div className="text">
                                                    <p>{point.label}</p>
                                                </div>
                                                <div className="price">
                                                    <p>{point.value}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pricing-one__btn-box">
                                        <Link to="/inner/pricing" className="thm-btn">Rent Now<span className="fas fa-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </motion.div>)
                        }
                    </div>
                </div>
            </section>
            <section className="call-one">
                <div className="container">
                    <div className="call-one__inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="call-one__inner-content">
                            <div className="call-one__bg"> </div>
                            <div className="call-one__left">
                                <p className="call-one__sub-title">Available 24/7</p>
                                <h4 className="call-one__title">Call Any Time For Booking</h4>
                            </div>
                            <div className="call-one__details">
                                <div className="call-one__icon">
                                    <span className="icon-call-2"></span>
                                </div>
                                <div className="call-one__content">
                                    <p>Call Emergency</p>
                                    <h4><a href="tel:+9288006780">+92 ( 8800 ) - 6780</a></h4>
                                </div>
                            </div>
                            <div className="call-one__btn-box">
                                <Link to="/inner/car-list-v-1" className="thm-btn">Rent Now<span className="fas fa-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-car-one">
                <div className="popular-car-one__bg jarallax" ></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape">
                                <img src={shapeTitleImgTwo} alt="Image" />
                            </div>
                            <span className="section-title__tagline">Popular Car</span>
                        </div>
                        <h2 className="section-title__title title-animation"><TextAnimation text='Most Popular Cartypes' /></h2>
                    </div>
                    <div className="popular-car-one__carousel owl-carousel owl-theme">
                        <Swiper modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={5}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={1000}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                492: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1000: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                },
                            }}>
                            {
                                popularCarData.map((item: PopularCarItem) => <SwiperSlide key={item?.id}>
                                    <div className="item">
                                        <div className="popular-car-one__single">
                                            <div className="popular-car-one__icon">
                                                <span className={item?.icon}></span>
                                            </div>
                                            <div className="popular-car-one__single-inner">
                                                <h4 className="popular-car-one__title"><Link to={item?.link}>{item?.title}</Link></h4>
                                            </div>
                                            <p className="popular-car-one__count">{item?.count} Cars</p>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingOne;