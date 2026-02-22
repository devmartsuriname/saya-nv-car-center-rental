import React from 'react';
import Banner from '../../sections/common/Banner';
import WishlistMain from '../../sections/wishlist/WishlistMain';

const Wishlist: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Wishlist' />
            <WishlistMain />
        </>
    );
};

export default Wishlist;