import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/swiper-bundle.css';
import { blogs } from '../../../data/home-page -data/latest-blogs-data';
import LatestBlogsCard from '../../latest-blog-card';

const LatestBlogsSection = () => {
  return (
    <section className="rr-project-slider-area py-5 rr-project-slider-bg p-relative fix section_one">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h1>Latest Blogs</h1>
          <p>Fresh inspiration and trending ideas from Indian weddings</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <LatestBlogsCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default LatestBlogsSection;