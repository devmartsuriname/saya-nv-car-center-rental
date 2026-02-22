import React from 'react';
import { motion } from "framer-motion"
import tagLine from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { teamButtonData, teamTabData } from '../../all-content/team/teamData';
import type { TeamButtonItem, TeamTabItem } from '../../all-content/team/teamType';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
const TeamOne = () => {
    const [isActiveTab, setIsActiveTab] = React.useState<string>(teamButtonData[0].tabId);
    return (
        <section className="team-one" id='driver'>
            <div className="team-one__shape-1"></div>
            <div className="team-one__shape-2"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={tagLine} alt="Image" />
                        </div>
                        <span className="section-title__tagline">Our Drivers</span>
                    </div>
                    <h2 className="section-title__title title-animation"><TextAnimation text='Meet Our Premium Drivers' /> </h2>
                </div>
                <div className="team-one__inner">
                    <div className="team-one__main-tab-box tabs-box">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="team-one__tab-buttons-box-one">
                                    <ul className="tab-buttons list-unstyled">
                                        {
                                            teamButtonData.map((item: TeamButtonItem) => <motion.li
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.3 * item?.id,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.5, once: true }}
                                                key={item?.id} className={`tab-btn ${isActiveTab === item?.tabId ? 'active-btn' : ''}`} onClick={() => setIsActiveTab(item?.tabId)}>
                                                <div className="team-one__buttons">
                                                    <div className="team-one__buttons-experience-years">
                                                        <div className="team-one__buttons-experience-years-count">
                                                            <h3>0{item?.experienceYears}</h3>
                                                        </div>
                                                        <p className="team-one__buttons-experience-years-text">Years <br /> Experience</p>
                                                    </div>
                                                    <div className="team-one__buttons-content-box">
                                                        <div className="team-one__buttons-img-box">
                                                            <div className="team-one__buttons-img">
                                                                <img src={item?.image} alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="team-one__buttons-content">
                                                            <div className="team-one__buttons-title-box">
                                                                <h4 className="team-one__buttons-title">
                                                                    <Link to="#">{item?.name}</Link></h4>
                                                                <p className="team-one__buttons-sub-title">{item?.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="team-one__tabs-content-outer">
                                    <div className="tabs-content">
                                        {
                                            teamTabData.map((item: TeamTabItem) => <div 
                                                key={item?.id} className="tab active-tab" style={{ display: `${isActiveTab === `#${item?.tabId}` ? 'block' : 'none'}` }}>
                                                <div className="team-one__tabs-content-box">
                                                    <div className="team-one__img-box">
                                                        <div className="team-one__img">
                                                            <img src={item?.image} alt="Image" />
                                                            <div className="team-one__social">
                                                                {item?.socials.map((social, index) => (
                                                                    <Link key={index} to="#">
                                                                        <span className={social}></span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamOne;