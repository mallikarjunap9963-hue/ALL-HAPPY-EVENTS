import { useState } from "react";
import { vendorData } from "../../../data/venderdetails-page-data/vendorData";

const tabs = ["gallery", "grid", "street", "video", "map"] as const;

const VendorHeroTabs = () => {
  const [active, setActive] = useState<(typeof tabs)[number]>("grid");
  const { media } = vendorData;

  return (
    <section className="vendor-single-slider">
      {/* Tabs */}
      <div className="vendor-tab-circle">
        {tabs.map((t) => (
          <button
            key={t}
            className={`tab-btn ${active === t ? "active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content-area">
        {active === "gallery" && (
          <div className="single-img">
            <img src={media.gallery[0]} alt="" />
          </div>
        )}

        {active === "grid" && (
          <div className="grid-slider">
            {media.gridImages.map((img, i) => (
              <div
                key={i}
                className="grid-item"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        )}

        {active === "street" && (
          <iframe src={media.streetViewUrl} height="450" width="100%" />
        )}

        {active === "video" && (
          <div className="slider-frame">
            <iframe src={media.videoUrl} />
          </div>
        )}

        {active === "map" && (
          <div className="slider-frame">
            <iframe src={media.mapUrl} />
          </div>
        )}
      </div>
    </section>
  );
};

export default VendorHeroTabs;