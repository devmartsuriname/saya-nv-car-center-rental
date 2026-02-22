import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import App from '../../App';
import InnerLayout from '../../pages/inner-layout/InnerLayout';
import ErrorBoundary from '../elements/ErrorBoundary';
import SuspenseWrapper from '../elements/SuspenseWrapper'; 



/* =======================
   Home Pages
======================= */
const HomeOne = lazy(() => import("../../pages/home-one/HomeOne"));
const HomeTwo = lazy(() => import("../../pages/home-two/HomeTwo"));
const HomeThree = lazy(() => import("../../pages/home-three/HomeThree"));

/* =======================
   Inner Pages
======================= */
const About = lazy(() => import("../../pages/about/About"));
const Service = lazy(() => import("../../pages/service/Service"));
const Drivers = lazy(() => import("../../pages/drivers/Drivers"));
const DriverDetails = lazy(() => import("../../pages/driver-details/DriverDetails"));
const Testimonials = lazy(() => import("../../pages/testimonials/Testimonials"));
const Pricing = lazy(() => import("../../pages/pricing/Pricing"));
const Faq = lazy(() => import("../../pages/faq/Faq"));
const ErrorPage = lazy(() => import("../../pages/error/ErrorPage"));

/* =======================
   Cars & Listings
======================= */
const Cars = lazy(() => import("../../pages/cars/Cars"));
const CarListVOne = lazy(() => import("../../pages/car-list-v-one/CarListVOne"));
const CarListVTwo = lazy(() => import("../../pages/car-list-v-two/CarListVTwo"));
const CarListVThree = lazy(() => import("../../pages/car-list-v-three/CarListVThree"));
const CarListingSingle = lazy(() => import("../../pages/listing-single/CarListingSingle"));

/* =======================
   Shop Pages
======================= */
const Products = lazy(() => import("../../pages/products/Products"));
const ProductDetails = lazy(() => import("../../pages/product-details/ProductDetails"));
const Cart = lazy(() => import("../../pages/cart/Cart"));
const CheckOut = lazy(() => import("../../pages/checkout/CheckOut"));
const Wishlist = lazy(() => import("../../pages/wishlist/Wishlist"));

/* =======================
   Authentication
======================= */
const SignUp = lazy(() => import("../../pages/authentication/SignUp"));
const Login = lazy(() => import("../../pages/authentication/Login"));

/* =======================
   Blog Pages
======================= */
const Blog = lazy(() => import("../../pages/blog/Blog"));
const BlogStandard = lazy(() => import("../../pages/blog-standard/BlogStandard"));
const BlogLeftSidebar = lazy(() => import("../../pages/blog-left-sidebar/BlogLeftSidebar"));
const BlogRightSidebar = lazy(() => import("../../pages/blog-right-sidebar/BlogRightSidebar"));
const BlogDetails = lazy(() => import("../../pages/blog-details/BlogDetails"));

/* =======================
   Contact
======================= */
const Contact = lazy(() => import("../../pages/contact/Contact"));

/* =======================
   One Page Versions
======================= */
const HomeOneSinglePage = lazy(() => import("../../pages/index-one-page/HomeOneSinglePage"));
const HomeTwoOnePage = lazy(() => import("../../pages/index-two-one-page/HomeTwoOnePage"));
const HomeThreeOnePage = lazy(() => import("../../pages/index-three-one-page/HomeThreeOnePage"));


const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary name='Root component App'><App /></ErrorBoundary>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ErrorBoundary name='Home One'><SuspenseWrapper><HomeOne /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "index-one-page",
        element: <ErrorBoundary name='Home One Single Page'><SuspenseWrapper><HomeOneSinglePage /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "index-two",
        element: <ErrorBoundary name='Home Two'><SuspenseWrapper><HomeTwo /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "index-two-one-page",
        element: <ErrorBoundary name='Home Two Single Page'><SuspenseWrapper><HomeTwoOnePage /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "index-three",
        element: <ErrorBoundary name='Home Three'><SuspenseWrapper><HomeThree /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "index-three-one-page",
        element: <ErrorBoundary name='Home Three Single Page'><SuspenseWrapper><HomeThreeOnePage /></SuspenseWrapper></ErrorBoundary>
      },
      {
        path: "inner",
        element: <ErrorBoundary name="About Page"><InnerLayout /></ErrorBoundary>,
        children: [
          {
            index: true,
            element: (
              <ErrorBoundary name="About Page">
                <About />
              </ErrorBoundary>
            ),
          },
          {
            path: "about",
            element: (
              <ErrorBoundary name="About Page">
                <About />
              </ErrorBoundary>
            ),
          },
          {
            path: "services",
            element: (
              <ErrorBoundary name="Services Page">
                <Service />
              </ErrorBoundary>
            ),
          },
          {
            path: "drivers",
            element: (
              <ErrorBoundary name="Drivers Page">
                <Drivers />
              </ErrorBoundary>
            ),
          },
          {
            path: "driver-details",
            element: (
              <ErrorBoundary name="Driver Details Page">
                <DriverDetails />
              </ErrorBoundary>
            ),
          },
          {
            path: "testimonials",
            element: (
              <ErrorBoundary name="Testimonials Page">
                <Testimonials />
              </ErrorBoundary>
            ),
          },
          {
            path: "pricing",
            element: (
              <ErrorBoundary name="Pricing Page">
                <Pricing />
              </ErrorBoundary>
            ),
          },
          {
            path: "faq",
            element: (
              <ErrorBoundary name="FAQ Page">
                <Faq />
              </ErrorBoundary>
            ),
          },
          {
            path: "cars",
            element: (
              <ErrorBoundary name="Cars Page">
                <Cars />
              </ErrorBoundary>
            ),
          },
          {
            path: "car-list-v-1",
            element: (
              <ErrorBoundary name="Car List V1 Page">
                <CarListVOne />
              </ErrorBoundary>
            ),
          },
          {
            path: "car-list-v-2",
            element: (
              <ErrorBoundary name="Car List V2 Page">
                <CarListVTwo />
              </ErrorBoundary>
            ),
          },
          {
            path: "car-list-v-3",
            element: (
              <ErrorBoundary name="Car List V3 Page">
                <CarListVThree />
              </ErrorBoundary>
            ),
          },
          {
            path: "listing-single",
            element: (
              <ErrorBoundary name="Car Listing Page">
                <CarListingSingle />
              </ErrorBoundary>
            ),
          },
          {
            path: "products",
            element: (
              <ErrorBoundary name="Products Page">
                <Products />
              </ErrorBoundary>
            ),
          },
          {
            path: "product-details",
            element: (
              <ErrorBoundary name="Product Details Page">
                <ProductDetails />
              </ErrorBoundary>
            ),
          },
          {
            path: "cart",
            element: (
              <ErrorBoundary name="Cart Page">
                <Cart />
              </ErrorBoundary>
            ),
          },
          {
            path: "checkout",
            element: (
              <ErrorBoundary name="Checkout Page">
                <CheckOut />
              </ErrorBoundary>
            ),
          },
          {
            path: "wishlist",
            element: (
              <ErrorBoundary name="Wishlist Page">
                <Wishlist />
              </ErrorBoundary>
            ),
          },
          {
            path: "sign-up",
            element: (
              <ErrorBoundary name="Sign Up Page">
                <SignUp />
              </ErrorBoundary>
            ),
          },
          {
            path: "login",
            element: (
              <ErrorBoundary name="Login Page">
                <Login />
              </ErrorBoundary>
            ),
          },
          {
            path: "blog",
            element: (
              <ErrorBoundary name="Blog Page">
                <Blog />
              </ErrorBoundary>
            ),
          },
          {
            path: "blog-standard",
            element: (
              <ErrorBoundary name="Blog Standard Page">
                <BlogStandard />
              </ErrorBoundary>
            ),
          },
          {
            path: "blog-left-sidebar",
            element: (
              <ErrorBoundary name="Blog Left Sidebar Page">
                <BlogLeftSidebar />
              </ErrorBoundary>
            ),
          },
          {
            path: "blog-right-sidebar",
            element: (
              <ErrorBoundary name="Blog Right Sidebar Page">
                <BlogRightSidebar />
              </ErrorBoundary>
            ),
          },
          {
            path: "blog-details",
            element: (
              <ErrorBoundary name="Blog Details Page">
                <BlogDetails />
              </ErrorBoundary>
            ),
          },
          {
            path: "contact",
            element: (
              <ErrorBoundary name="Contact Page">
                <Contact />
              </ErrorBoundary>
            ),
          },
        ],
      }
    ]
  },
]);

export default ROUTER;