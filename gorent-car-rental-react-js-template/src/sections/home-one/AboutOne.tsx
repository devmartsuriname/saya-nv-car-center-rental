import React from "react";
import aboutImgOne from "../../assets/images/resources/about-one-img-1.jpg";
import aboutImgTwo from "../../assets/images/resources/about-one-img-2.jpg";
import shapeOne from "../../assets/images/shapes/about-one-shape-1.png";
import shapeTwo from "../../assets/images/shapes/about-one-shape-2.png";
import shapeThree from "../../assets/images/shapes/about-one-shape-3.png";
import shapeFour from "../../assets/images/shapes/about-one-shape-4.png";
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import Progresbar from "../../components/elements/Progressbar";
import AdvanceCountUp from "../../components/elements/AdvanceCountUp";
import TextAnimation from "../../components/elements/TextAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router";

const AboutOne: React.FC = () => {
  return (
    <section className="about-one" id="about">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-xl-6">
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
              viewport={{ amount: 0.01, once: true }}
              className="about-one__left wow slideInLeft"
            >
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <img src={aboutImgOne} alt="About main" />
                </div>

                <div className="about-one__shape-2 float-bob-y">
                  <img src={shapeTwo} alt="shape" />
                </div>

                <div className="about-one__shape-1">
                  <img src={shapeOne} alt="shape" />
                </div>

                <div className="about-one__shape-4 float-bob-x">
                  <img src={shapeFour} alt="shape" />
                </div>

                <div className="about-one__shape-3 float-bob-x">
                  <img src={shapeThree} alt="shape" />
                </div>

                <div className="about-one__img-2">
                  <img src={aboutImgTwo} alt="About secondary" />
                </div>

                <div className="about-one__experience">
                  <div className="about-one__experience-count">
                    <h3 className="odometer" data-count="50">
                      <AdvanceCountUp ending={50} />
                    </h3>
                    <span>+</span>
                  </div>
                  <p className="about-one__experience-text">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-shape">
                    <img src={sectionTitleShape} alt="shape" />
                  </div>
                  <span className="section-title__tagline">
                    About Gorent
                  </span>
                </div>

                <h2 className="section-title__title title-animation">
                  <TextAnimation text="Welcome to Gorent" />
                  <TextAnimation text="car booking company" />
                </h2>
              </div>

              <p className="about-one__text-1">
                Committed to providing our customers with
                <br />
                ultimate service.
              </p>

              <p className="about-one__text-2">
                Lorem ipsum is simply dummy text of the printing and
                typesetting industry and has been the industry's standard.
              </p>

              <ul className="about-one__progress-box list-unstyled">
                <Progresbar title="Time Awareness" value={90} />
                <Progresbar title="Driver Experience" value={70} />
              </ul>

              <div className="about-one__btn-box-and-call-box">
                <div className="about-one__btn-box">
                  <Link to="/inner/about" className="about-one__btn thm-btn">
                    Read More
                    <span className="fas fa-arrow-right"></span>
                  </Link>
                </div>

                <div className="about-one__call-box">
                  <div className="about-one__call-box-icon">
                    <span className="icon-call-2"></span>
                  </div>
                  <div className="about-one__call-box-content">
                    <p>Call to Anytime</p>
                    <h4>
                      <a href="tel:15502505260">
                        +1 (550) 250 5260
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
