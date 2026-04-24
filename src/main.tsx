import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header";
import Home from "./pages/home";
import BlogsPage from "./pages/blogs";
import VendorPage from "./pages/vendor-page";
import VendorsDetailsPage from "./pages/vendor-details-page";
import Login from "./pages/login";
import "./assets/css/style.css";
import VerifyOtpPage from "./pages/verify-otp";
import Register from "./pages/register";
import BlogDetailsPage from "./pages/blog-details-page";
import FaqPage from "./pages/faq";
import RealWeddingDetails from "./pages/real-wedding.deatils";
import RealWeddingList from "./pages/real-Wedding";


const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
          <Route path="/vendors/:type?" element={<VendorPage />} />
          <Route path="/vendors/details/:id" element={<VendorsDetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/real-weddings" element={<RealWeddingList />} />
          <Route path="/real-weddings/:slug" element={<RealWeddingDetails />} />


        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);