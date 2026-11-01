import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    console.log("Add to Cart clicked:", product);

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  console.log("Cart:", cart);
  console.log("Cart Count:", cartCount);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar search={search} setSearch={setSearch} cartCount={cartCount} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductList
                  search={search}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  onAddToCart={handleAddToCart}
                />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} clearCart={clearCart} />}
          />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route
            path="/product/:id"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
