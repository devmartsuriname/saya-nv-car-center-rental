import React from 'react';
import { motion } from "framer-motion"
import resentPostImg from "../../assets/images/blog/recent-post-img-1.jpg"
import resentPostImg2 from "../../assets/images/blog/recent-post-img-2.jpg"
import resentPostImg3 from "../../assets/images/blog/recent-post-img-3.jpg"
interface SideBarProps {
    mainWrapper: string;
    wrapper: string;
}
const BlogSideBar: React.FC<SideBarProps> = ({ mainWrapper, wrapper }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const search = form.search.value;
            
            if (search) { 
                form.reset();
            };
        }

    return (
        <div className={mainWrapper}>
            <div className={wrapper}>
                {/*Start Sidebar Single*/}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                    viewport={{ amount: 0.05, once: true }}
                    className="sidebar__single sidebar__search">
                    <form onSubmit={handleSubmit} className="sidebar__search-form">
                        <input type="search" name='search' placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </motion.div>
                {/*End Sidebar Single*/}

                {/*Start Sidebar Single*/}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    viewport={{ amount: 0.5, once: true }}
                    className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">Categories</h3>
                    <ul className="sidebar__category-list list-unstyled">
                        <li><a href="#">
                            Corporate car rental <span>(12)</span></a></li>
                        <li className="active"><a href="#">Parallax Effect
                            <span>(15)</span></a></li>
                        <li><a href="#">Car rental with driver <span>(08)</span></a></li>
                        <li><a href="#">
                            Airport transfer <span>(20)</span></a></li>
                        <li><a href="#">
                            Fleet leasing <span>(14)</span></a></li>
                        <li><a href="#">
                            Pick-Up Locations <span>(05)</span></a></li>
                    </ul>
                </motion.div>
                {/*End Sidebar Single*/}

                {/*Start Sidebar Single*/}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    viewport={{ amount: 0.5, once: true }}
                    className="sidebar__single sidebar__post">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <div className="sidebar__post-box">
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={resentPostImg} alt="Image" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><a href="#">Regular maintenance cleaning or replacing air filters</a>
                                </h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={resentPostImg2} alt="Image" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><a href="#">Water leakage can be due to a clogged drain line repaire</a>
                                </h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={resentPostImg3} alt="Image" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><a href="#">Revitalising your people in to a retail downturn.</a></h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/*End Sidebar Single*/}

                {/*Start Sidebar Single*/}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    viewport={{ amount: 0.5, once: true }}
                    className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">Tags Cloud</h3>
                    <ul className="sidebar__tags-list clearfix list-unstyled">
                        <li><a href="#">Growth Accelerator</a></li>
                        <li><a href="#">Management</a></li>
                        <li><a href="#">Analysis</a></li>
                        <li><a href="#">Planning</a></li>
                        <li><a href="#">Solution</a></li>
                        <li><a href="#">Advisory Service</a></li>
                    </ul>
                </motion.div>
                {/*End Sidebar Single*/}

            </div>
        </div>
    );
};

export default BlogSideBar;