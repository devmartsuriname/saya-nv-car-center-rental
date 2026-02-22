import React from 'react';
import Banner from '../../sections/common/Banner';
import BlogMain from '../../sections/blog/BlogMain';

const Blog: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog' />
            <BlogMain />
        </>
    );
};

export default Blog;