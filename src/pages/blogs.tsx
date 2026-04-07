import Footer from "../components/footer"
import Breadcrumbs from "../components/sections/blog-section/bread-crumb"
import BlogSection from "../components/sections/blog-section/popular-blog-section"
import Header from "../components/header"

const BlogsPage = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs title="Blog List" />
      <BlogSection />
      <Footer />
    </div>
  )
}
export default BlogsPage