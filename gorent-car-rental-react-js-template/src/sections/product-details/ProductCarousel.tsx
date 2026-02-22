import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productsList } from '../../all-content/products/productData'; 
import { Link } from 'react-router';
import { Autoplay } from 'swiper/modules';
const ProductCarousel: React.FC = () => {
    return (
        <section className="related-products">
            <div className="container">
                <div className="related-products__title">
                    <h3>Related Products</h3>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="row">
                    <div className="related-products__carousel owl-carousel owl-theme owl-dot-style1">
                        <Swiper modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={1000}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2, 
                                },
                                992: {
                                    slidesPerView: 3, 
                                },
                                1320: {
                                    slidesPerView: 4, 
                                }, 
                            }}>
                            {
                                productsList.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <div className="single-product-style1 instyle--2">
                                            <div className="single-product-style1__img">
                                                <img src={product?.image} alt="Image" />
                                                <img src={product?.image} alt="Image" />
                                                {
                                                    product?.isNew || product?.discouunt
                                                        ?
                                                        (<ul className="single-product-style1__overlay">
                                                            {
                                                                product?.isNew && product?.discouunt ? <>
                                                                    <li>
                                                                        <p>New</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>{product?.discouunt}% Off</p>
                                                                    </li>
                                                                </> : <li>
                                                                    <p>{product?.isNew ? "New" : `${product?.discouunt}% Off`}</p>
                                                                </li>
                                                            }
                                                        </ul>)
                                                        :
                                                        ""
                                                }
                                                <ul className="single-product-style1__info">
                                                    <li>
                                                        <a href="#" title="Add to Wishlist">
                                                            <i className="fa fa-regular fa-heart"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Add to cart">
                                                            <i className="fa fa-solid fa-cart-plus"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Quick View">
                                                            <i className="fa fa-regular fa-eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Compare">
                                                            <i className="fa fa-solid fa-repeat"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="single-product-style1__content">
                                                <div className="single-product-style1__content-left">
                                                    <h4>
                                                        <Link to="/inner/product-details">
                                                            {product?.title}
                                                        </Link>
                                                    </h4>
                                                    {
                                                        product?.previousPrice ? <p><del>${product?.previousPrice}.00</del> ${product?.price}.00</p> : <p>${product?.price}.00</p>
                                                    }
                                                </div>
                                                <div className="single-product-style1__content-right">
                                                    <div className="single-product-style1__review">
                                                        <i className="fa fa-star"></i>
                                                        <p>{product?.rating}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;