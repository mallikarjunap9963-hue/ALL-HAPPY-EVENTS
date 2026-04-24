
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../services/blog.service";
import BlogCard from "../../blog-section-card";
import type { BlogDetails } from "../../../types/blog.type";

const BlogList = () => {
  const { data: blogsData } = useQuery({ queryKey: ["blogs"], queryFn: getBlogs });
  const blogs: BlogDetails[] = blogsData?.data?.blogs || [];
  return (
    <section className="wide-tb-90">
      <div className="container">
        {blogs?.map((post: BlogDetails) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;