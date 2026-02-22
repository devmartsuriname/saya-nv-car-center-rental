import React from 'react';
import Banner from '../../sections/common/Banner';
import { Link } from 'react-router';
import errorImg from "../../assets/images/resources/error-page-img1.png"
import Header from '../../sections/common/Header';
import StrickyHeader from '../../sections/common/StrickyHeader';
import Footer from '../../sections/common/Footer';
import Gallery from '../../sections/common/Gallery';
const ErrorPage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner breadcrumb='404 Error' />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <img src={errorImg} alt="error image" />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <div className="btn-box">
                                <Link to="/" className="thm-btn">Back To Home <span className="fas fa-arrow-right"></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery />
            <Footer />
            <StrickyHeader />
        </>
    );
};

export default ErrorPage;