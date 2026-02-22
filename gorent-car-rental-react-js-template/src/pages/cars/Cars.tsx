import React from 'react';
import Banner from '../../sections/common/Banner';
import CarsMain from '../../sections/cars/CarsMain';

const Cars: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Cars' />
            <CarsMain />
        </>
    );
};

export default Cars;