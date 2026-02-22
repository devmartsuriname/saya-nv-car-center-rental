import React from 'react';
import Banner from '../../sections/common/Banner';
import CarListVTwoMain from '../../sections/cars/CarListVTwoMain';

const CarListVTwo: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Car List V-2' />
            <CarListVTwoMain />
        </>
    );
};

export default CarListVTwo;