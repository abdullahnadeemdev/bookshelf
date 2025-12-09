import Layout from "./layout/Layout";
import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import ProductDesc from "./pages/productDesc/Index";
import Checkout from "./pages/checkout/Index";

function App() {
  return (
    <Layout>
      <div className="">
        {/* <Home />
        <Products />
        <div className="bg-whiteBg">
          <ProductDesc />
        </div> */}
        <div className="">
          <Checkout />
        </div>
      </div>
    </Layout>
  );
}

export default App;
