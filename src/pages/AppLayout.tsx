import { Outlet } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
