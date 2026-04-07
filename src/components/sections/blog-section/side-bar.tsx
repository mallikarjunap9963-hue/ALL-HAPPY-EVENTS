// src/components/blog/Sidebar.tsx

import CategoriesSection from "../blog-section/category-section";
import PopularPostsSection from "../blog-section/popular-post-section";
import ArchivesSection from "../blog-section/archieve-section";
import TagsSection from "../blog-section/tag-section";

const Sidebar = () => {
  return (
    <aside className="row sidebar-widgets">

      {/* PRIMARY */}
      <div className="sidebar-primary col-lg-12 col-md-6">

        {/* SEARCH */}
        <form className="sidebar-search mb-4 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter here search..."
          />
          <button type="submit" className="btn">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <CategoriesSection />
        <PopularPostsSection />

      </div>

      {/* SECONDARY */}
      <div className="sidebar-secondary col-lg-12 col-md-6">

        <ArchivesSection />
        <TagsSection />

      </div>

    </aside>
  );
};

export default Sidebar;