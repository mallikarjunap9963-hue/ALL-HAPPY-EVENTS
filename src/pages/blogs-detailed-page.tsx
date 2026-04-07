import Breadcrumbs from "../components/sections/blog-section/bread-crumb";
import Footer from "../components/footer";
import BlogDetailsSection from "../components/sections/blog-detailed-section/image-card";
import Sidebar from "../components/sections/blog-section/side-bar";
import BlogDetailsContent from "../components/sections/blog-detailed-section/blog-details-content";
import Header from "../components/header";

const BlogDetailsPage = () => {
    return (
        <div>
            <Header/>
            <Breadcrumbs title="Blog Details" />

            <div className="container">
                <div className="row">

                    {/* LEFT - BLOG (8 columns) */}
                    <div className="col-lg-8">
                        <BlogDetailsSection />
                        <BlogDetailsContent />
                    </div>

                    {/* RIGHT - SIDEBAR (4 columns) */}
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogDetailsPage;