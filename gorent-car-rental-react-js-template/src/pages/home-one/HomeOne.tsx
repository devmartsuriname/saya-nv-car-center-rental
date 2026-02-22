import React from 'react';
import Header from '../../sections/common/Header';
import BannerOne from '../../sections/home-one/BannerOne';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceOne from '../../sections/home-one/ServiceOne';
import AboutOne from '../../sections/home-one/AboutOne';
import ProcessOne from '../../sections/home-one/ProcessOne';
import WhychooseOne from '../../sections/home-one/WhychooseOne';
import ListingOne from '../../sections/home-one/ListingOne';
import VideoOne from '../../sections/home-one/VideoOne';
import PricingOne from '../../sections/home-one/PricingOne';
import Booking from '../../sections/common/Booking';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import FaqOne from '../../sections/home-one/FaqOne';
import TeamOne from '../../sections/home-one/TeamOne';
import BrandOne from '../../sections/home-one/BrandOne'; 
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import LetsTalk from '../../sections/common/LetsTalk';
import DownloadApp from '../../sections/common/DownloadApp';
import BlogOne from '../../sections/blog/BlogOne';

const HomeOne: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <BannerOne />
            <SlidingTextOne />
            <ServiceOne />
            <AboutOne />
            <ProcessOne />
            <Booking />
            <WhychooseOne />
            <ListingOne />
            <VideoOne />
            <PricingOne />
            <TestimonialOne />
            <FaqOne />
            <LetsTalk />
            <TeamOne />
            <DownloadApp />
            <BrandOne />
            <BlogOne />
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default HomeOne;