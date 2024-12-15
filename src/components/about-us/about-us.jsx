import assets from '../../assets';
import { Title } from '../title';
import './about-us.scss';

export const AboutUs = () => {
  return (
    <section className='about-us' id='about-us'>
      <div className='container'>
        <Title text='О' subText='нас' />
        <div className='about-us__box'>
          <div className='about-us__content'>
            <p className='about-us__desc'>
              Мы молодая компания по организации туров на Байкал. Наша команда
              тщательно организовывает маршруты и внимательно относится к
              каждому клиенту.
            </p>
            <p className='about-us__desc'>
              Каждый год мы привносим что-то новое в наш сервис, стараясь
              сделать поездку незабываемой.
            </p>
          </div>
          <div className='about-us__gallery'>
            <img
              className='about-us__gallery-sub-img'
              src={assets.aboutUsImg2}
              alt=''
            />
            <img src={assets.aboutUsImg1} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
