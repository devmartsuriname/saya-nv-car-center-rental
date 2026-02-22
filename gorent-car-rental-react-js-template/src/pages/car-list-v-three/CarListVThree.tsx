import React from 'react';
import Banner from '../../sections/common/Banner';
import CarListVThreeMain from '../../sections/cars/CarListVThreeMain';

const CarListVThree: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Car List V-3' />
            <CarListVThreeMain />
        </>
    );
};

export default CarListVThree;