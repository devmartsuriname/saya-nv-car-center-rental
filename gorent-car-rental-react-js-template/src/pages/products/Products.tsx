import React from 'react';
import Banner from '../../sections/common/Banner';
import ProductsMain from '../../sections/products/ProductsMain';

const Products: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Products' />
            <ProductsMain />
        </>
    );
};

export default Products;