
const items = [
  {
    label: "Photographers",
    image: "/src/images/slider/venue_photography_breadcrumb.png",
    area: "p1",
    wide: true,
    link: "/vendors",
  },
  {
    label: "Makeup Artists",
    image: "/src/images/categories/makeup.jpg",
    area: "m1",
    wide: true,
    link: "/vendors",
  },
  {
    label: "Mehendi Artists",
    image: "/src/images/categories/mehandi.jpg",
    area: "mehndi",
    link: "/vendors",
  },
  {
    label: "Decorators",
    image: "/src/images/weddings/flower_decor.png",
    area: "decorators",
    link: "/vendors",
  },
  {
    label: "Caterers",
    image: "/src/images/categories/catering.jpg",
    area: "caterers",
    link: "/vendors",
  },
  {
    label: "Invitation Cards",
    image: "/src/images/categories/invitation.png",
    area: "invites",
    link: "/vendors",
  },
  {
    label: "DJs",
    image: "/src/images/categories/dj.jpg",
    area: "djs",
    link: "/vendors",
  },
  {
    label: "Pandits",
    image: "/src/images/categories/pandit.png",
    area: "transport",
    link: "/vendors",
  },
  {
    label: "Banquet Halls",
    image: "/src/images/categories/banquet.png",
    area: "anchor",
    link: "/venues",
  },
  {
    label: "Choreographers",
    image: "/src/images/categories/choreographers.png",
    area: "choreo",
    link: "/vendors",
  },
  {
    label: "Band / Baaja / Dhol",
    image: "/src/images/categories/bandbaja.jpg",
    area: "band",
    link: "/vendors",
  },
  {
    label: "Gifting",
    image: "/src/images/categories/gift.jpg",
    area: "gifting",
    wide: true,
    link: "/vendors",
  },
  {
    label: "Jewellery",
    image: "/src/images/fashion/fashion_1.png",
    area: "jewellery",
    wide: true,
    link: "/vendors",
  },
];

export default function VendorCategoriesGrid() {
  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>All Vendor Categories</h1>
          <p>Your trusted partners across every category</p>
        </div>

        <div className="vc-grid">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`vc-item ${item.wide ? "wide" : ""}`}
              style={{ gridArea: item.area }}
            >
              <img src={item.image} alt={item.label} />
              <div className="vc-label">{item.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}