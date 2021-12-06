import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import ClientContextProvider from "./contexts/ClientContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <AuthContextProvider>
    <ClientContextProvider>
    <AdminContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add" element={<AddPage />} />
          <Route path="/admin/edit/:id" element={<EditPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/phone/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Redirect - это уже navigate */}
          <Navigate to="/" />
        </Routes>
      </BrowserRouter>
    </AdminContextProvider>
    </ClientContextProvider>
    </AuthContextProvider>
  );
};

export default MyRoutes;
