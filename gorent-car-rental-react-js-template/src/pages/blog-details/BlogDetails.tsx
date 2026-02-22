import React from 'react';
import Banner from '../../sections/common/Banner';
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';

const BlogDetails: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog Details' />
            <BlogDetailsMain />
        </>
    );
};

export default BlogDetails;