import React, { useState } from 'react';
import { motion } from "framer-motion";
import { blogData } from '../../data/blog/blogData';
import type { BlogItem } from '../../data/blog/blogType';
import { Link } from 'react-router-dom';

const BlogMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlog = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-page">
            <div className="container">
                <div className="row">
                    {currentBlog.map((blog: BlogItem) => (
                        <motion.div
                            initial={{ y: blog.id % 2 === 0 ? 30 : -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ amount: 0.1, once: true }}
                            className="col-xl-4 col-lg-4 col-md-6" key={blog.id}>
                            <div className="blog-one__single">
                                <div className="blog-one__img-box">
                                    <div className="blog-one__img">
                                        <img src={blog.image} alt={blog.title} />
                                        <div className="blog-one__tags">
                                            <span>{blog.tag}</span>
                                        </div>
                                    </div>
                                    <div className="blog-one__date">
                                        <p>{blog.day}</p>
                                        <span>{blog.month}</span>
                                    </div>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link to={blog.link}>
                                                <span className="fas fa-user"></span>
                                                {blog.author}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={blog.link}>
                                                <span className="fas fa-comments"></span>
                                                {blog.commentsText}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link to={blog.link}>{blog.title}</Link>
                                    </h3>
                                    <p className="blog-one__text">{blog.description}</p>
                                    <Link to={blog.link} className="blog-one__read-more">
                                        Read More <span className="fas fa-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="car-listing__pagination">
                        <ul className="pg-pagination list-unstyled">
                            <li className="prev">
                                <button
                                    onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                    disabled={currentPage === 1}
                                ><i className="fas fa-angle-left"></i></button>
                            </li>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li key={index + 5} className={`count ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button onClick={() => handlePageChange(index + 1)} className="pg-btn">
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
        </section>
    );
};

export default BlogMain;
