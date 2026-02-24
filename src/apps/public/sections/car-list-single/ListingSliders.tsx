import React, { useState } from 'react';
import mainSlideImg1 from "../../assets/images/listing/listing-single-1-1.jpg";
import mainSlideImg2 from "../../assets/images/listing/listing-single-1-2.jpg";
import mainSlideImg3 from "../../assets/images/listing/listing-single-1-3.jpg";
import thambImg1 from "../../assets/images/listing/listing-single-thamb-1-1.jpg";
import thambImg2 from "../../assets/images/listing/listing-single-thamb-1-2.jpg";
import thambImg3 from "../../assets/images/listing/listing-single-thamb-1-3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router-dom';
import useGorentContext from '../../components/context/useGorentContext';

interface List {
    icon: string;
    text: string;
    modle?: string;
}

interface MainSliderItem {
    id: number;
    title: string;
    image: string;
    description: string;
    videoUrl: string;
    lists: List[];
}

const thambList: { id: number, img: string }[] = [
    { id: 1, img: thambImg1 },
    { id: 2, img: thambImg2 },
    { id: 3, img: thambImg3 },
    { id: 4, img: thambImg2 },
    { id: 5, img: thambImg3 },
];

const mainSliderData: MainSliderItem[] = [
    {
        id: 1,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg1,
        description: `The Toyota Corolla Hybrid is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
    {
        id: 2,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg2,
        description: `The Toyota Corolla Hybrid is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
    {
        id: 3,
        title: `2025 Toyota Corolla Preview What's Coming Next Car`,
        image: mainSlideImg3,
        description: `The Toyota Corolla Hybrid is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.`,
        videoUrl: `https://www.youtube.com/watch?v=Get7rqXYrbQ`,
        lists: [
            { icon: "fas fa-map-marker-alt", text: "Las Vegas, USA" },
            { icon: "fas fa-map-marked-alt", text: "Show on map" },
            { icon: "fas fa-map", text: "Las Vegas, USA", modle: `BMW-4525` },
        ]
    },
];

const ListingSliders: React.FC = () => {
    const { handleVideoClick } = useGorentContext();
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    return (
        <div className="listing-single__inner">
            <div className="listing-single__main-content">
                <div className="swiper-container" id="listing-single__carousel">
                    <div className="swiper-wrapper">
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
                            onSwiper={setSwiperInstance}
                        >
                            {mainSliderData.map((item) => (
                                <SwiperSlide key={item?.id}>
                                    <div className="swiper-slide">
                                        <div className="listing-single__main-content-inner">
                                            <div className="row">
                                                <div className="col-xl-5 col-lg-5">
                                                    <div className="listing-single__left">
                                                        <div className="listing-single__img">
                                                            <img src={item?.image} alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 col-lg-7">
                                                    <div className="listing-single__right">
                                                        <h3 className="listing-single__title-two">{item?.title}</h3>
                                                        <p className="listing-single__text">{item?.description}</p>
                                                        <ul className="list-unstyled listing-single__meta">
                                                            {item?.lists.map((list, i) => (
                                                                <li key={i}>
                                                                    <div className="icon">
                                                                        <span className={list?.icon}></span>
                                                                    </div>
                                                                    <div className="text">
                                                                        {list?.modle ? <p>{list?.text}<a href="#"><span>{list?.modle}</span></a></p> : <p>{list?.text}</p>}
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="listing-single__btn-and-video-box">
                                                            <div className="listing-single__btn-box">
                                                                <Link to="/inner/cars" className="thm-btn">
                                                                    See All Photo
                                                                    <span className="fas fa-arrow-right"></span>
                                                                </Link>
                                                            </div>
                                                            <div className="listing-single__video-link">
                                                                <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, item?.videoUrl)}>
                                                                    <div className="listing-single__video-icon">
                                                                        <span className="icon-play-2"></span>
                                                                        <i className="ripple"></i>
                                                                    </div>
                                                                </a>
                                                                <h4 className="listing-single__video-title">Watch Video</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="listing-single__nav">
                    <div className="swiper-button-next" id="listing-single__swiper-button-prev" onClick={() => swiperInstance?.slidePrev()}>
                        <i className="far fa-long-arrow-left"></i>
                    </div>
                    <div className="swiper-button-prev" id="listing-single__swiper-button-next" onClick={() => swiperInstance?.slideNext()}>
                        <i className="far fa-long-arrow-right"></i>
                    </div>
                </div>
            </div>

            <div className="listing-single__thumb-box">
                <div className="swiper-container" id="listing-single__thumb">
                    <div className="swiper-wrapper">
                        <Swiper
                            direction="vertical"
                            slidesPerView={3}
                            spaceBetween={5}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            {thambList.map((item) => (
                                <SwiperSlide key={item?.id}>
                                    <div className="swiper-slide">
                                        <div className="listing-single__img-holder-box">
                                            <div className="listing-single__img-holder">
                                                <img src={item?.img} alt="Image" />
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
    );
};

export default ListingSliders;
