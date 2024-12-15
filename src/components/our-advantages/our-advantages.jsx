import { Title } from '../title';
import './our-advantages.scss';
export const OurAdvantages = () => {
  return (
    <section className='our-advantages'>
      <div className='title-box'>
        <Title text='Наши' subText='Наши' />
      </div>
      <div className='container'>
        <div className='our-advantages__boxes'>
          <div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>1</span>
            </div>
            <h3 className='our-advantages__box-title'>Индивидуальные туры</h3>
            <p className='our-advantages__box-desc'>
              Только ваш маршрут, учитывая ваши желания и бюджет.
            </p>
          </div>
          <div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>2</span>
            </div>
            <h3 className='our-advantages__box-title'>Эксперты Байкала</h3>
            <p className='our-advantages__box-desc'>
            Мы знаем все его секреты и покажем самые красивые места!
            </p>
          </div>
          <div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>3</span>
            </div>
            <h3 className='our-advantages__box-title'>Безопасность</h3>
            <p className='our-advantages__box-desc'>
            Проверенные маршруты и опытные гиды.
            </p>
          </div>
          <div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>4</span>
            </div>
            <h3 className='our-advantages__box-title'>Качество и комфорт</h3>
            <p className='our-advantages__box-desc'>
            Мы предложим лучшие варианты размещения и питания.
            </p>
          </div>
          <div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>5</span>
            </div>
            <h3 className='our-advantages__box-title'>Доступные цены</h3>
            <p className='our-advantages__box-desc'>
            Отдых на Байкале доступен <br /> каждому.
            </p>
          </div><div className='our-advantages__box'>
            <div className='number-box'>
            <span className='number'>6</span>
            </div>
            <h3 className='our-advantages__box-title'>Отличные отзывы</h3>
            <p className='our-advantages__box-desc'>
            Наши клиенты уже оценили красоту Байкала с нами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
