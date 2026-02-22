import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import titleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from '../../components/elements/TextAnimation';
import { carListTwo } from '../../all-content/listing/ListingData';
import type { CarItemTwo } from '../../all-content/listing/listType';



const ListingTwo: React.FC = () => {
    return (
        <section className="listing-two" id='cars'>
            {/* <div className="container"> */}
            <div className="section-title text-center sec-title-animation animation-style1">
                <div className="section-title__tagline-box justify-content-center">
                    <div className="section-title__tagline-shape">
                        <img src={titleImg} alt="Image" />
                    </div>
                    <span className="section-title__tagline">
                        Checkout our new cars
                    </span>
                </div>
                <h2 className="section-title__title title-animation">
                    <TextAnimation text='Explore Most Popular Cars' />
                </h2>
            </div>

            <div className="listing-two__carousel owl-theme owl-carousel">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    speed={1000}
                    modules={[Navigation, Autoplay, Pagination]}
                    breakpoints={{
                        668: { slidesPerView: 2, spaceBetween: 0 },
                        792: { slidesPerView: 3, spaceBetween: 0 },
                        1024: { slidesPerView: 4, spaceBetween: 0 },
                        1324: { slidesPerView: 5, spaceBetween: 0 },
                        1624: { slidesPerView: 6, spaceBetween: 0 },
                    }}
                >
                    {carListTwo.map((car: CarItemTwo) => (
                        <SwiperSlide key={car.id}>
                            <div className="item">
                                <div className="listing-two__single mx-2 my-3">
                                    <div className="listing-two__img-box">
                                        <div className="listing-two__img">
                                            <img src={car.image} alt={car.title} />
                                        </div>
                                    </div>

                                    <div className="listing-two__content">
                                        <p className="listing-two__sub-title">{car.category}</p>

                                        <h3 className="listing-two__title">
                                            <Link to={car.link}>{car.title}</Link>
                                        </h3>

                                        <div className="listing-two__price-and-btn">
                                            <div className="listing-two__price-box">
                                                <span>From</span>
                                                <p>{car.price}</p>
                                            </div>

                                            <div className="listing-two__btn-box">
                                                <Link to={car.link} className="thm-btn">
                                                    Book Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* </div> */}
        </section>
    );
};

export default ListingTwo;
