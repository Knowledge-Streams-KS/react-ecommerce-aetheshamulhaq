import Header from "./components/Header";
import Categories from "./pages/categories";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductsDetails";
import Products from "./pages/products";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/product-details/:productID?"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
