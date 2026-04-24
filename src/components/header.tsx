import { IconArrowRight, IconMenu2, IconShoppingBag } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import logo from '../images/aLl_happy_events_final.png';

const Header = () => {
  const navLinks = [
    {
      name: "Venues",
      link: "/venues"
    },
    {
      name: "Vendors",
      link: "#",
      megaMenu: [
        {
          title: "Photographers",
          links: [
            { label: "Photographers", path: "/vendors/photographers" },
            { label: "Videographers", path: "/vendors/videographers" }
          ]
        },
        {
          title: "Pre Event Shoot",
          links: [
            { label: "Pre Event Shoot Locations", path: "/pre-event-photographers" },
            { label: "Pre Event Photographers", path: "/pre-event-photographers" }
          ]
        },
        {
          title: "Makeup",
          links: [
            { label: "Bridal Makeup Artists", path: "#" },
            { label: "Family Makeup", path: "#" }
          ]
        },
        {
          title: "Planning & Decor",
          links: [
            { label: "Event Planners", path: "#" },
            { label: "Decorators", path: "#" }
          ]
        }
      ]
    },
    {
      name: "Real Weddings",
      link: "/real-weddings"
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "FAQs",
      link: "/faqs",
    }
  ];

  return (
    <header className="fixed-top header-anim">
      <nav className="navbar navbar-expand-lg bdr-nav w-100 px-3">

        {/* LOGO */}
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="header_logo my-2" alt="logo" />
          </Link>
        </div>

        {/* NAV */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav nav-center">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item dropdown mega-parent">

                <Link className="nav-link" to={item.link}>
                  {item.name}
                  {item.megaMenu && <i className="fa fa-chevron-down"></i>}
                </Link>

                {/* MEGA MENU */}
                {item.megaMenu && (
                  <div className="mega-menu">
                    <div className="mega-grid">
                      {item.megaMenu.map((col, i) => (
                        <div className="mega-col" key={i}>
                          <h4>{col.title}</h4>

                          {col.links.map((link, j) => (
                            <Link key={j} to={link.path}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center ml-auto gx-2 loginsearch">
          <button className="navbar-toggler p-3">
            <IconMenu2 />
          </button>

          <div className="rr-header-right d-flex align-items-center">

            {/* CART */}
            <div className="rr-header-icon-card d-none d-xl-block">
              <IconShoppingBag className="text-light" />
              <span>0</span>
            </div>

            {/* LOGIN */}
            <div className="rr-header-contat d-none d-md-block ml-35">
              <Link className="rr-btn me-2" to="/login">
                <span>Login <IconArrowRight /></span>
              </Link>
            </div>

            {/* REGISTER */}
            <div className="rr-header-contat d-none d-md-block">
              <Link className="rr-btn register-btn" to="/register">
                <span>Register <IconArrowRight /></span>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;