import Home from "../pages/Home/Index";
import Products from "../pages/Products/Index";
import Bookmarks from "../pages/Bookmarks/Index";
import Cart from "../pages/CartPage/Index";
import Checkout from "../components/checkout/Index";
import ProductsDesc from "../pages/ProductDesc/Index";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/SignUp/SignUp";
import UserPage from "../pages/UserPage/UserPage";
import AuthorsPopular from "../pages/AuthorPage/Index";
import { Route, Routes, Navigate } from "react-router";
import Thanks from "../pages/FinalPage/Index";
import ForgotP from "../pages/ForgotPassword/ForgotP";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state?.auth?.user) || null;

  const routeArray = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/books",
      component: <Products />,
    },
    {
      path: "/books/:title",
      component: <ProductsDesc />,
    },
    {
      path: "forgot-password",
      component: <ForgotP />,
    },
    {
      path: "/cart",
      component: <Cart />,
    },
    {
      path: "/login",
      component: !user ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/sign-up",
      component: !user ? <SignUp /> : <Navigate to="/" />,
    },
    {
      path: "/bookmark",
      component: <Bookmarks />,
    },
    {
      path: "/authors-popular",
      component: <AuthorsPopular />,
    },
    {
      path: "/checkout",
      component: user ? <Checkout /> : <Navigate to="/login" />,
    },
    {
      path: "/",
      component: <AuthorsPopular />,
    },
    {
      path: "/user-page",
      component: user ? <UserPage /> : <Navigate to="/login" />,
    },
    {
      path: "/thank-you",
      component: user ? <Thanks /> : <Navigate to="/login" />,
    },
    {
      path: "*",
      component: <Home />,
    },
  ];

  return (
    <Routes>
      {routeArray.map((item) => (
        <Route path={item.path} element={item.component} />
      ))}
      {/* <Route path="/" element={<Home />} />
      <Route path="/books" element={<Products />} />
      <Route path="/books/:title" element={<ProductsDesc />} />
      <Route path="/forgot-password" element={<ForgotP />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/sign-up"
        element={!user ? <SignUp /> : <Navigate to="/" />}
      />

      <Route path="/bookmark" element={<Bookmarks />} />

      <Route path="/authors-popular" element={<AuthorsPopular />} />
      <Route
        path="/checkout"
        element={user ? <Checkout /> : <Navigate to="/login" />}
      />
      <Route
        path="/user-page"
        element={user ? <UserPage /> : <Navigate to="/login" />}
      />

      <Route
        path="/thank-you"
        element={user ? <Thanks /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default Router;
