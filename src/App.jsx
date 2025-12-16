import Layout from "./layout/Layout";
import Home from "./pages/home/Index";
import Products from "./pages/products/index";
import ProductDesc from "./pages/productDesc/Index";
import Checkout from "./pages/checkout/Index";
import Router from "./routes";
import Index from "./pages/bookmarks/Index";

function App() {
  return (
    <Layout>
      <div className="">
        {/* <Router /> */}
        <Index />
      </div>
    </Layout>
  );
}

export default App;
