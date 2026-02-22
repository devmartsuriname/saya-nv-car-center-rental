import React from 'react';
import Banner from '../../sections/common/Banner';
import BlogStandardMain from '../../sections/blog/BlogStandardMain';

const BlogStandard: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog Standard' />
            <BlogStandardMain />
        </>
    );
};

export default BlogStandard;