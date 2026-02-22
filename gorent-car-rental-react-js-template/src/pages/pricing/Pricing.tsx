import React from 'react';
import Banner from '../../sections/common/Banner'; 
import PricingMain from '../../sections/pricing/PricingMain';

const Pricing: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Pricing' />
            <PricingMain />
        </>
    );
};

export default Pricing;