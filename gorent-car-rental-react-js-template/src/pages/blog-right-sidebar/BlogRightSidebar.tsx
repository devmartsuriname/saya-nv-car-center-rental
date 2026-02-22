import React from 'react';
import Banner from '../../sections/common/Banner';
import BlogRightSidebarMain from '../../sections/blog/BlogRightSidebarMain';

const BlogRightSidebar: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog Right Sidebar' />
            <BlogRightSidebarMain />
        </>
    );
};

export default BlogRightSidebar;