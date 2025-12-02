import NavBar from "../components/shared/navBar/navBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-[1440px] font-work bg-black h-screen text-white p-6">
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
