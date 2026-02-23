import React from "react";
import logo from "../../assets/images/resources/logo-2.png"
import useGorentContext from "../context/useGorentContext";
import { Link } from "react-router-dom";
const SideBar: React.FC = () => {
    const { isSidebar, setIsSidebar } = useGorentContext();
    const handleCloceSideBar = () => {
        setIsSidebar((pre) => !pre)
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        if (name && email && message) {
            console.log({ name, email, message });
            form.reset();
        }
    };
    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleCloceSideBar}></div>

            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <a href="#" className="close-side-widget" onClick={handleCloceSideBar}>X</a>
                    </div>

                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">

                                <div className="logo">
                                    <Link to="/" onClick={handleCloceSideBar}>
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>

                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            It has roots in a piece of classical Latin literature from 45 BC.
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Message..."
                                            ></textarea>
                                        </div>

                                        <div className="form-group message-btn">
                                            <button
                                                type="submit"
                                                className="thm-btn form-inner__btn"
                                            >
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Contact Info */}
                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="icon-pin"></span>
                                            88 Brooklyn Street, New York
                                        </li>
                                        <li>
                                            <span className="icon-call"></span>
                                            <a href="tel:+15559990153">
                                                +1 555-9990-153
                                            </a>
                                        </li>
                                        <li>
                                            <span className="icon-envelope"></span>
                                            <a href="mailto:info@example.com">
                                                info@example.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social */}
                                <div className="thm-social-link1">
                                    <ul className="social-box list-unstyled">
                                        <li>
                                            <a href="#"><i className="icon-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-dribble-big-logo" /></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
