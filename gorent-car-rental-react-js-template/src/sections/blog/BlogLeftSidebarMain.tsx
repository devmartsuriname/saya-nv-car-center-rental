import React from 'react';
import BlogSideBar from './BlogSideBar';
import BlogContent from './BlogContent';

const BlogLeftSidebarMain: React.FC = () => {
    
    return (
        <section className="blog-left-sidebar">
            <div className="container">
                <div className="row">
                    <BlogSideBar mainWrapper='col-xl-4' wrapper='sidebar sidebar--two' />
                    <BlogContent />
                </div>
            </div>
        </section>
    );
};

export default BlogLeftSidebarMain;