import { Link } from "react-router-dom";
import type { Photographer } from "../types/vender-type/image-type";

type Props = {
    vendor: Photographer;
};

const PhotographerCard = ({ vendor }: Props) => {
    return (
        <div className="col-lg-6 col-md-6 mb-4">

            {/* ✅ MAKE WHOLE CARD A LINK */}
            <Link
                to={`/vendors/details/${vendor.id}`}
                className="wedding-listing text-decoration-none"
            >
                <div className="img">
                    <img src={vendor.image} alt={vendor.title} />

                    <div className="img-content">
                        <div className="top">
                            {vendor.handpicked && (
                                <span className="featured">
                                    <i className="fa fa-star"></i>
                                    <span>Handpicked</span>
                                </span>
                            )}

                            <span className="price">
                                <i className="fa fa-tag"></i>
                                <span>{vendor.price}</span>
                            </span>
                        </div>

                        <div className="bottom">
                            <span className="tags">{vendor.tags}</span>

                            <span className="favorite">
                                <i className="fa fa-heart-o"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="gap">
                        <h3>
                            {vendor.title}
                            {vendor.verified && (
                                <span className="verified">
                                    <i className="fa fa-check-circle"></i>
                                </span>
                            )}
                        </h3>

                        <div>
                            <i className="fa fa-map-marker"></i> {vendor.location}
                        </div>
                    </div>

                    <div className="reviews">
                        <span className="stars">
                            {vendor.rating.map((star, i) => {
                                if (star === 1)
                                    return <i key={i} className="fa fa-star"></i>;
                                if (star === 0.5)
                                    return <i key={i} className="fa fa-star-half-stroke"></i>;
                                return <i key={i} className="fa fa-regular fa-star"></i>;
                            })}
                        </span>
                        ({vendor.reviews} review)
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default PhotographerCard;