import type{ Photographer } from "../types/image-type";

export default function PhotographerCard({ data }: { data: Photographer }) {
  const fullStars = Math.floor(data.rating.reduce((a, b) => a + b, 0) / data.rating.length);

  return (
    <div className="col-lg-6 col-md-6 mb-4">
      <div className="wedding-listing">
        <div className="img">
          <img src={data.image} alt={data.title} />

          <div className="img-content">
            <div className="top">
              {data.handpicked && (
                <span className="featured">★ Handpicked</span>
              )}
              <span className="price">₹ {data.price}</span>
            </div>

            <div className="bottom">
              <span className="tags">Photo + Video</span>
              <span className="favorite">♡</span>
            </div>
          </div>
        </div>

        <div className="content">
          <h3>
            {data.title} <span className="verified">✔</span>
          </h3>
          <div className="location">{data.location}</div>
          <div className="reviews">
            {"★".repeat(fullStars)} ({data.reviews} review)
          </div>
        </div>
      </div>
    </div>
  );
}