import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import RoomListing from "../pages/RoomListing";
import RoomDetails from "../pages/RoomDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from '../pages/Login'
import RegisterPage from '../pages/RegisterPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room" element={<RoomListing />} />
      <Route path="/room/:slug" element={<RoomDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login /> } />
      <Route path="/register" element={<RegisterPage /> } />
      <Route path="/forget-password" element={<ForgetPasswordPage /> } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
