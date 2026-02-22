import React from 'react';
import useGorentContext from '../../components/context/useGorentContext';

const VideoTwo: React.FC = () => {
    const { handleVideoClick } = useGorentContext()
    return (
        <section className="video-two">
            <div className="container">
                <div className="video-two__inner">
                    <div className="video-two__bg jarallax" ></div>
                    <div className="video-two__video-link">
                        <a href="#" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")} className="video-popup">
                            <div className="video-two__video-icon">
                                <span className="icon-play"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                    <h2 className="video-two__title">Want To Know More About? <br /> Play Our Promotional Video Now!</h2>
                </div>
            </div>
        </section>
    );
};

export default VideoTwo;