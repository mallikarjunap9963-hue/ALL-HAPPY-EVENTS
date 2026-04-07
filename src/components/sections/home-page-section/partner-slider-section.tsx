import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/swiper-bundle.css';
import PartnerSliderCard from '../../partner-slider-card';
import { partners } from '../../../data/home-page -data/partners-slider-data';

const PartnerSliderSection = () => {
  return (
       <section className="wide-tb-90 bg-light">
      <div className="container">
        <div className="section-title text-center">
          <h1>Our Trusted Partners</h1>
          <p>
            Associated with leading brands that power seamless wedding planning
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {partners.map((slider, index) => (
            <SwiperSlide key={index}>
              <PartnerSliderCard Slider={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default PartnerSliderSection;