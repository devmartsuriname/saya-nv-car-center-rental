import React, { type FormEvent } from 'react';
import Banner from '../../sections/common/Banner';
import googleIcon from '../../assets/images/icon/icon-google-2.png';
import facebookIcon from '../../assets/images/icon/icon-facebook.png';
import { Link } from 'react-router';

interface SignUpFormData {
    name: string;
    email: string;
    phone: string;
    password: string;
}

interface SocialLoginLink {
    href: string;
    icon: string;
    alt: string;
    text: string;
}
const SignUp: React.FC = () => {
    const socialLogins: SocialLoginLink[] = [
        {
            href: '#',
            icon: googleIcon,
            alt: 'Google',
            text: 'Continue with Google'
        },
        {
            href: '#',
            icon: facebookIcon,
            alt: 'Facebook',
            text: 'Continue with Facebook'
        }
    ];

    const handleSignup = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const signUpInfo: SignUpFormData = {
            name: formData.get('form_name') as string,
            email: formData.get('form_email') as string,
            phone: formData.get('form_phone') as string,
            password: formData.get('form_password') as string
        };
        if (signUpInfo) {
            form.reset();
        }
    };

    return (
        <>
            <Banner breadcrumb='Sign up' />
            <section className="sign-up-one">
                <div className="container">
                    <div className="sign-up-one__form">
                        <div className="inner-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={handleSignup}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="form_name"
                                                id="formName"
                                                placeholder="Name..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="form_email"
                                                id="formEmail"
                                                placeholder="Email..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="tel"
                                                name="form_phone"
                                                id="formPhone"
                                                placeholder="Phone..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="form_password"
                                                id="formPassword"
                                                placeholder="Password..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button
                                            className="thm-btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                        >
                                            Sign Up
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="google-facebook">
                                {socialLogins.map((social) => (
                                    <a
                                        key={social.alt}
                                        href={social.href}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="icon">
                                            <img src={social.icon} alt={social.alt} />
                                        </div>
                                        {social.text}
                                    </a>
                                ))}
                            </div>
                            <div className="create-account text-center">
                                <p>Already have an account? <Link to={"/inner/login"}>Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;