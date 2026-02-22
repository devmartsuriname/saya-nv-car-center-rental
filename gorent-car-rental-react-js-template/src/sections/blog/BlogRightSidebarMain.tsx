import React from 'react';
import BlogContent from './BlogContent';
import BlogSideBar from './BlogSideBar';

const BlogRightSidebarMain: React.FC = () => {

    return (
        <section className="blog-right-sidebar">
            <div className="container">
                <div className="row">
                    <BlogContent />
                    <BlogSideBar mainWrapper='col-xl-4' wrapper='sidebar sidebar--two' />
                </div>
            </div>
        </section>
    );
};
export default BlogRightSidebarMain;