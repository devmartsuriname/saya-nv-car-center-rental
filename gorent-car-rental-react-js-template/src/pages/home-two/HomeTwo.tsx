import React from 'react';
import HeaderTwo from '../../sections/home-two/HeaderTwo';
import BannerTwo from '../../sections/home-two/BannerTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import BookingTwo from '../../sections/home-two/BookingTwo';
import AboutTwo from '../../sections/home-two/AboutTwo';
import ServiceTwo from '../../sections/home-two/ServiceTwo';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ProcessTwo from '../../sections/home-two/ProcessTwo';
import LetsTalk from '../../sections/common/LetsTalk';
import CounterTwo from '../../sections/home-two/CounterTwo';
import ListingTwo from '../../sections/home-two/ListingTwo';
import VideoTwo from '../../sections/home-two/VideoTwo';
import FaqTwo from '../../sections/home-two/FaqTwo';
import ContactTwo from '../../sections/home-two/ContactTwo';
import TeamTwo from '../../sections/home-two/TeamTwo';
import TestimonialTwo from '../../sections/home-two/TestimonialTwo';
import DownloadApp from '../../sections/common/DownloadApp';
import FeatureTwo from '../../sections/home-two/FeatureTwo';
import PopularTwo from '../../sections/home-two/PopularTwo';
import BrandTwo from '../../sections/home-two/BrandTwo'; 
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import BlogTwo from '../../sections/home-two/BlogTwo';

const HomeTwo: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <HeaderTwo />
            <BannerTwo />
            <BookingTwo />
            <AboutTwo />
            <ServiceTwo />
            <SlidingTextOne />
            <ProcessTwo />
            <LetsTalk />
            <CounterTwo />
            <ListingTwo />
            <VideoTwo />
            <FaqTwo />
            <ContactTwo />
            <TeamTwo />
            <TestimonialTwo />
            <DownloadApp />
            <FeatureTwo />
            <PopularTwo />
            <BrandTwo />
            <BlogTwo />
            <Gallery />
            <Footer />
            <StrickyHeaderTwo />
        </div>
    );
};

export default HomeTwo;