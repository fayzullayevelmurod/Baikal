import assets from '../../assets';
import { Title } from '../title';
import './journey.scss';
export const Journey = () => {
  return (
    <section className='journey'>
      <div className='journey-container'>
        <Title text='Виртуальное' subText='путешествие' />
        <p className='sub-title'>
          Фото с наших мест Окунись в атмосферу наших маршрутов!
        </p>

        <div className='journey-boxes'>
          <div className='journey-slider'>
            <img
              className='journey-slider__img left'
              src={assets.journeyImg2}
              alt=''
            />
            <img className='active-img' src={assets.journeyImg1} alt='' />
            <img
              className='journey-slider__img right'
              src={assets.journeyImg3}
              alt=''
            />
          </div>
          <div className='journey-gallery'>
            <img src={assets.journeyImg4} alt='' />
            <img src={assets.journeyImg5} alt='' />
            <img src={assets.journeyImg6} alt='' />
            <img src={assets.journeyImg7} alt='' />
            <img src={assets.journeyImg8} alt='' />
            <img src={assets.journeyImg9} alt='' />
          </div>
        </div>

        <div className='compas'>
          <div className='compas-content'>
            <p className='compas-content__desc'>
              <b>Мы строим маршрут</b> так, чтобы за неделю показать самые
              интересные места региона. Включаем в программу только лучшее
              проживание, транспорт, питание, людей и достопримечательности.
            </p>
            <img className='compas-content__img' src={assets.compas} alt='compas' />
            <p className='compas-content__desc'>
              Работаем с группами до 10 человек и лично их сопровождаем. Ваш
              отдых будет идеально спланирован и максимально комфортен.
              Позвоните нам, чтобы узнать больше и забронировать тур.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
