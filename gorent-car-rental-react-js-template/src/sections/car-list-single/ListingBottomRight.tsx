import React from 'react';
import infoImg from "../../assets/images/listing/listing-single-seller-info-img-1.jpg"
import { Link } from 'react-router';
const ListingBottomRight: React.FC = () => {
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="listing-single__sidebar">
                <div className="listing-single__rent-car-daily-price listing-single__single-box">
                    <p>Daily rate</p>
                    <h3>$150</h3>
                </div>
                <div className="listing-single__rent-car listing-single__single-box">
                    <h3 className="listing-single__rent-car-title">Rent This Car</h3>
                    <div className="listing-single__rent-car-content">
                        <div className="listing-single__rent-car-content-form">
                            <div className="listing-single__rent-car-date-box">
                                <p className="listing-single__rent-car-date-title">Pick-Up
                                </p>
                                <div className="listing-single__rent-car-date-time-box">
                                    <input type="text" placeholder="mm/dd/yyy" name="date"
                                        id="datepicker" />
                                    <input type="text" name="time" placeholder="Time"
                                        className="listing-single__rent-car-time-box" />
                                </div>
                            </div>
                            <div className="listing-single__rent-car-date-box">
                                <p className="listing-single__rent-car-date-title">Drop-Off</p>
                                <div className="listing-single__rent-car-date-time-box">
                                    <input type="text" placeholder="mm/dd/yyy" name="date"
                                        id="datepicker-2" />
                                    <input type="text" name="time" placeholder="Time"
                                        className="listing-single__rent-car-time-box" />
                                </div>
                            </div>
                            <div className="listing-single__rent-car-extra">
                                <h3 className="listing-single__rent-car-extra-title">Add Extra:</h3>
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="checked-box">
                                            <input type="checkbox" name="f_extra1" id="f_extra1" readOnly />
                                            <label htmlFor="f_extra1"><span></span>Bluetooth</label>
                                        </div>
                                        <div className="counts-box">
                                            <p>$20</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checked-box">
                                            <input type="checkbox" name="f_extra2" id="f_extra2" readOnly  />
                                            <label htmlFor="f_extra2"><span></span>GPS System </label>
                                        </div>
                                        <div className="counts-box">
                                            <p>$20</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checked-box">
                                            <input type="checkbox" name="f_extra3" id="f_extra3" readOnly />
                                            <label htmlFor="f_extra3"><span></span>Additional Driver
                                            </label>
                                        </div>
                                        <div className="counts-box">
                                            <p>$100</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="checked-box">
                                            <input type="checkbox" name="f_extra4" id="f_extra4" readOnly/>
                                            <label htmlFor="f_extra4"><span></span>Central Lock</label>
                                        </div>
                                        <div className="counts-box">
                                            <p>$150</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="listing-single__rent-car-price-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="title">
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="price">
                                            <p>$150.00</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <p>Sale discount</p>
                                        </div>
                                        <div className="price">
                                            <p>$140.00</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title">
                                            <p>Total Payable</p>
                                        </div>
                                        <div className="price">
                                            <p>$160.00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="listing-single__btn-box-2">
                        <Link to="/inner/listing-single" className="thm-btn">Rent Now<span
                            className="fas fa-arrow-right"></span></Link>
                    </div>
                </div>
                <div className="listing-single__contact-info listing-single__single-box">
                    <div className="listing-single__contact-phone">
                        <a href="tel:15502505260" className="listing-single__contact-phone-number"> <span
                            className="icon-call-3"></span> +1 (550) 250 5260</a>
                        <p className="listing-single__contact-phone-text">Click here to reveal phone number.
                        </p>
                    </div>
                    <div className="listing-single__contact-btn-box">
                        <a href="#"> <i className="icon-steering-wheel"></i>Schedule Test Drive </a>
                        <a href="#"> <i className="fab fa-whatsapp"></i>Whatsapp</a>
                        <a href="#"> <i className="far fa-envelope"></i>Email Address</a>
                    </div>
                </div>
                <div className="listing-single__seller-info listing-single__single-box">
                    <div className="listing-single__seller-info-details">
                        <div className="listing-single__seller-info-img">
                            <img src={infoImg} alt="Image" />
                        </div>
                        <div className="listing-single__seller-info-content">
                            <p>Add by:</p>
                            <h5>Kevin Obrain <span className="icon-cheack"></span> </h5>
                        </div>
                    </div>
                    <div className="listing-single__seller-contact-info">
                        <ul className="list-unstyled listing-single__seller-contact-info-list">
                            <li>
                                <div className="icon">
                                    <i className="far fa-phone"></i>
                                </div>
                                <div className="text">
                                    <p><a href="tel:15502505260">+1 (550) 250 5260</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="text">
                                    <p><a
                                        href="mailto:kevin.gilbert@gmail.com">kevin.obrain@gmail.com</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="text">
                                    <p>Las Vegas, USA</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <div className="text">
                                    <p><a href="#">www.kevin.com</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="listing-single__seller-profile">
                        <a href="#" className="thm-btn">View Profile <span
                            className="fas fa-arrow-right"></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingBottomRight;