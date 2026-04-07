// components/Blog/Sidebar.tsx

const Sidebar = () => {
  return (
    <aside className="row sidebar-widgets">
      <div className="sidebar-primary col-lg-12 col-md-6">
        <form className="sidebar-search mb-4">
          <input type="text" className="form-control" placeholder="Enter here search..." />
        </form>

        <div className="widget mb-4">
          <h3 className="widget-title">Categories</h3>
          <ul className="list-unstyled">
            <li>Photography</li>
            <li>Wedding Planning</li>
            <li>Flowers</li>
            <li>Cakes</li>
            <li>Catering</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;