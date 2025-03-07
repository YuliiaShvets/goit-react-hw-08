import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppBar from "./AppBar/AppBar";


export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};