import React, { useState } from 'react';
import { Link } from 'react-router';
import BlogSideBar from './BlogSideBar';
import { blogStandardListData } from '../../all-content/blog/blogData';
import type { BlogStandardItem } from '../../all-content/blog/blogType';

const BlogStandardMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    // Calculate paginated blogs
    const totalPages = Math.ceil(blogStandardListData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlog = blogStandardListData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {
                                currentBlog.map((blog: BlogStandardItem) => (
                                    <div className="blog-list__single" key={blog?.id}>
                                        <div className="blog-list__img">
                                            <img src={blog?.image} alt="Image" />
                                            <div className="blog-list__date">
                                                <p>{blog?.date?.day}<br />{blog?.date?.month}</p>
                                            </div>
                                        </div>
                                        <div className="blog-list__content">
                                            <div className="blog-list__user-and-meta">
                                                <div className="blog-list__user">
                                                    <p><span className="icon-user"></span>{blog?.author}</p>
                                                </div>
                                                <ul className="blog-list__meta list-unstyled">
                                                    <li>
                                                        <a href="#"><span className="icon-comments"></span>Comments {`(0${blog?.comments})`}</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><span className="icon-clock"></span>{blog?.readTime}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="blog-list__title"><Link to={blog?.link}>{blog?.title} </Link></h3>
                                            <p className="blog-list__text">{blog?.description}</p>
                                            <Link to={blog?.link} className="blog-list__read-more">Learn More<span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="car-listing__pagination">
                                <ul className="pg-pagination list-unstyled">
                                    <li className="prev">
                                        <button
                                            onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                            disabled={currentPage === 1}
                                        ><i className="fas fa-angle-left"></i></button>
                                    </li>
                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <li
                                            key={(index + 8)}
                                            className={`count ${currentPage === index + 1 ? "active" : ""}`}
                                        >
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                                className="pg-btn"
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className="next">
                                        <button aria-label="Next"
                                            onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}
                                            disabled={currentPage === totalPages}
                                        ><i className="fas fa-angle-right"></i></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSideBar mainWrapper='col-xl-4 col-lg-5' wrapper='sidebar' />
                </div>
            </div>
        </section>
    );
};

export default BlogStandardMain;