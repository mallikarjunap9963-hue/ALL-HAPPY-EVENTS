import type { Blog } from "../types/blog.type";

interface Props {
    blog: Blog;
}

const latestBlogCard = ({ blog }: Props) => {
    return (
        <div className="rr-project-slider-item text-center">
            <div className="rr-project-slider-thumb">
                <img src={blog.thumbnail} alt={blog.title} />
            </div>
            <div className="rr-project-slider-content">
                <h3 className="rr-project-slider-title">
                    <a href="#" className="bloghead">
                        {blog.title}
                    </a>
                </h3>
                <p>{blog.short_description}</p>
                <a href="#" className="more-link">
                    {blog.created_at}
                </a>
            </div>
        </div>
    )
}

export default latestBlogCard