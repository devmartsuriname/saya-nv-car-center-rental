import React, { useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import sliderBg1 from "../../assets/images/backgrounds/slider-2-1.jpg"
import sliderBg2 from "../../assets/images/backgrounds/slider-2-2.jpg"
import sliderBg3 from "../../assets/images/backgrounds/slider-2-3.jpg"
import mainImage1 from "../../assets/images/resources/main-slider-img-1.png"
import mainImage2 from "../../assets/images/resources/main-slider-img-2.png"
import mainImage3 from "../../assets/images/resources/main-slider-img-3.png"

interface SliderItemTwo {
    id: number;
    bgImage: string;
    mainImage: string;
    subTitle: string;
    titleStart: string;
    TitleHighlight: string;
    titleEnd: string;
    description: string;
}

const mainSliderTwoData: SliderItemTwo[] = [
    {
        id: 1,
        bgImage: sliderBg1,
        mainImage: mainImage1,
        subTitle: "We make finding the right car simple",
        titleStart: "Your Best Car",
        TitleHighlight: "Booking",
        titleEnd: "Your Best Car",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
    {
        id: 2,
        bgImage: sliderBg2,
        mainImage: mainImage2,
        subTitle: "We make finding the right car simple",
        titleStart: "Find What Are You",
        TitleHighlight: "Looking",
        titleEnd: "For",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
    {
        id: 3,
        bgImage: sliderBg3,
        mainImage: mainImage3,
        subTitle: "We make finding the right car simple",
        titleStart: "Your Best Car",
        TitleHighlight: "Booking",
        titleEnd: "Experience",
        description: "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
    },
];


const BannerTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="main-slider-two" id='home'>
            <div className="main-slider-two__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {
                        mainSliderTwoData.map((item, index) => (
                            <SwiperSlide key={item.id || index}>
                                <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                    <div className="main-slider-two__bg" style={{
                                        backgroundImage: `url(${item.bgImage})`,
                                    }}> </div>
                                    <div className="main-slider-two__overly"></div>
                                    <div className="main-slider-two__img">
                                        <img src={item?.mainImage} alt="image" className="float-bob-y" />
                                    </div>
                                    <div className="container">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box">
                                                <p className="main-slider-two__sub-title">{item?.subTitle}</p>
                                            </div>
                                            <h2 className="main-slider-two__title">{item?.titleStart} <br /> <span>{item.TitleHighlight}</span> {item?.titleEnd}</h2>
                                            <p className="main-slider-two__text">
                                                Lorem ipsum is simply ipun txns mane so dummy text of free
                                                <br />
                                                available in market the printing and typesetting industry
                                            </p>
                                            <div className="main-slider-two__btn-box">
                                                <Link to="/inner/contact">
                                                    <div className="main-slider-two__btn-icon">
                                                        <i className="fab fa-google-play"></i>
                                                    </div>
                                                    <div className="main-slider-two__btn-content">
                                                        <p>Get It On</p>
                                                        <h3>Google Play</h3>
                                                    </div>
                                                </Link>
                                                <Link to="/inner/contact">
                                                    <div className="main-slider-two__btn-icon">
                                                        <i className="fab fa-apple"></i>
                                                    </div>
                                                    <div className="main-slider-two__btn-content">
                                                        <p>Download on the</p>
                                                        <h3>App Store</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="owl-nav">
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        type="button"
                        role="presentation"
                        className="owl-next"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BannerTwo;