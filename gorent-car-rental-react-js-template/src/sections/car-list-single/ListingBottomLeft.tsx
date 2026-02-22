import React from 'react';
import review1 from "../../assets/images/shop/review-1-1.jpg"
import review2 from "../../assets/images/shop/review-1-2.jpg"
const ListingBottomLeft: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
 

        if (!message || !name || !email) {
             
            return;
        }

        // submit to API here 👇
        // await fetch('/api/review', { ... })

        form.reset();
    };
    return (
        <div className="col-xl-8 col-lg-7">
            <div className="listing-single__bottom-left">
                <div className="listing-single__car-overview">
                    <h3 className="listing-single__car-overview-title">Car Overview</h3>
                    <div className="listing-single__car-overview-points-box">
                        <ul className="list-unstyled listing-single__car-overview-point">
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-car1"></i>
                                    <p>Body</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>SUV</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-mileage"></i>
                                    <p>Mileage</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>50</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-fuel-type"></i>
                                    <p>Fuel Type</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>Petrol</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-date"></i>
                                    <p>Year</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>2024</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-Carrier"></i>
                                    <p>Transmission</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>Automatic</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-test-drive"></i>
                                    <p>Drive Type</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>Drive (AWD/4WD)</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled listing-single__car-overview-point">
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-avatar"></i>
                                    <p>Condition</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>New</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-engine"></i>
                                    <p>Engine Size</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>4.5</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-door"></i>
                                    <p>Door</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>4 Doors</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-range"></i>
                                    <p>Range</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>$1700</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-color"></i>
                                    <p>Color</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>Blue, Gold, Red</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-seat"></i>
                                    <p>Seats</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>05</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listing-single__description">
                    <h3 className="listing-single__description-title">Description</h3>
                    <p className="listing-single__description-text-1">Lorem ipsum is simply ipun txns mane
                        so dummy text of free available in market the printing and typesetting industry
                        has been the industry's standard dummy text ever. Lorem ipsum is simply ipun
                        txns mane. Lorem ipsum is simply ipun txns mane
                        so dummy text of free available in market the printing and typesetting industry
                        has been the industry's standard dummy text ever.</p>
                    <p className="listing-single__description-text-2">Lorem ipsum is simply ipun txns mane
                        so dummy text of free available in market the printing and typesetting industry
                        has been the industry's standard dummy text ever.</p>
                </div>
                <div className="listing-single__feature">
                    <h3 className="listing-single__feature-title">Features</h3>
                    <div className="listing-single__feature-points-box">
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Interior</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Air Conditioner</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Digital Odometer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Heater</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Leather Seats</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Panoramic Moonroof</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Tachometer</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Touchscreen Display</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Safety</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Anti-lock Braking</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Brake Assist Child</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Safety Locks Driver</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Air Bag Power</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Door Locks</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Stability Control</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Traction Control</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Comfort & Convenience</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Android Auto</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Apple CarPlay</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Bluetooth</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>HomeLink</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Power Steering</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cheack"></span>
                                    </div>
                                    <div className="text">
                                        <p>Vanity Mirror</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="listing-single__review-and-comment">
                    {/*Review One Start*/}
                    <div className="review-one">
                        <div className="comments-area">
                            <div className="review-one__title">
                                <h3>2 Reviews</h3>
                            </div>
                            {/*Start Comment Box*/}
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <figure className="thumb">
                                            <img src={review1} alt="logo" />
                                        </figure>
                                    </div>

                                    <div className="review-one__content">
                                        <div className="review-one__content-top">
                                            <div className="info">
                                                <h2>Kevin martin <span>20 Oct, 2022 . 4:00
                                                    pm</span></h2>
                                            </div>
                                            <div className="reply-btn">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>

                                        <div className="review-one__content-bottom">
                                            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                                phaedrum. There are many variations of passages of Lorem
                                                Ipsum available, but the majority have alteration in
                                                some injected or words which don't look even slightly
                                                believable. If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything
                                                embarrang hidden in the middle of text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Comment Box*/}

                            {/*Start Comment Box*/}
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <figure className="thumb">
                                            <img src={review2} alt="Image" />
                                        </figure>
                                    </div>

                                    <div className="review-one__content">
                                        <div className="review-one__content-top">
                                            <div className="info">
                                                <h2>Sarah albert <span>20 Oct, 2022 . 4:00
                                                    pm</span></h2>
                                            </div>
                                            <div className="reply-btn">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>

                                        <div className="review-one__content-bottom">
                                            <p>It has survived not only five centuries, but also
                                                the leap into electronic
                                                typesetting unchanged. It was popularised in the
                                                sheets containing lorem ipsum
                                                is simply free text. Class aptent taciti
                                                sociosqu ad litora torquent per conubia
                                                nostra, per inceptos himenaeos. Vestibulum
                                                sollicitudin varius mauris non
                                                dignissim.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Comment Box*/}
                        </div>
                    </div>
                    {/*Review One End*/}

                    {/*Start Review Form*/}
                    <div className="review-form-one">
                        <div className="review-form-one__inner">
                            <h3 className="review-form-one__title">Add a review</h3>
                            <div className="review-form-one__rate-box">
                                <p className="review-form-one__rate-text">Rate this product?</p>
                                <div className="review-form-one__rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <form className="review-form-one__form contact-form-validated" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="review-form-one__input-box text-message-box">
                                            <textarea name="message"
                                                placeholder="Write a comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="text" placeholder="Your name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="email" placeholder="Email address" name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <button type="submit"
                                            className="thm-btn review-form-one__btn">Submit a review <span
                                                className="fas fa-arrow-right"></span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                    {/*End Review Form*/}
                </div>
            </div>
        </div>
    );
};

export default ListingBottomLeft;