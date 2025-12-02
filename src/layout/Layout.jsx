import NavBar from "../components/shared/navBar/navBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full font-work bg-black h-screen text-white">
      <NavBar />
      {/* Childerns */}
      <div className="w-full h-full ">
        <main>{children}</main>
      </div>
      footer
    </div>
  );
};

export default Layout;
