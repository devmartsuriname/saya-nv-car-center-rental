import React from 'react';
import Banner from '../../sections/common/Banner';
import CartMain from '../../sections/cart/CartMain';

const Cart: React.FC = () => {
    
    return (
        <>
            <Banner breadcrumb='Cart' />
            <CartMain />
        </>
    );
};

export default Cart;