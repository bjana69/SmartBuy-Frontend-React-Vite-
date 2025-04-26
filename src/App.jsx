import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProfileDetailsPage from "./pages/ProfileDetailsPage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";
import TestingPage from "./pages/TestingPage.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/404',
    element: <NotFoundPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/wishlist',
    element: <WishlistPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/profile-details',
    element: <ProfileDetailsPage />
  },
  {
    path: '/checkOut',
    element: <CheckOutPage />
  },
  {
    path: '/testing',
    element : <TestingPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
