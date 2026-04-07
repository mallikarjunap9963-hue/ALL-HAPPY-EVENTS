// src/components/blog/BlogList.tsx

import BlogCard from "../../blog-section-card";
import { BLOGS } from "../../blog-section-data";

const BlogList = () => {
  return (
    <section className="wide-tb-90">
      <div className="container">
        {BLOGS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;