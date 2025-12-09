import Layout from "./layout/Layout";
import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import ProductDesc from "./pages/productDesc/Index";

function App() {
  return (
    <Layout>
      <div className="">
        {/* <Home /> */}
        {/* <Products /> */}
        <ProductDesc />
      </div>
    </Layout>
  );
}

export default App;
