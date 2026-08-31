import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import PGList from "../pages/PGList";
import PGDetails from "../pages/PGDetails";
import Favorites from "../pages/Favourites";
import About from "../pages/About";
import Profile from "../pages/Profile";

import AuthGuard from "../components/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import { PageNotFound } from "../pages/PageNotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<AuthGuard />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="/find-pg" element={<PGList />} />

          <Route path="/pg/:id" element={<PGDetails />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/about" element={<About />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/PageNotFound" element={<PageNotFound />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/PageNotFound" replace />} />
    </Routes>
  );
}

export default AppRoutes;
