import Layout from "./layout/Layout";
import Home from "./pages/home/Index";
import Products from "./pages/products/index";

function App() {
  return (
    <Layout>
      <div className="">
        {/* <Home /> */}
        <Products />
      </div>
    </Layout>
  );
}

export default App;
