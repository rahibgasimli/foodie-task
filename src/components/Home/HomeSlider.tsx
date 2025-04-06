import { Swiper, SwiperSlide } from 'swiper/react';

import banner from "../../assets/images/home/banner.jpg"

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination  } from 'swiper/modules';

function HomeSlider() {
    return (
        <div className="home-slider">
            <Swiper 
                pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Pagination, Autoplay]} 
                className="mySwiper">
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider