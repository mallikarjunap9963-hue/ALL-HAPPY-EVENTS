// BlogDetailsPage.tsx
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, getBlogCategories } from "../services/blog.service";
import Footer from "../components/Footer";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug as string),
    enabled: !!slug,
  });

  const { data: categories } = useQuery({
    queryKey: ["blog-categories"],
    queryFn: getBlogCategories,
  });

  const cats =
    categories?.data?.categories ||
    categories?.data ||
    categories ||
    [];

  if (isLoading) return <div className="text-center py-5">Loading...</div>;

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-4">
              <img
                src={blog?.image}
                alt={blog?.title}
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{ height: "360px", objectFit: "cover" }}
              />
            </div>

            <h1 className="fw-bold display-5 mb-3">{blog?.title}</h1>

            <div className="d-flex align-items-center gap-3 mb-3 text-muted">
              <span className="small text-uppercase">{blog?.written_by}</span>
              <span>•</span>
              <span className="small">{blog?.created_at}</span>
              <span>•</span>
              <Link
                to={`/blogs/category/${blog?.blog_category?.slug}`}
                className="badge rounded-pill bg-danger-subtle text-danger text-decoration-none"
              >
                {blog?.blog_category?.name}
              </Link>
            </div>

            <p className="lead text-secondary mb-4">
              {blog?.short_description}
            </p>

            <div className="fs-5 lh-lg text-dark">
              {Array.isArray(blog?.description) ? (
                blog.description.map((para: string, i: number) => (
                  <p key={i} className="mb-4">{para}</p>
                ))
              ) : (
                <p className="mb-4">{blog?.description}</p>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">CATEGORIES</h5>
                <ul className="list-unstyled mb-0">
                  {cats.map((cat: any) => (
                    <li key={cat.slug} className="mb-3">
                      <Link
                        to={`/blogs/category/${cat.slug}`}
                        className="text-decoration-none text-dark d-flex justify-content-between align-items-center"
                      >
                        <span>{cat.name}</span>
                        <span>›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/blogs" className="btn btn-outline-dark w-100">
                Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailsPage;