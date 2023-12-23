import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
