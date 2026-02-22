import React from 'react';
import Banner from '../../sections/common/Banner';
import CarListVOneMain from '../../sections/cars/CarListVOneMain';

const CarListVOne: React.FC = () => {
    return (
        <>
         <Banner breadcrumb='Car List V-1'/>
         <CarListVOneMain />   
        </>
    );
};

export default CarListVOne;