import { Outlet} from "react-router-dom";
import Header from "./common/Header";
import Navbar from "./common/Navbar";

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
};