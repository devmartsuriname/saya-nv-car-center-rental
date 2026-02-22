import React, { useState } from 'react';
import { Link } from 'react-router';
import { listingData } from '../../all-content/listing/ListingData';
import CarListingRight from './CarListingRight';

const CarListVTwoMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 15;
    // Calculate paginated blogs
    const totalPages = Math.ceil(listingData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = listingData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="car-listing-page-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="car-listing-page-two__left">
                            <div className="row">
                                {
                                    currentCars.map((item, i) => (
                                        <div key={item?.id || i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="listing-two__single">
                                                <div className="listing-two__img-box">
                                                    <div className="listing-two__img">
                                                        <img src={item?.image} alt="Image" />
                                                    </div>
                                                </div>
                                                <div className="listing-two__content">
                                                    <p className="listing-two__sub-title">economy</p>
                                                    <h3 className="listing-two__title"><Link to={item?.link}>Tesla S-Line </Link>
                                                    </h3>
                                                    <div className="listing-two__price-and-btn">
                                                        <div className="listing-two__price-box">
                                                            <span>From</span>
                                                            <p>$180,00 /day</p>
                                                        </div>
                                                        <div className="listing-two__btn-box">
                                                            <Link to={item?.link} className="thm-btn">Book Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
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
                                            key={index}
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
                    <CarListingRight />
                </div>

            </div>
        </section>
    );
};

export default CarListVTwoMain;