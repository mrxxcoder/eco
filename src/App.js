import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
