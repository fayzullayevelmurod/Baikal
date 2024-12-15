import assets from '../../assets';
import './card.scss';
export const Card = () => {
  return (
    <div className='card'>
      <h3 className='tour-name'>БАЙКАЛ</h3>
      <img className='card-img' src={assets.tourImg1} alt='' />
      <div className='card-content'>
        <h3 className='card-content__title'>Зимний Байкал на коньках</h3>
        <div className='card-date'>
          <h4>
            <span>11</span>/11 - <span>19</span>/11
          </h4>
        </div>
        <p className='card-desc'>
          Особенность этого маршрута в том, что четыре из семи дней мы проедем
          по льду на озерных коньках! Ни с чем не сравнимое чувство полета и
          свободы, вы запомните его на всю жизнь.
        </p>
        <div className='card-price__box'>
          <span>за человека</span>
          <h2 className='card-price'>
            70 500 <span>руб.</span>
          </h2>
        </div>
        <div className='card-footer'>
          <div className='card-btns'>
            <a className='orange-btn' href='#!'>
              забронировать
            </a>
            <a className='white-btn' href='#!'>
              <span>ПОДРОБНЕЕ О ТУРЕ</span>
              <img src={assets.nextUpArrow} alt='' />
            </a>
          </div>
          <div className='card-footer__bottom'>
            <div className='card-footer__box'>
              <img src={assets.calendar} alt='' />
              <span>7 дней</span>
            </div>
            <div className='card-footer__box'>
              <img src={assets.airPlane} alt='' />
              <span>перелет</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
