import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Home />
            </h1>
          }
        />
        <Route
          path="/about"
          element={
            <h1>
              <About />
            </h1>
          }
        />
        <Route
          path="/contact"
          element={
            <h1>
              <Contact />
            </h1>
          }
        />
        <Route
          path="/collection"
          element={
            <h1>
              <Collection />
            </h1>
          }
        />
        <Route
          path="/cart"
          element={
            <h1>
              <Cart />
            </h1>
          }
        />
        <Route
          path="/login"
          element={
            <h1>
              <Login />
            </h1>
          }
        />
        <Route
          path="/place-order"
          element={
            <h1>
              <PlaceOrder />
            </h1>
          }
        />
        <Route
          path="/orders"
          element={
            <h1>
              <Orders />
            </h1>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <h1>
              <Product />
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;