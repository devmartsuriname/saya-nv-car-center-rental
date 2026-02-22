import React, { useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
// Images
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import TextAnimation from '../../components/elements/TextAnimation';
import { listingThreeData } from '../../all-content/listing/ListingData';
import type { ListingThreeItem } from '../../all-content/listing/listType';

const ListingThree: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <section className="listing-three" id='cars'>
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-left sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src={taglineShape} alt="Tagline Shape" />
                        </div>
                        <span className="section-title__tagline">
                            Checkout our new cars
                        </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Explore Most Popular Cars'/>
                    </h2>
                </div>

                {/* Carousel */}
                <div className="listing-three__carousel owl-carousel owl-theme">
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
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            660: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {listingThreeData.map((item: ListingThreeItem) => (
                            <SwiperSlide key={item.id}>
                                <div className="item" >
                                    <div className="listing-three__single">
                                        <div className="listing-three__img">
                                            <img src={item.image} alt={item.title} />
                                            <div className="listing-three__brand-name">
                                                <p>{item.brand}</p>
                                            </div>
                                        </div>

                                        <div className="listing-three__content">
                                            <h3 className="listing-three__title">
                                                <Link to="/inner/listing-single">
                                                    {item.title}
                                                </Link>
                                            </h3>

                                            <div className="listing-three__meta-box-info">
                                                <ul className="list-unstyled listing-three__meta">
                                                    {item.metaOne.map((m, i) => (
                                                        <li key={i}>
                                                            <div className="icon">
                                                                <span className={m.icon}></span>
                                                            </div>
                                                            <div className="text">
                                                                <p>{m.text}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <ul className="list-unstyled listing-three__meta listing-three__meta--two">
                                                    {item.metaTwo.map((m, i) => (
                                                        <li key={i}>
                                                            <div className="icon">
                                                                <span className={m.icon}></span>
                                                            </div>
                                                            <div className="text">
                                                                <p>{m.text}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="listing-three__car-rent-and-btn-box">
                                                <p className="listing-three__car-rent">
                                                    <span>${item.price}/</span> Day
                                                </p>
                                                <div className="listing-three__btn-box">
                                                    <Link
                                                        to="/inner/listing-single"
                                                        className="listing-three__btn"
                                                    >
                                                        <span className="icon-right-arrow-1"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="owl-nav" style={{ zIndex: '105' }}>
                        <button type="button"
                            className="owl-prev"
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

export default ListingThree;
