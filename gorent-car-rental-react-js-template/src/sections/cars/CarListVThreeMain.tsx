import React, { useState } from 'react';
import { Link } from 'react-router';
import { listingThreeData } from '../../all-content/listing/ListingData';
import type { ListingThreeItem } from '../../all-content/listing/listType';
import CarListingRight from './CarListingRight';

const CarListVThreeMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;
    // Calculate paginated blogs
    const totalPages = Math.ceil(listingThreeData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = listingThreeData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return (
        <section className="car-listing-page-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="car-listing-page-three__left">
                            <div className="row">
                                {currentCars.map((item: ListingThreeItem) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={item?.id} >
                                        <div className="listing-three__single">
                                            <div className="listing-three__img">
                                                <img src={item.image} alt={item.title} />
                                                <div className="listing-three__brand-name">
                                                    <p>{item.brand}</p>
                                                </div>
                                            </div>

                                            <div className="listing-three__content">
                                                <h3 className="listing-three__title">
                                                    <Link to="/inner/listing-single">
                                                        {item.title}
                                                    </Link>
                                                </h3>

                                                <div className="listing-three__meta-box-info">
                                                    <ul className="list-unstyled listing-three__meta">
                                                        {item.metaOne.map((m, i) => (
                                                            <li key={(i + 47)}>
                                                                <div className="icon">
                                                                    <span className={m.icon}></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{m.text}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <ul className="list-unstyled listing-three__meta listing-three__meta--two">
                                                        {item.metaTwo.map((m, i) => (
                                                            <li key={(i + 66)}>
                                                                <div className="icon">
                                                                    <span className={m.icon}></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{m.text}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="listing-three__car-rent-and-btn-box">
                                                    <p className="listing-three__car-rent">
                                                        <span>${item.price}/</span> Day
                                                    </p>
                                                    <div className="listing-three__btn-box">
                                                        <Link
                                                            to="/inner/listing-single"
                                                            className="listing-three__btn"
                                                        >
                                                            <span className="icon-right-arrow-1"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

export default CarListVThreeMain;