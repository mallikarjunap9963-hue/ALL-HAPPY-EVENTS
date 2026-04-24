import { Link } from "react-router-dom";
import type { Blog } from "../../../types/blog.type";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="post-content mb-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="post-img position-relative">
            <Link to={`/blogs/${blog.slug}`}>
              <div className="img-hover">
                <i className="fa fa-plus"></i>
              </div>
              <img src={blog.thumbnail} alt="" className="img-fluid" />
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="blog-title">
            <Link to={`/blogs/${blog.slug}`} className="post-title">
              {blog.title}
            </Link>
          </h3>

          <div className="mb-2">
            <span className="meta-date me-2">{blog.created_at}</span>
          </div>

          <div className="entry-content">
            <p>{blog.short_description}</p>
          </div>

          <div className="read-more mt-2">
            <Link
              to={`/blogs/${blog.slug}`}
              className="btn btn-link btn-link-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;