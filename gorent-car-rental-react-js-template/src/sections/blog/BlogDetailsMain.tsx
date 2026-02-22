import React from "react";
import BlogSideBar from "./BlogSideBar";

// images
import blogMainImg from "../../assets/images/blog/blog-details-img-1.jpg";
import blogBoxImg1 from "../../assets/images/blog/blog-details-img-box-img-1.jpg";
import blogBoxImg2 from "../../assets/images/blog/blog-details-img-box-img-2.jpg";
import commentImg1 from "../../assets/images/blog/comment-1-1.jpg";
import commentImg2 from "../../assets/images/blog/comment-1-2.jpg";

const BlogDetailsMain: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        console.log({ name, email, message });

        if (name && email && message) {
            form.reset();
        }
    };

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    {/* Main Content */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src={blogMainImg} alt="Image" />
                                <div className="blog-details__date">
                                    <p>12<br />Nov</p>
                                </div>
                            </div>
                            <div className="blog-details__content">
                                <div className="blog-details__user-and-meta">
                                    <div className="blog-details__user">
                                        <p><span className="icon-user"></span>By Admin</p>
                                    </div>
                                    <ul className="blog-details__meta list-unstyled">
                                        <li>
                                            <a href="#"><span className="icon-comments"></span>Comments (05)</a>
                                        </li>
                                        <li>
                                            <a href="#"><span className="icon-clock"></span>4 Min Read</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="blog-details__title">Where Early Adopters And Innovation Seekers Find Lively
                                    Imaginative Tech.
                                </h3>
                                <p className="blog-details__text-1">Out enigma ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in
                                    the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.
                                    Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                                <p className="blog-details__text-2">The wise man therefore always holds in these matters to
                                    this principle of selection. He rejects pleasures to secure other greater pleasures,
                                    or else he endures pains to avoid worse pains to the selection point.</p>
                                <div className="blog-details__author-box">
                                    <h4 className="blog-details__author-text">“Sed do eiusmod tempor incididunt labore et
                                        dolore magna aliqua. Uther enim minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi aliquip commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate”</h4>
                                    <p className="blog-details__author-name">Kane Williamson<span> / CEO</span></p>
                                </div>
                                <h3 className="blog-details__title-2">Rental cost of sport and other
                                    cars</h3>
                                <p className="blog-details__text-3">Out enigma ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in
                                    the reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.
                                    Excepteur snit occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                                <div className="blog-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <img src={blogBoxImg1} alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="blog-details__img-box-img">
                                                <img src={blogBoxImg2} alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__tag-and-share">
                                    <div className="blog-details__tag">
                                        <h3 className="blog-details__tag-title">Tags :</h3>
                                        <ul className="blog-details__tag-list list-unstyled">
                                            <li>
                                                <a href="#">Tesla</a>
                                            </li>
                                            <li>
                                                <a href="#">Honda</a>
                                            </li>
                                            <li>
                                                <a href="#">Audi</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-details__share-box">
                                        <h3 className="blog-details__share-title">Share :</h3>
                                        <div className="blog-details__share">
                                            <a href="#"><span className="icon-facebook"></span></a>
                                            <a href="#"><span className="icon-instagram-1"></span></a>
                                            <a href="#"><span className="icon-instagram"></span></a>
                                            <a href="#"><span className="icon-instagram-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src={commentImg1} alt="Image" />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Theresa Webb</h3>
                                            <span>02 June 2024 at 03:30 pm</span>
                                            <p>The wise man therefore always holds in these matters to this principle of
                                                selection. He rejects pleasures to secure other greater pleasures, or
                                                else he endures pains to avoid worse pains to the selection point. But
                                                in certain to all this circumstances</p>
                                            <div className="comment-one__btn-box">
                                                <a href="#" className="comment-one__btn"><span
                                                    className="icon-share-alt"></span>Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src={commentImg2} alt="Image" />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Cameron Williamson</h3>
                                            <span>02 June 2024 at 03:30 pm</span>
                                            <p>The wise man therefore always holds in these matters to this principle of
                                                selection. He rejects pleasures to secure other greater pleasures, or
                                                else he endures pains to avoid worse pains to the selection point. But
                                                in certain to all this circumstances</p>
                                            <div className="comment-one__btn-box">
                                                <a href="#" className="comment-one__btn"><span
                                                    className="icon-share-alt"></span>Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h3 className="comment-form__title">Leave A Comment</h3>
                                    <p className="comment-form__text">By using form u agree with the message sorage, you can
                                        contact us directly now</p>
                                    <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Your Email" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message"
                                                        placeholder="Write your messege"></textarea>
                                                </div>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="thm-btn comment-form__btn">submit
                                                        now <span className="fas fa-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <BlogSideBar mainWrapper="col-xl-4 col-lg-5" wrapper="sidebar" />
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsMain;
