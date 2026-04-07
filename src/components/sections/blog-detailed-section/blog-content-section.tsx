import React from "react";
import BlogCard from "../../../components/sections/blog-detailed-section/image-card";
import { blogData } from "../../../data/blogs-detail-page/blog-content-data";

const BlogSection: React.FC = () => {
  return (
    <div className="container">
      {blogData.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogSection;