import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boxes from "./MultiBoxPage/Boxes";
import Layout from "./Layout";
import BoxData from "./SingleBoxPage/BoxData/BoxData";
import Cart from "./Cart/CartPage/CartPage";
import LoginPage from "./LoginPage/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Boxes />} />
          <Route path={"boxes/:id"} element={<BoxData />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"login"} element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));