import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "./components/AppBar/AppBar.jsx";


export const Layout = () => {
  return (
    <div >
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};