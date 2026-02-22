import React from 'react';
import Banner from '../../sections/common/Banner';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServiceInner from '../../sections/service/ServiceInner';
import ProcessInner from '../../sections/process/ProcessInner';
import ServiceInnerTwo from '../../sections/service/ServiceInnerTwo';
import LetsTalk from '../../sections/common/LetsTalk';

const Service: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Services' />
            <SlidingTextOne />
            <ServiceInner sectionClass='services-one' />
            <ProcessInner sectionClass='services-page-process' />
            <ServiceInnerTwo sectionClass='services-four'/>
            <LetsTalk />
            <ServiceInner sectionClass='services-two'/>
        </>
    );
};

export default Service;