import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import brand1 from "../../assets/images/brand/brand-1-1.png";
import brand2 from "../../assets/images/brand/brand-1-2.png";
import brand3 from "../../assets/images/brand/brand-1-3.png";
import brand4 from "../../assets/images/brand/brand-1-4.png";
import brand5 from "../../assets/images/brand/brand-1-5.png";
import brand6 from "../../assets/images/brand/brand-1-6.png";
import { Link } from 'react-router';
type BrandItem = {
    id: number;
    image: string;
    link: string;
};
const brandData: BrandItem[] = [
    {
        id: 1,
        image: brand1,
        link: "#",
    },
    {
        id: 2,
        image: brand2,
        link: "#",
    },
    {
        id: 3,
        image: brand3,
        link: "#",
    },
    {
        id: 4,
        image: brand4,
        link: "#",
    },
    {
        id: 5,
        image: brand5,
        link: "#",
    },
    {
        id: 6,
        image: brand6,
        link: "#",
    },
    {
        id: 7,
        image: brand3,
        link: "#",
    },
    {
        id: 8,
        image: brand2,
        link: "#",
    },
];

const BrandOne: React.FC = () => {
    return (
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__carousel owl-theme  ">
                    <Swiper modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={6}
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
                                slidesPerView: 4,
                            },
                            1000: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                        }}>


                        {brandData.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="item" >
                                    <div className="brand-one__single">
                                        <div className="brand-one__img">
                                            <Link to={brand.link}>
                                                <img src={brand.image} alt={`brand-${brand.id}`} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default BrandOne;