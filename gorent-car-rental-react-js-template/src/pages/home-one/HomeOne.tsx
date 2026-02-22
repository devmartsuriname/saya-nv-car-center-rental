import React from 'react';
import Header from '../../sections/common/Header';
import BannerOne from '../../sections/home-one/BannerOne';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceOne from '../../sections/home-one/ServiceOne';
import AboutOne from '../../sections/home-one/AboutOne';
import WhychooseOne from '../../sections/home-one/WhychooseOne';
import ListingOne from '../../sections/home-one/ListingOne';
import QuickRequest from '../../sections/home-one/QuickRequest';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import VideoOne from '../../sections/home-one/VideoOne';
import BrandOne from '../../sections/home-one/BrandOne'; 
import GalleryHomeOne from '../../sections/home-one/GalleryHomeOne';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import LetsTalk from '../../sections/common/LetsTalk';

const HomeOne: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <BannerOne />
            <SlidingTextOne />
            <ServiceOne />
            <AboutOne />
            <ListingOne />
            <QuickRequest />
            <WhychooseOne />
            <TestimonialOne />
            <VideoOne />
            <GalleryHomeOne />
            <BrandOne />
            <LetsTalk />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default HomeOne;
