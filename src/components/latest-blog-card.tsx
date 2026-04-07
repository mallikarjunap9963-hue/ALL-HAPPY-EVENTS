
import type { Blog } from '../types/blog-type/blog-section-type'


interface Props {
  blog: Blog;
}
const latestBlogCard = ({ blog }: Props) => {
    return (
        <div className="rr-project-slider-item text-center">
            <div className="rr-project-slider-thumb">
                <img src={blog.img} alt={blog.title} />
            </div>
            <div className="rr-project-slider-content">
                <h3 className="rr-project-slider-title">
                    <a href="#" className="bloghead">
                        {blog.title}
                    </a>
                </h3>
                <p>{blog.desc}</p>
                <a href="#" className="more-link">
                    {blog.date}
                </a>
            </div>
        </div>
    )
}

export default latestBlogCard