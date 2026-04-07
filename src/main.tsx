import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import BlogsPage from './pages/blogs'
import BlogDetailsPage from "./pages/blogs-detailed-page"
import VendorPage from './pages/vendor-page'
import VendorsDetailsPage from './pages/vendor-details-page'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/vendors/:type" element={<VendorPage />} />
        <Route path="/vendors/details/:id" element={<VendorsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)