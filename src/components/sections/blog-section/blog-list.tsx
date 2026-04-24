import BlogCard from "./post-blog";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../services/blog.service";
import type { Blog } from "../../../types/blog.type";

const BlogList = () => {
    const { data: blogsData } = useQuery({ queryKey: ["blogs"], queryFn: getBlogs });
    const blogs: Blog[] = blogsData?.data?.blogs || [];

    return (
        <>
            {blogs.map((blog: Blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </>
    );
};

export default BlogList;