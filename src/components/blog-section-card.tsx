import type { BlogDetails } from "../types/blog.type";

const BlogCard = ({ post }: { post: BlogDetails }) => {
  return (
    <div className="row blog-wrap align-items-center mb-5">
      {/* Image Side */}
      <div className="col-lg-6">
        <div className="blog-thumb position-relative">
          <img src={post.image} alt={post.title} className="img-fluid w-100" />

          {/* Overlay */}
          <div className="blog-overlay">
            <span className="plus-icon">+</span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="col-lg-6">
        <div className="blog-content">
          <h3 className="blog-title">{post.title}</h3>

          <div className="blog-meta">
            <span className="badge-date">{post.created_at}</span>
            <span className="badge-category">{post.blog_category.name}</span>
          </div>

          <p>{post.description}</p>

          <a href="#" className="read-more">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;