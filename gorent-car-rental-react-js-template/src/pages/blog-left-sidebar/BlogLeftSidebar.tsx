import React from 'react';
import Banner from '../../sections/common/Banner';
import BlogLeftSidebarMain from '../../sections/blog/BlogLeftSidebarMain';

const BlogLeftSidebar: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog Left Sidebar' />
            <BlogLeftSidebarMain />
        </>
    );
};

export default BlogLeftSidebar;