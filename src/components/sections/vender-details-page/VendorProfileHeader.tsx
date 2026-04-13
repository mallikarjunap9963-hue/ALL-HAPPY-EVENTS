import { vendorData } from "../../../data/venderdetails-page-data/vendorData";

const VendorProfileHeader = () => {
  const { info } = vendorData;

  return (
    <div className="vendor-profile-single">
      <div className="container pos-rel">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <h3>{info.name}</h3>
            <p>{info.location}</p>
            <div className="reviews">
              ⭐ {info.rating} ({info.reviews} Reviews)
            </div>
          </div>

          <div className="col-lg-6 text-lg-right mt-lg-0 mt-4">
            <button className="btn btn-outline-white">Favorite</button>
            <button className="btn btn-outline-white">Share</button>
            <button className="btn btn-outline-white">Inbox</button>
            <button className="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfileHeader;