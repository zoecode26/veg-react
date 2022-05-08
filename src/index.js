import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boxes from "./MultiBoxPage/Boxes";
import Layout from "./Layout";
import BoxData from "./SingleBoxPage/BoxData/BoxData";
import OrderData from "./OrderPage/OrderData";
import Cart from "./Cart/CartPage/CartPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import Payment from "./Payment/Payment";
import OrdersPage from "./OrdersPage/OrdersPage";
import SignOut from "./SignOut/SignOut";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Boxes />} />
          <Route path={"boxes/:id"} element={<BoxData />} />
          <Route path={"orders/:id"} element={<OrderData />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"login"} element={<LoginPage />} />
          <Route path={"signup"} element={<SignupPage />} />
          <Route path={"payment"} element={<Payment />} />
          <Route path={"orders"} element={<OrdersPage />} />
          <Route path={"signout"} element={<SignOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));