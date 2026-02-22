import React from 'react';
import Banner from '../../sections/common/Banner';
import ProductDetailsMain from '../../sections/product-details/ProductDetailsMain';
import ProductDescription from '../../sections/product-details/ProductDescription';
import ProductCarousel from '../../sections/product-details/ProductCarousel';

const ProductDetails: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Product Details' />
            <ProductDetailsMain />
            <ProductDescription />
            <ProductCarousel />
        </>
    );
};

export default ProductDetails;