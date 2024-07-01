import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function Layout() {
  return (
    <div data-theme="dark" className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
