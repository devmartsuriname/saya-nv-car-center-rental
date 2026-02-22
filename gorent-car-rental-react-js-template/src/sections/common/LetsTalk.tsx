import React from 'react';
import { Link } from 'react-router';

const LetsTalk: React.FC = () => {
    return (
        <section className="lets-talk">
            <div className="lets-talk__bg" ></div>
            <div className="container">
                <div className="lets-talk__inner">
                    <div className="lets-talk__title">
                        <p>Rent Your Car</p>
                        <h2>Interested in Renting?</h2>
                    </div>
                    <div className="lets-talk__btn-boxes">
                        <div className="lets-talk__btn-1">
                            <Link to="/inner/contact" className="thm-btn">
                                Contact Us
                                <span className="fas fa-arrow-right"></span>
                            </Link>
                        </div>
                        <div className="lets-talk__btn-2">
                            <Link to="/inner/car-list-v-1" className="thm-btn">Rent Now<span
                                className="fas fa-arrow-right"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsTalk;