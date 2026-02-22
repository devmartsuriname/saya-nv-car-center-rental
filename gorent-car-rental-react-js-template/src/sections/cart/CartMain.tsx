import React, { useState } from 'react';
import CustomSelect from '../../components/elements/CustomSelect';
import productImg1 from "../../assets/images/shop/cart-page-img-1.jpg"
import productImg2 from "../../assets/images/shop/cart-page-img-2.jpg"
import productImg3 from "../../assets/images/shop/cart-page-img-3.jpg"
import productImg4 from "../../assets/images/shop/cart-page-img-4.jpg"
import { Link } from 'react-router';
import CartProduct from './CartProduct';
import useGorentContext from '../../components/context/useGorentContext';

interface CartPro {
    id: number;
    name: string;
    image: string;
    link: string
    price: number
}
const cartProducts: CartPro[] = [
    {
        id: 1,
        name: "Gree Air Conditioner",
        image: productImg1,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 2,
        name: "Pliers | Cutting, Gripping",
        image: productImg2,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 3,
        name: "Gear and wrench",
        image: productImg3,
        price: 10.99,
        link: "/inner/product-details"
    },
    {
        id: 4,
        name: "Nut Driver",
        image: productImg4,
        price: 10.99,
        link: "/inner/product-details"
    }
];


const CartMain: React.FC = () => {
    const { setCartCount } = useGorentContext()
    const [cartProduct, setCartProduct] = useState<CartPro[]>(cartProducts);
    const [country, setCountry] = useState('');
    const [stateCity, setStateCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const shippingData = {
            country,
            stateCity,
            zipCode,
        };

        console.log('Shipping Data:', shippingData);

        if (!country || !stateCity || !zipCode) {
            return;
        }

        // send to API / update cart here

    };

    const removeProduct = (id: number) => {
        if (id) {
            setCartProduct((pre) => pre.filter((p) => p.id !== id))
            setCartCount(cartProduct.length - 1)
        }
    }
    return (
        <section className="cart-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cart-page__left">
                            <div className="table-responsive">
                                <table className="table cart-table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cartProduct.map((product) => <CartProduct key={product?.id} product={product} removeProduct={removeProduct} />)}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cart-page__right">
                            <div className="cart-page__sidebar">
                                <div className="cart-page__shipping">
                                    <h3 className="cart-page__shipping-title">Calculated Shipping</h3>
                                    <form onSubmit={handleSubmit} className="cart-page__shipping-form">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="cart-page__shipping-input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: "Country", label: "Country" },
                                                                { id: 2, value: "Ban", label: "Ban" },
                                                                { id: 3, value: "Ind", label: "Ind" },
                                                                { id: 4, value: "Pak", label: "Pak" },
                                                                { id: 5, value: "USA", label: "USA" },
                                                            ]}
                                                            value={country}
                                                            onChange={(value) => setCountry(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="cart-page__shipping-input-box">
                                                    <div className="select-box">
                                                        <CustomSelect
                                                            optionArray={[
                                                                { id: 1, value: "State/City", label: "State/City" },
                                                                { id: 2, value: "Ban", label: "Ban" },
                                                                { id: 3, value: "Ind", label: "Ind" },
                                                                { id: 4, value: "Pak", label: "Pak" },
                                                                { id: 5, value: "USA", label: "USA" },
                                                            ]}
                                                            value={stateCity}
                                                            onChange={(value) => setStateCity(value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="cart-page__shipping-input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Zip Code"
                                                        value={zipCode}
                                                        onChange={(e) => setZipCode(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="cart-page__btn-box">
                                                <button type="submit" className="thm-btn">
                                                    Update <span className="fas fa-arrow-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="cart-page__coupon-code">
                                    <h3 className="cart-page__coupon-code-title">Coupon Code</h3>
                                    <p className="cart-page__coupon-code-text">I must explain to you how all this mistaken
                                        idea of denouncing pleasure and praising pain was born</p>
                                    <form onSubmit={(e) => e.preventDefault()} className="default-form cart-page__coupon-code-form">
                                        <input type="text" name='Coupon_Code' placeholder="Enter Coupon Code" />
                                        <button className="thm-btn" type="submit">
                                            Apply Coupon <span className="fas fa-arrow-right"></span>
                                        </button>
                                    </form>
                                </div>
                                <div className="cart-page__cart-total">
                                    <ul className="cart-total list-unstyled">
                                        <li>
                                            <span>Cart Subtotal</span>
                                            <span>$20.98 USD </span>
                                        </li>
                                        <li>
                                            <span>Shipping Cost</span>
                                            <span>-$40.00 USD</span>
                                        </li>
                                        <li>
                                            <span>Discount</span>
                                            <span>$0.00 USD</span>
                                        </li>
                                        <li>
                                            <span>Cart Total</span>
                                            <span className="cart-total-amount">$20.98 USD</span>
                                        </li>
                                    </ul>
                                    <div className="cart-page__buttons">
                                        <div className="cart-page__buttons-1">
                                            <Link to="/inner/checkout" className="thm-btn" >Update <span
                                                className="fas fa-arrow-right"></span> </Link>
                                        </div>
                                        <div className="cart-page__buttons-2">
                                            <Link to="/inner/checkout" className="thm-btn">
                                                Checkout <span className="fas fa-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartMain;