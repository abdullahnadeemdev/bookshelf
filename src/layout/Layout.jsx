import { useRef } from "react";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navBar/navBar";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
  const loc = useLocation().pathname;
  // console.log("loc", loc);

  const handleNavbar = () => {
    if (loc === "/login" || loc === "/sign-up" || loc === "/forgot-password") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="font-Inter flex flex-col items-center w-full text-white bg-whiteBg pt-6">
        {handleNavbar() ? <NavBar /> : ""}

        {/* Childerns */}
        <div className="w-full">
          <main>{children}</main>
        </div>
        {handleNavbar() ? (
          <div className="bg-grayBg w-full">
            <Footer />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Layout;
