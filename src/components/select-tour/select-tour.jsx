import assets from '../../assets';
import { Card } from '../card/card';
import { Title } from '../title';
import './select-tour.scss';
export const SelectTour = () => {
  return (
    <section className='select-tour'>
      <div className='container'>
        <Title text='Выбрать' subText='тур' />

        <div className='maps'>
          <div className='line'></div>
          <div className='map-img'>
            <img src={assets.map1} alt='' />
          </div>
          <div className='map-img'>
            <img src={assets.map2} alt='' />
          </div>
          <div className='map-img'>
            <img src={assets.map3} alt='' />
          </div>
          <div className='map-img'>
            <img src={assets.map4} alt='' />
          </div>
          <div className='map-img'>
            <img src={assets.map5} alt='' />
          </div>
        </div>

        <div className='tour-cards'>
          <Card />
        </div>
        <div className='tour-booking'>
          <div className='tour-booking__head'>
            <h3 className='tour-booking__title'>Бронирование тура</h3>
            <p className='tour-booking__desc'>
              Оставьте ваши данные и мы перезвоним вам для уточнения всех
              деталей для более точного бронирования!
            </p>
          </div>
          <form className='tour-booking__form'>
            <input type='text' name='name' placeholder='Ваше имя' />
            <input type='number' name='tel' placeholder='Ваш номер телефона' />
            <input type='email' name='email' placeholder='Ваш Email' />
            <button className='send-btn'>заБронировать</button>
          </form>
        </div>
      </div>
    </section>
  );
};
