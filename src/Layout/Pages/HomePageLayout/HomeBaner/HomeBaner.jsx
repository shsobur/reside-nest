import { Link } from "react-router-dom";
import "../HomeBaner/HomeBaner.css";

// Swiper js__

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swipre css__
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Baner image__
import img1 from "../../../../assets/baner-img/baner (1).png";
import img2 from "../../../../assets/baner-img/baner (2).png";
import img3 from "../../../../assets/baner-img/baner (3).png";
import img4 from "../../../../assets/baner-img/baner (4).png";
import img5 from "../../../../assets/baner-img/baner (5).png";

const HomeBaner = () => {
  return (
    <div className="main_home_baner_outer_container">
      <div className="main_home_baner_inner_container">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="home_baner_left_contaienr"
        >
          <div>
            <h2>
              Discover A Place <br /> You Will love to live
            </h2>
            <p>
              Homie is a real estate soluation that gives you the local scoop
              about homes. <br />
              Search confidently with your trusted source of homes for sale or
              rent.
            </p>
            <Link>
              <button>Make An Entry</button>
            </Link>
          </div>
        </div>

        <div className="cursor-pointer home_baner_right_contaienr">
          <div className="home_baner_right_inner_contaienr">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={img1} alt="banerImage" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="banerImage" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="banerImage" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="banerImage" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="banerImage" />
              </SwiperSlide>
            </Swiper>

            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            className="baner_rigth_dream_section_container">
              <span>Buy Your Dream Home</span>
              <h2>77+</h2>
              <p>Home Available</p>
              <button>View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBaner;
