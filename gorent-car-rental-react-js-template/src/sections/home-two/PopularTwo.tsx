import React from 'react';
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from '../../components/elements/TextAnimation';

interface PopularCarType {
    id: number;
    title: string;
    count: string;
    iconClass: string;
    link: string;
}

const popularCarTypes: PopularCarType[] = [
    {
        id: 1,
        title: "Sedan",
        count: "9 Cars",
        iconClass: "icon-sedan",
        link: "/car-list-v-1",
    },
    {
        id: 2,
        title: "Sports Coupe",
        count: "3 Cars",
        iconClass: "icon-sports-car",
        link: "/car-list-v-2",
    },
    {
        id: 3,
        title: "Crossover",
        count: "5 Cars",
        iconClass: "icon-car-2",
        link: "/car-list-v-3",
    },
    {
        id: 4,
        title: "Pickup",
        count: "8 Cars",
        iconClass: "icon-car-1",
        link: "/cars",
    },
    {
        id: 5,
        title: "Family MPV",
        count: "6 Cars",
        iconClass: "icon-cuv",
        link: "/cars",
    },
    {
        id: 6,
        title: "Pickup",
        count: "7 Cars",
        iconClass: "icon-cuv",
        link: "/cars",
    },
];


const PopularTwo: React.FC = () => {
    return (
        <section className="popular-car-two">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={sectionShape} alt="Image" />
                        </div>
                        <span className="section-title__tagline">Popular Car</span>
                    </div>

                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Most Popular Cartypes' />
                    </h2>
                </div>

                <div className="popular-car-two__carousel owl-carousel owl-theme">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }} 
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            492: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 }, 
                        }}
                    >
                        {popularCarTypes.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="item" >
                                    <div className="popular-car-two__single">
                                        <div className="popular-car-two__icon">
                                            <span className={item.iconClass}></span>
                                        </div>

                                        <div className="popular-car-two__single-inner">
                                            <h4 className="popular-car-two__title">
                                                <Link to={item.link}>{item.title}</Link>
                                            </h4>
                                            <p className="popular-car-two__count">{item.count}</p>
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

export default PopularTwo;
