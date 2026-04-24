import Api from "../libaray/api";

const getBlogs = async () => {
    const response = await Api.get("/blogs");
    return response.data;
}
const getBlogBySlug = async (slug: string) => {
    const res = await Api.get(`/blogs/${slug}`);
    return res.data.data;
};
 const getBlogCategories = () =>
    Api.get("/blog-categories");
export { getBlogs, getBlogBySlug, getBlogCategories };