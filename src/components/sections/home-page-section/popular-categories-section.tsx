import { Swiper, SwiperSlide } from 'swiper/react';
import PopularCategoriesCard from "../../popular-categories-card"
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/swiper-bundle.css';
import { popularCategories } from '../../../data/home-page -data/popular-categories.data';


const PopularCategoriesSection = () => {
    return (
        <section className="wide-tb-120">
            <div className="container">
                <div className="section-title text-center">
                    <h1>Popular Wedding Categories</h1>
                    <p>
                        Browse trusted vendors across India for venues, photography, bridal
                        fashion, décor and more.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {popularCategories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <PopularCategoriesCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PopularCategoriesSection