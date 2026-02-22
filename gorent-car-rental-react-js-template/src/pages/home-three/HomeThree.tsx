import React from 'react'; 
import BannerThree from '../../sections/home-three/BannerThree';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import SearchCarThree from '../../sections/home-three/SearchCarThree';
import AboutThree from '../../sections/home-three/AboutThree';
import ServiceThree from '../../sections/home-three/ServiceThree';
import ProcessThree from '../../sections/home-three/ProcessThree';
import CounterThree from '../../sections/home-three/CounterThree';
import ListingThree from '../../sections/home-three/ListingThree';
import VideoThree from '../../sections/home-three/VideoThree';
import PricingThree from '../../sections/home-three/PricingThree';
import LetsTalk from '../../sections/common/LetsTalk';
import TestimonialsThree from '../../sections/home-three/TextimonialsThree';
import TeamThree from '../../sections/home-three/TeamThree';
import ContactThree from '../../sections/home-three/ContactThree';
import FeaturesThree from '../../sections/home-three/FeaturesThree';
import BrandThree from '../../sections/home-three/BrandThree';
import DownloadApp from '../../sections/common/DownloadApp';
import BlogThree from '../../sections/home-three/BlogThree';
import HeaderThree from '../../sections/home-three/HeaderThree';

const HomeThree: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <HeaderThree />
            <BannerThree />
            <SearchCarThree />
            <AboutThree />
            <ServiceThree />
            <ProcessThree />
            <CounterThree />
            <ListingThree /> 
            <VideoThree />
            <PricingThree />
            <LetsTalk />
            <TestimonialsThree />
            <TeamThree />
            <ContactThree />
            <FeaturesThree />
            <BrandThree />
            <DownloadApp />
            <BlogThree /> 
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default HomeThree;