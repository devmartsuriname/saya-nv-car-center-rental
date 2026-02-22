import React from 'react';
import Banner from '../../sections/common/Banner';
import AboutInner from '../../sections/about/AboutInner';   
import TeamInner from '../../sections/about/TeamInner';
import TestimonianInner from '../../sections/about/TestimonianInner';
import LetsTalk from '../../sections/common/LetsTalk'; 
import BlogOne from '../../sections/blog/BlogOne';
import ServiceInner from '../../sections/service/ServiceInner';
import BookingInner from '../../sections/booking/BookingInner';
import ListingInner from '../../sections/about/ListingInner';

const About: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='About Us' />
            <AboutInner />
            <ServiceInner sectionClass='services-one' />
            <BookingInner />
            <ListingInner/>
            <TeamInner />
            <TestimonianInner />
            <LetsTalk />
            <BlogOne />
        </>
    );
};

export default About;