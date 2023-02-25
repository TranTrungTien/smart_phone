import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutCart from "./pages/checkout-page";
import HomePage from "./pages/home_page";
import ProductPage from "./pages/product-page";
import ShoppingCart from "./pages/shopping-cart-page";
import CategoryPage from "./pages/category-page";
import AppProvider, { AppDataContext } from "./context";
import { useContext, useEffect } from "react";
function App() {
  // useScript();
  const { setProducts, setUser } = useContext(AppDataContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-ecommerce") || "{}");
    if (Object.values(user).length) {
      setUser(user);
    }
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);
  return (
    <BrowserRouter>
      <div className="body-wrapper" style={{ margin: "auto" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:model" element={<CategoryPage />} />
          <Route path="/:model/:id" element={<ProductPage />} />
          <Route path="/carts" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutCart />} />
          {/* <Route path="/" element={<CartPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
