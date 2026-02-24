import React from 'react';
import driverDetailImg from "../../assets/images/team/team-details-img-1.jpg"
import Progresbar from '../../components/elements/Progressbar';
interface Bar {
    id: number;
    title: string;
    value: number;
}
const bars: Bar[] = [
    { id: 1, title: "Audi A3", value: 80 },
    { id: 2, title: "Ferrari 458 MM Speciale", value: 95 },
    { id: 3, title: "Toyota Tacoma 4WD", value: 65 }
]
const DriverDetailsMain: React.FC = () => {
    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="team-details__top">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="team-details__top-left">
                                    <div className="team-details__img-1">
                                        <img src={driverDetailImg} alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="team-details__top-right">
                                    <div className="team-details__client-box">
                                        <h3 className="team-details__client-name">William Barbara</h3>
                                        <span className="team-details__client-sub-title">SR. Driver</span>
                                        <div className="team-details__social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <p className="team-details__client-text">Neque porro quisquam est, qui dolorem ipsum
                                            quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim
                                            ad minima veniam</p>
                                        <ul className="team-details__client-address list-unstyled">
                                            <li>
                                                <p><span className="icon-pin"></span>Address</p>
                                                <h5>4140 Parker Rd. Allentown, New Mexico 31134</h5>
                                            </li>
                                            <li>
                                                <p><span className="icon-call"></span>Phone Number</p>
                                                <h5><a href="tel:2085550112">(208) 555-0112</a></h5>
                                            </li>
                                            <li>
                                                <p><span className="icon-envelope"></span>Email</p>
                                                <h5><a href="mailto:michael.mitc@example.com">michael.mitc@example.com</a> </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details__bottom">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h3 className="team-details__bottom-title">Biography</h3>
                                    <p className="team-details__bottom-text">Neque porro quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                        incidunt ut labore et dolore ma gnam aliquam quaerat voluptatem. Ut enim ad minima
                                        veniam</p>
                                    <div className="team-details__practice-area">
                                        <h4 className="team-details__practice-area-title">Practice Area</h4>
                                        <div className="team-details__practice-area-list-box">
                                            <ul className="list-unstyled team-details__practice-area-list">
                                                <li><div className="icon"></div><div className="text"><p> Corporate car rental</p></div></li>
                                                <li><div className="icon"></div><div className="text"><p>Car rental with driver</p></div></li>
                                                <li><div className="icon"></div><div className="text"><p>European Lard Sration</p></div></li>
                                            </ul>
                                            <ul className="list-unstyled team-details__practice-area-list team-details__practice-area-list--two">
                                                <li><div className="icon"></div><div className="text"><p>Fleet leasing</p></div></li>
                                                <li><div className="icon"></div><div className="text"><p>Enjoy Driving</p></div></li>
                                                <li><div className="icon"></div><div className="text"><p>Time Awareness</p></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <h3 className="team-details__progress-title-1">Skills</h3>
                                    <ul className="team-details__progress-list list-unstyled">
                                        {bars.map((item, i) => <Progresbar title={item?.title} value={item?.value} key={item?.id || i} />)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DriverDetailsMain;
