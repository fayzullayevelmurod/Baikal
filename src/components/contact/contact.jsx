import assets from '../../assets';
import { Title } from '../title';
import './contact.scss';
export const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact-top'>
          <Title subText='контакты' />
          <div className='contact-top__boxes'>
            <div className='content-box'>
              <div className='box'>
                <img src={assets.bigLocation} alt='' />
                <h3>Адрес</h3>
              </div>
              <a href='#!'>г. Лучший, ул. Милая 6</a>
            </div>
            <div className='midle-boxes'>
              <div className='flex-box'>
                <div className='content-box'>
                  <div className='box'>
                    <img src={assets.tel} alt='' width={31} height={31} />
                    <h3>Телефон</h3>
                  </div>
                  <a href='#!'>8 888 888 88 88</a>
                  <a href='#!'>8 999 999 99 99</a>
                </div>
                <div className='content-box'>
                  <div className='box'>
                    <img src={assets.clock} alt='' width={31} height={31} />
                    <h3>Время работы</h3>
                  </div>
                  <a href='#!'>
                    Понедельник – Воскресенье <br />с 8:00 до 20:00
                  </a>
                </div>
              </div>
              <div className='social-media'>
                <a href='#!'>
                  <img src={assets.telegram} alt='' />
                </a>
                <a href='#!'>
                  <img src={assets.whatsapp} alt='' />
                </a>
              </div>
            </div>
            <div className='content-box'>
              <div className='box'>
                <img src={assets.pochta} alt='' width={36} height={28} />
                <h3>Почта</h3>
              </div>
              <a href='#!'>pochta@mail.com</a>
            </div>
          </div>
          <a className='yellow-btn' href='#!'>
            Заказать звонок
          </a>
        </div>
        <div className='contact-bottom'>
          <Title text='Остались вопросы?' />
          <form>
            <div className='inputs'>
              <input type='text' name='name' placeholder='ваше имя' />
              <input
                type='number'
                name='tel'
                placeholder='ваш номер телефона'
              />
              <input
                type='email'
                name='email'
                placeholder='ваша электронная почта'
              />
            </div>
            <button className='orange-btn'>отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};
