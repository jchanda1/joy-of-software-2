import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav>
        <NavBar />
      </nav>
      <main className="flex-grow pt-3">
        <Outlet />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;
