import assets from '../../assets';
import './footer.scss';
export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div>
            <h3 className='footer-title'>О компании</h3>
            <ul>
              <li>
                <a className='footer-link' href='#about-us'>
                  О нас
                </a>
              </li>
              <li>
                <a className='footer-link' href='#our-guides'>
                  Команда
                </a>
              </li>
              <li>
                <a className='footer-link' href='#journey'>
                  Фотоотчеты
                </a>
              </li>
              <li>
                <a className='footer-link' href='#reviews'>
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='footer-title'>Услуги</h3>
            <ul>
              <li>
                <a className='footer-link' href='#selec-tour'>
                  Выбрать тур
                </a>
              </li>
              <li>
                <a className='footer-link' href='#contact'>
                  Заказать звонок
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='footer-title'>КОНТАКТЫ</h3>
            <ul>
              <li>
                <a className='footer-link' href='#!'>
                  <img src={assets.location} alt='' />
                  <span>Лучший</span>
                </a>
              </li>
              <li>
                <a className='footer-link' href='tel:88888888888'>
                  <img src={assets.phone} alt='' />
                  <span>8 888 888 88 88</span>
                </a>
              </li>
              <li>
                <a className='footer-link' href='tel:88888888888'>
                  <img src={assets.mail} alt='' />
                  <span>pohta@mail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
