import NavBar from "../components/shared/navBar/navBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen text-white bg-whiteBg py-6">
      <NavBar />
      {/* Childerns */}
      <div className="w-full">
        <main>{children}</main>
      </div>
      footer
    </div>
  );
};

export default Layout;
