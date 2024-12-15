// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import assets from '../assets';

const CoverflowSlider = () => {
  return (
    <div className='slider-container'>
      <Swiper
        // effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // pagination={true}
        // loop={true}
        // modules={[EffectCoverflow, Pagination]}
        // className='mySwiper'
        loop={true}
        speed={1000}
        // autoplay={{
        //   delay: 3000,
        // }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img className='swiper-img' src={assets.journeyImg2} alt='Image 1' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src={assets.journeyImg1} alt='Image 2' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src={assets.journeyImg3} alt='Image 3' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src={assets.journeyImg2} alt='Image 4' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src={assets.journeyImg3} alt='Image 5' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoverflowSlider;
