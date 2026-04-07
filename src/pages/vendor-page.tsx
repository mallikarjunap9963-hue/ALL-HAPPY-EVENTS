import { useParams } from "react-router-dom";
import SearchResultHeader from "../components/search-result-header";
import Header from "../components/header";
import Footer from "../components/footer";
import PopularServices from "../components/popular-services";
import PlannerSection from "../components/contact-section";
import PhotographerTabs from "../components/faq-tabs";
import VendorImageSection from "../components/image-section";
import { vendors } from "../data/venderpage-data/image-data";
import FilterSection from "../components/filters-section";
import { filterData } from "../data/venderpage-data/filter-data";

const VendorPage = () => {
  const { category } = useParams();

  return (
    <>
      <Header />
      <SearchResultHeader />

      <section className="wide-tb-90 bg-light">
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <FilterSection filters={filterData} />
            </div>

            <div className="col-lg-8">

              <div className="result-count">
                <strong>{category} results:</strong>
              </div>

              <VendorImageSection vendors={vendors} />

            </div>
          </div>
        </div>
      </section>

      <PhotographerTabs />
      <PopularServices />
      <PlannerSection />
      <Footer />
    </>
  );
};

export default VendorPage;