import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/header";
import Home from "./pages/home";
import BlogsPage from "./pages/blogs";
import BlogDetailsPage from "./pages/blogs-detailed-page";
import VendorPage from "./pages/vendor-page";
import VendorsDetailsPage from "./pages/vendor-details-page";
import Register from "./pages/register";
import Login from "./pages/login";

import "./assets/css/style.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/vendors/:type?" element={<VendorPage />} />
          <Route path="/vendors/details/:id" element={<VendorsDetailsPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/login/otp" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/register/otp" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);