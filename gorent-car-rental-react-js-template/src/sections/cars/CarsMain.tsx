import React, { useState } from 'react';
import { listingData } from '../../all-content/listing/ListingData';
import { Link } from 'react-router';

const CarsMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;
    // Calculate paginated blogs
    const totalPages = Math.ceil(listingData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = listingData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="cars-page">
            <div className="container">
                <div className="row">
                    {
                        currentCars.map((item, i) => <div key={item?.id || i} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="listing-one__single MX100">
                                <div className="listing-one__img">
                                    <img src={item.image} alt="Image" />
                                    <div className="listing-one__brand-name">
                                        <p>{item.brand}</p>
                                    </div>
                                </div>
                                <div className="listing-one__content">
                                    <h3 className="listing-one__title"><Link to={item?.link || "/listing-single"}>{item?.title}</Link></h3>
                                    <div className="listing-one__meta-box-info">
                                        <ul className="list-unstyled listing-one__meta">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-manual"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.transmission}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-mileage"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.mileage}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-fuel-type"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.fuel}</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled listing-one__meta listing-one__meta--two">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-test-drive"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.package}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-avatar"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Age {item?.minAge}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-in-person"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{item?.persons} Persons</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="listing-one__car-rent-box">
                                        <p className="listing-one__car-rent">Starting From
                                            <span>${item?.pricePerDay || 100}/</span> Day</p>
                                    </div>
                                    <div className="listing-one__btn-box">
                                        <Link to={item?.link || "/listing-single"} className="thm-btn">
                                            Details Now
                                            <span className="fas fa-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
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
        </section>
    );
};

export default CarsMain;