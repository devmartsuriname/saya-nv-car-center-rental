import React, { useEffect } from 'react';
import BannerOne from '../../sections/home-one/BannerOne';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceOne from '../../sections/home-one/ServiceOne';
import AboutOne from '../../sections/home-one/AboutOne';
import ProcessOne from '../../sections/home-one/ProcessOne';
import Booking from '../../sections/common/Booking';
import WhychooseOne from '../../sections/home-one/WhychooseOne';
import ListingOne from '../../sections/home-one/ListingOne';
import VideoOne from '../../sections/home-one/VideoOne';
import PricingOne from '../../sections/home-one/PricingOne';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import FaqOne from '../../sections/home-one/FaqOne';
import LetsTalk from '../../sections/common/LetsTalk';
import TeamOne from '../../sections/home-one/TeamOne';
import DownloadApp from '../../sections/common/DownloadApp';
import BrandOne from '../../sections/home-one/BrandOne';
import BlogOne from '../../sections/blog/BlogOne';
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import Header from '../../sections/common/Header';
import useGorentContext from '../../components/context/useGorentContext';

const HomeOneSinglePage: React.FC = () => {
    const { setActiveSection } = useGorentContext();
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.7,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);
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

export default HomeOneSinglePage;