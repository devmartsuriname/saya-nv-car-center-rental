import React from 'react';
import Banner from '../../sections/common/Banner';
import CheckoutMain from '../../sections/checkout/CheckoutMain';

const CheckOut: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Checkout' />
            <CheckoutMain />
        </>
    );
};

export default CheckOut;