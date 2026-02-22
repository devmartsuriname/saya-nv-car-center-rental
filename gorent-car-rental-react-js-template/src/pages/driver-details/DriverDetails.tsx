import React from 'react';
import Banner from '../../sections/common/Banner';
import DriverDetailsMain from '../../sections/driver/DriverDetailsMain';

const DriverDetails: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Driver Details' />
            <DriverDetailsMain />
        </>
    );
};

export default DriverDetails;