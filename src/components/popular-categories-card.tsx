
import type { PopularCategory } from "../types/popular-categories.type";

interface Props {
  category: PopularCategory;
}

export default function PopularCategoriesCard({ category }: Props) {
  return (
      <div className="popular-categories">
        <img src={category.image} alt={category.title} />
        <div className="content-wrap">
          <div className="content">
            <div className="mt-auto d-flex align-items-center w-100 justify-content-between">
              <div className="catlinks">
                <a href="#">
                  <h3>{category.title}</h3>
                </a>
                <a href="#">
                  <span className="count-listings">
                    {category.count} vendors
                  </span>
                </a>
              </div>
              <a href="#" className="icon">
                {category.icon}
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}