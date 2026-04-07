import SearchBar from "./SearchBar";
import CategoryIcons from "./CategoryIcons";

export default function HeroSection() {
  return (
    <section className="slider-wrap style-second">
      <div className="slider-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 mx-auto text-center">

              <h1>Find Most Trusted Vendors for All Your Celebrations</h1>

              <p className="lead txt-white">
                Explore verified venues, photographers, makeup artists, and more —
                with genuine reviews, transparent pricing, and real availability.
              </p>

              <SearchBar />

              <p className="lead txt-white mt-4">
                Or browse featured categories
              </p>

              <CategoryIcons />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}