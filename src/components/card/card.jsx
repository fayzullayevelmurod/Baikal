import assets from '../../assets';
import './card.scss';
export const Card = () => {
  return (
    <>
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
      <div className='card'>
        <h3 className='tour-name'>БАЙКАЛ</h3>
        <img className='card-img' src={assets.tourImg2} alt='' />
        <div className='card-content'>
          <h3 className='card-content__title'>Детский Зимний Байкал</h3>
          <div className='card-date'>
            <h4>
              <span>11</span>/11 - <span>19</span>/11
            </h4>
          </div>
          <p className='card-desc'>
            Зимняя программа на Байкале специально для детей и их родителей. Вас
            ждет семейный активный отдых в экологически чистом месте. Вы сможете
            провести с детьми всю неделю, потратить время с пользой и набраться
            положительных эмоций.
          </p>
          <div className='card-price__box'>
            <span>за человека</span>
            <h2 className='card-price'>
              63 800 <span>руб.</span>
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
      <div className='card'>
        <h3 className='tour-name'>БАЙКАЛ</h3>
        <img className='card-img' src={assets.tourImg3} alt='' />
        <div className='card-content'>
          <h3 className='card-content__title'>Новогодний тур по Байкалу</h3>
          <div className='card-date'>
            <h4>
              <span>11</span>/11 - <span>19</span>/11
            </h4>
          </div>
          <p className='card-desc'>
            Начинаем новый год с яркого путешествия на зимний Байкал!
            Лазурно-голубой, прозрачный, как стекло — тот самый первый лёд
            Байкала. Сюда мечтают попасть самые романтичные, любознательные и
            искушенные путешественники.
          </p>
          <div className='card-price__box'>
            <span>за человека</span>
            <h2 className='card-price'>
              89 000 <span>руб.</span>
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
                <span>5 дней</span>
              </div>
              <div className='card-footer__box'>
                <img src={assets.airPlane} alt='' />
                <span>перелет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='tour-name'>БАЙКАЛ</h3>
        <img className='card-img' src={assets.tourImg4} alt='' />
        <div className='card-content'>
          <h3 className='card-content__title'>Байкал Однодневный трекинг</h3>
          <div className='card-date'>
            <h4>
              <span>11</span>/11 - <span>19</span>/11
            </h4>
          </div>
          <p className='card-desc'>
            Для тех, кто хочет увидеть малоизвестные, но не менее любопытные
            места возле Байкала, мы станем проводниками к останцам Олхинского
            плато. Олхинские скальники являются частью маршрута Большой
            Байкальской тропы.
          </p>
          <div className='card-price__box'>
            <span>за человека</span>
            <h2 className='card-price'>
              10 000 <span>руб.</span>
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
                <span>1 дней</span>
              </div>
              <div className='card-footer__box'>
                <img src={assets.airPlane} alt='' />
                <span>перелет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <h3 className='tour-name'>БАЙКАЛ</h3>
        <img className='card-img' src={assets.tourImg5} alt='' />
        <div className='card-content'>
          <h3 className='card-content__title'>Летний Байкал</h3>
          <div className='card-date'>
            <h4>
              <span>11</span>/11 - <span>19</span>/11
            </h4>
          </div>
          <p className='card-desc'>
            Священный Байкал посещают не только ради прозрачного льда и
            многочисленных гротов. Летом это крупнейшее пресное озеро манит
            скалистыми и песчаными берегами, многообразием вариантов активного
            отдыха на воде и на суше.
          </p>
          <div className='card-price__box'>
            <span>за человека</span>
            <h2 className='card-price'>
              67 000 <span>руб.</span>
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
                <span>8 дней</span>
              </div>
              <div className='card-footer__box'>
                <img src={assets.airPlane} alt='' />
                <span>перелет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
