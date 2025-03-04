import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { refreshUser } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import PrivateRoute from "./PrivateRoute.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Suspense>
<Routes>
<Route path="/" element={<Layout />}> 
  <Route index element={<HomePage />} />
  <Route 
    path="/register" 
    element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/login" />} 
  />
  <Route 
    path="/login" 
    element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} 
  />
  <Route 
    path="/contacts" 
    element={<PrivateRoute component={<ContactsPage />} redirectTo="/home" />} 
  />
</Route>
</Routes>
</Suspense>
  )
};

export default App;
