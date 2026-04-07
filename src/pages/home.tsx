import Header from "../components/header"
import Footer from "../components/footer"
import HeroSection from "../components/HeroSection"
import PopularLocations from "../components/PopularLocations"
import VendorCategoriesGrid from "../components/VendorCategoriesGrid"
import CallToAction from "../components/CallToAction"
import RealWeddings from "../components/RealWeddings"
import PopularCategoriesSection from "../components/sections/home-page-section/popular-categories-section"
import LatestBlogsSection from "../components/sections/home-page-section/latest-blogs-section"
import PartnerSliderSection from "../components/sections/home-page-section/partner-slider-section"

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <PopularCategoriesSection />
            <PopularLocations />
            <VendorCategoriesGrid />
            <CallToAction />
            <RealWeddings />
            <PartnerSliderSection />
            <LatestBlogsSection/>
            <Footer />
        </>
    )
}
export default Home