
const locations = [
  {
    city: "Hyderabad",
    listings: "120+ Listings",
    image: "/src/images/locations/location_1.jpg",
  },
  {
    city: "Vijayawada",
    listings: "95+ Listings",
    image: "/src/images/locations/location_2.jpg",
  },
  {
    city: "Tirupati",
    listings: "150+ Listings",
    image: "/src/images/locations/location_5.jpg",
  },
  {
    city: "Rajahmundry",
    listings: "80+ Listings",
    image: "/src/images/locations/location_4.jpg",
  },
  {
    city: "Vizag",
    listings: "200+ Listings",
    image: "/src/images/locations/location_5.jpg",
  },
  {
    city: "Warangal",
    listings: "110+ Listings",
    image: "/src/images/locations/location_6.jpg",
  },
];

export default function PopularLocations() {
  return (
    <section className="wide-tb-120 bg-light-gray">
      <div className="container">
        <div className="section-title text-center">
          <h1>Popular Wedding Locations</h1>
          <p>
            Discover top wedding venues and vendors across India’s most loved
            cities
          </p>
        </div>

        <div className="row">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 col-xl-4"
            >
              <div className="popular-locations-alternate">
                <div className="overlay-box">
                  <div className="mt-auto">
                    <h3>
                      <a href="#">{loc.city}</a>
                      <span>{loc.listings}</span>
                    </h3>
                  </div>
                </div>
                <img src={loc.image} alt={loc.city} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}