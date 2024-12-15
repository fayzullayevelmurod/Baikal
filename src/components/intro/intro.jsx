import assets from '../../assets';
import './intro.scss';
export const Intro = () => {
  return (
    <section className='intro'>
      <h1 className='intro-title'>Путешествие на Байкал</h1>
      <div className='selec-tour'>
        <div className='selec-tour__box'>
          <h2 className='selec-tour__box-title'>Выбрать тур</h2>
          <a className='selec-tour__box-btn' href='#selec-tour'>
            <span>Перейти</span>
            <img src={assets.nextArrow} alt='next arrow' />
          </a>
        </div>
        <div className='selec-tour__box'>
          <h2 className='selec-tour__box-title'>Оставить заявку</h2>
          <a className='selec-tour__box-btn' href='#contact-bottom'>
            <span>Перейти</span>
            <img src={assets.nextArrow} alt='next arrow' />
          </a>
        </div>
        <div className='selec-tour__box'>
          <h2 className='selec-tour__box-title'>Контакты</h2>
          <a className='selec-tour__box-btn' href='#contact'>
            <span>Перейти</span>
            <img src={assets.nextArrow} alt='next arrow' />
          </a>
        </div>
      </div>
    </section>
  );
};
