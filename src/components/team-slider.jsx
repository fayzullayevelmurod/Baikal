import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import assets from '../assets';
import { useRef, useState } from 'react';

const TeamSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const guides = [
    {
      name: 'Ольга',
      description:
        'Заботливый гид, специализирующийся на семейном отдыхе. Обеспечивает комфортные условия для путешествий с детьми.',
      img: assets.gitImg1,
    },
    {
      name: 'Владимир',
      description:
        'Опытный путешественник и знаток Байкала, специализируется на пеших и водных маршрутах. Обладает глубокими познаниями местной флоры и фауны.',
      img: assets.gitImg2,
    },
    {
      name: 'Сергей',
      description:
        'Эксперт по истории и культуре Прибайкалья, проводит увлекательные экскурсии, рассказывая о легендах и традициях региона.',
      img: assets.gitImg3,
    },
    {
      name: 'Анна',
      description:
        'Профессиональный инструктор по йоге, проводит оздоровительные туры с элементами йоги на фоне живописных пейзажей Байкала.',
      img: assets.gitImg4,
    },
    {
      name: 'Владлена',
      description:
        'Многоязычный гид (английский, французский), специализирующийся на международных турах по Байкалу.',
      img: assets.gitImg5,
    },
    {
      name: 'Иван',
      description:
        'Профессиональный инструктор по йоге, проводит оздоровительные туры с элементами йоги на фоне живописных пейзажей Байкала.',
      img: assets.gitImg6,
    },
  ];
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className='slider-container'>
      <button
        className={`slide-btn custom-prev ${isBeginning ? 'hidden' : ''}`}
        onClick={() => {
          swiperRef.current && swiperRef.current.slidePrev();
        }}
      >
        <img src={assets.slidePrevArrow} alt='Previous' />
      </button>

      <button
        className={`slide-btn custom-next ${isEnd ? 'hidden' : ''}`}
        onClick={() => {
          swiperRef.current && swiperRef.current.slideNext();
        }}
      >
        <img src={assets.slideNextArrow} alt='Next' />
      </button>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {guides.map((guide, index) => (
          <SwiperSlide key={index}>
            <div className='slide'>
              <img className='git-img' src={guide.img} alt={guide.name} />
              <div className='info'>
                <h3 className='git-name'>{guide.name}</h3>
                <p className='git-desc'>{guide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
