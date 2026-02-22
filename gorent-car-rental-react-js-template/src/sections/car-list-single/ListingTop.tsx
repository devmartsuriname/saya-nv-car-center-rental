import React from 'react';

const ListingTop: React.FC = () => {
    return (
        <div className="listing-single__top">
            <div className="listing-single__top-left">
                <h3 className="listing-single__title">Acura Sport Version</h3>
                <p className="listing-single__sub-title">4.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
                <div className="listing-single__car-details-box">
                    <ul className="list-unstyled listing-single__car-details">
                        <li>
                            <span className="icon-date"></span>
                            <p>2025</p>
                        </li>
                        <li>
                            <span className="icon-mileage"></span>
                            <p>80 Miles</p>
                        </li>
                        <li>
                            <span className="icon-Carrier"></span>
                            <p>Automatic</p>
                        </li>
                        <li>
                            <span className="icon-fuel-type"></span>
                            <p>Petrol</p>
                        </li>
                    </ul>
                    <ul className="list-unstyled listing-single__car-details">
                        <li>
                            <span className="icon-seat"></span>
                            <p>7 seats</p>
                        </li>
                        <li>
                            <span className="icon-door"></span>
                            <p>4 Doors</p>
                        </li>
                        <li>
                            <span className="icon-fuel-type"></span>
                            <p>2.5L</p>
                        </li>
                        <li>
                            <span className="icon-car-insurance"></span>
                            <p>3 Large bags</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="listing-single__top-right">
                <div className="listing-single__tag">
                    <a href="#">Share <span className="icon-arrow-up-from"></span> </a>
                    <a href="#">Save <span className="icon-bookmark"></span> </a>
                    <a href="#">Compare <span className="icon-compress"></span> </a>
                </div>
                <h2 className="listing-single__price">$150,000</h2>
                <div className="listing-single__offer-price">
                    <div className="icon">
                        <span className="icon-tag-2"></span>
                    </div>
                    <div className="text">
                        <p>Make An Offer Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingTop;