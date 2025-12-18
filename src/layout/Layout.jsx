import { useRef } from "react";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navBar/navBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center w-full text-white bg-whiteBg py-6">
        <NavBar />
        {/* Childerns */}
        <div className="w-full">
          <main>{children}</main>
        </div>
        <div className="bg-grayBg w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
