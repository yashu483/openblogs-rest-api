import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";

export const MainLayout = () => {
  return (
    <div className="overlayer">
      <Header />
      <Outlet />
    </div>
  );
};
