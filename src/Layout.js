import { Outlet} from "react-router-dom";
import Header from "./common/Header";
import Baseline from "./common/Baseline";

export default function Layout() {
  return (
    <>
      <Header />
      <Baseline />
      <Outlet />
    </>
  )
};