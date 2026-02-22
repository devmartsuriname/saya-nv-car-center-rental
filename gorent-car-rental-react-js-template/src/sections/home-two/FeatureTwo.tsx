import React from 'react';
import { Link } from "react-router";

import bg1 from "../../assets/images/backgrounds/feature-one-bg-1.jpg";
import bg2 from "../../assets/images/backgrounds/feature-one-bg-2.jpg";
interface FeatureItem {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    link: string;
    bgImage: string;
}

const featureItems: FeatureItem[] = [
    {
        id: 1,
        title: "Are You Looking \nFor a Car ?",
        description:
            "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
        buttonText: "Get Started",
        link: "/inner/contact",
        bgImage: bg1,
    },
    {
        id: 2,
        title: "Do You Want to \nRent a Car ?",
        description:
            "Lorem ipsum is simply ipun txns mane so dummy text of free available in market the printing and typesetting industry",
        buttonText: "Rent Now",
        link: "/inner/car-list-v-1",
        bgImage: bg2,
    },
];


const FeatureTwo: React.FC = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="feature-one__inner">
                    <div className="row">
                        {featureItems.map((item) => (
                            <div className="col-xl-6 col-lg-6" key={item.id}>
                                <div
                                    className={`feature-one__inner-single ${item.id === 2 ? "feature-one__inner-single--two" : ""
                                        } wow`}
                                >
                                    <div
                                        className="feature-one__inner-single-bg"
                                        style={{ backgroundImage: `url(${item.bgImage})` }}
                                    ></div>

                                    <h3 className="feature-one__inner-title">
                                        {item.title.split("\n").map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h3>

                                    <p className="feature-one__inner-text">
                                        {item.description}
                                    </p>

                                    <div className="feature-one__inner-btn-box">
                                        <Link to={item.link} className="thm-btn">
                                            {item.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureTwo;
