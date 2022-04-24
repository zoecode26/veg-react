import { Outlet} from "react-router-dom";
import Baseline from "./common/Baseline";
import Navbar from "./common/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Baseline />
      <Outlet />
    </>
  )
};