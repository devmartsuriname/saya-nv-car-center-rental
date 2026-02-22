import React, { useState } from 'react';
import bgimg1 from '../../assets/images/backgrounds/slider-1-1.jpg';
import bgimg2 from '../../assets/images/backgrounds/slider-1-2.jpg';
import bgimg3 from '../../assets/images/backgrounds/slider-1-3.jpg';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules'; 
import useGorentContext from '../../components/context/useGorentContext';

interface SliderItem {
    id: number;
    bgImage: string;
    titleHighlight: string;
    videoUrl: string;
}
const sliderData: SliderItem[] = [
    {
        id: 1,
        bgImage: bgimg1,
        titleHighlight: "Rental",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 2,
        bgImage: bgimg2,
        titleHighlight: "Booking",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 3,
        bgImage: bgimg3,
        titleHighlight: "Choosing",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
];
const BannerOne: React.FC = () => {
    const { handleVideoClick } = useGorentContext();
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="main-slider" id='home'>
            <div className="main-slider__carousel owl-carousel owl-theme">
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
                    {sliderData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div
                                    className="main-slider__bg"
                                    style={{
                                        backgroundImage: `url(${item.bgImage})`,
                                    }}
                                />

                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">Your Best</p>
                                        </div>

                                        <h2 className="main-slider__title">
                                            Car <span>{item.titleHighlight}</span>
                                        </h2>

                                        <p className="main-slider__sub-title-two">Experience</p>

                                        <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link to="/inner/about" className="thm-btn">
                                                    Read More
                                                    <span className="fas fa-arrow-right"></span>
                                                </Link>
                                            </div>

                                            <div className="main-slider__video-link">
                                                <Link
                                                    to={"#"}
                                                    onClick={(e) => handleVideoClick(e, item.videoUrl)}
                                                    className="video-popup"
                                                >
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play-2"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </Link>
                                                <h4 className="main-slider__video-title">Watch Video</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
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

export default BannerOne;