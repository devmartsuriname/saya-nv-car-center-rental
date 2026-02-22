import React from 'react';
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import brand1 from "../../assets/images/brand/brand-2-1.png";
import brand2 from "../../assets/images/brand/brand-2-2.png";
import brand3 from "../../assets/images/brand/brand-2-3.png";
import brand4 from "../../assets/images/brand/brand-2-4.png";
import brand5 from "../../assets/images/brand/brand-2-5.png";

interface BrandItem {
    id: number;
    image: string;
    link: string;
}

const brands: BrandItem[] = [
    { id: 1, image: brand1, link: "#" },
    { id: 2, image: brand2, link: "#" },
    { id: 3, image: brand3, link: "#" },
    { id: 4, image: brand4, link: "#" },
    { id: 5, image: brand5, link: "#" },
];

const BrandTwo: React.FC = () => {
    return (
        <section className="brand-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="brand-two__left">
                            <p className="brand-two__text">
                                We have <span>over 250 trusted</span> <br />
                                brands worldwide
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="brand-two__right">
                            <div className="brand-two__carousel owl-theme owl-carousel">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={2}
                                    slidesPerView={3}
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
                                        993: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    {brands.map((brand) => (
                                        <SwiperSlide key={brand.id}>
                                            <div className="item" >
                                                <div className="brand-two__single">
                                                    <div className="brand-two__img">
                                                        <Link to={brand.link}>
                                                            <img src={brand.image} alt="Brand logo" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandTwo;
