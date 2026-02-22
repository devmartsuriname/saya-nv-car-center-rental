import React from 'react';
import Banner from '../../sections/common/Banner';
import CarListingSingleMain from '../../sections/car-list-single/CarListingSingleMain';

const CarListingSingle: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Listing Single' />
            <CarListingSingleMain/>
        </>
    );
};

export default CarListingSingle;