import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import LocationSection from "../components/sections/vender-details-page/location-section";
import VideoSection from "../components/sections/vender-details-page/video-card";
import GallerySection from "../components/sections/vender-details-page/gallery-section";
import AmenitiesSection from "../components/sections/vender-details-page/amenitie-section";
import DescriptionSection from "../components/sections/vender-details-page/description";
import VendorForm from "../components/sections/vender-details-page/form-section";
import Availability from "../components/sections/vender-details-page/date-picker";
import Categories from "../components/sections/vender-details-page/categoriesss";
import Statistics from "../components/sections/vender-details-page/statistics";
import WorkingHours from "../components/sections/vender-details-page/working-hour";
import AuthorProfile from "../components/sections/vender-details-page/author";
import { authorProfileData } from "../data/venderdetails-page-data/author-data";
import FeaturedListing from "../components/sections/vender-details-page/featured-list";
import { featuredListingsData } from "../data/venderdetails-page-data/featured-data";
import VendorNav from "../components/sections/vender-details-page/nav-section";
import ReviewHeader from "../components/sections/vender-details-page/review-header";
import ReviewSummary from "../components/sections/vender-details-page/review-summary";
import ReviewSortBar from "../components/sections/vender-details-page/review-sort-bar";
import ReviewsSection from "../components/sections/vender-details-page/review-section";
import ReviewForm from "../components/sections/vender-details-page/review-form";
import FaqSection from "../components/sections/vender-details-page/faq -section";

import VendorProfile from "../components/sections/vender-details-page/vendor-profile";
import VendorContent from "../components/sections/vender-details-page/vendor-content";

const VendorsDetailsPage = () => {

    // ✅ CONTROL TAB STATE
    const [activeTab, setActiveTab] = useState("slider");

    return (
        <div>
            <Header />

            <div className="vendor-profile-single">

                                    <VendorContent activeTab={activeTab} />

                    <VendorProfile 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab} 
                    />


            </div>

            <VendorNav />

            <section className="vendor-details py-5">
                <div className="container">
                    <div className="row">

                        {/* LEFT SIDE */}
                        <div className="col-lg-8">
                            <DescriptionSection />
                            <AmenitiesSection />
                            <GallerySection />
                            <VideoSection />
                            <ReviewHeader />
                            <ReviewSummary />
                            <ReviewSortBar />
                            <ReviewsSection />
                            <ReviewForm />
                            <FaqSection />
                            <LocationSection />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-4">
                            <VendorForm />
                            <Availability />
                            <Categories />
                            <Statistics />
                            <WorkingHours />
                            <AuthorProfile data={authorProfileData} />
                            <FeaturedListing data={featuredListingsData} />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VendorsDetailsPage;