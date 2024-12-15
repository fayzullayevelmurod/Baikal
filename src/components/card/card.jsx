import { useState } from 'react';
import assets from '../../assets';
import { Modal } from '../modal/modal';
import './card.scss';
export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTour, setCurrentTour] = useState({});

  const tours = [
    {
      id: 1,
      title: 'Зимний Байкал на коньках',
      duration: '7 дней',
      distance: '120 км',
      difficulty: '3/5',
      description:
        'В этом походе мы увидим самые красивые и потаенные места Байкала: Листвянку, Бугульдейку, бухту Песчаную и многие другие; сможем как хорошенечко вдарить по спорту в 20-40 километровых переходах на коньках, так и насладиться днями отдыха с посещнием музеев, кафе и культурных достопримечательностей. А отсутствие холодных ночевок и переходов под рюкзаком позволят вам не отвлекаться на бытовые мелочи и сполна насладиться путешествием.',
    },
    {
      id: 2,
      title: 'Детский Зимний Байкал',
      duration: '7 дней',
      distance: '16 км',
      difficulty: '1/5',
      description:
        'На выезде мы пройдем по льду Байкала вдоль крутых берегов и гротов; поднимемся на самую высокую точку Листвянки; посетим питомник ездовых собак и прокатимся с каюром на собачьей упряжке; покатаемся на ватрушках, поиграем в снежные игры; сходим в музей деревянного зодчества «Тальцы»; проведем теплые и уютные вечера в большом доме; восхитимся невероятной красотой и глубиной льда Байкала и многое другое.',
    },
    {
      id: 3,
      title: 'Новогодний тур по Байкалу',
      duration: '5 дней',
      distance: '700 км',
      difficulty: '1/5',
      description:
        'Начинаем новый год с яркого путешествия на зимний Байкал! Лазурно-голубой, прозрачный, как стекло — тот самый первый лёд Байкала. Сюда мечтают попасть самые романтичные, любознательные и искушенные путешественники. Посетим самые топовые места за одну поездку, окунёмся в самобытную культуру и, возможно, в прорубь! Ночуем в тёплых гостиницах и коттеджах. Первый лёд Байкала — первое незабываемое впечатление нового года!',
    },
    {
      id: 4,
      title: 'Байкал Однодневный трекинг',
      duration: '1 дней',
      distance: '16 км',
      difficulty: '2/5',
      description:
        'Маршрут к Олхинским скальникам доступен круглогодично, но зимой к некоторым останцам предстоит идти по заснеженным тропам. Дорожки промаркированы волонтерами – помимо информационных карточек вас встретят изображения котов на камнях. Трек подойдет и для семейного отдыха (рекомендуем отправляться с детьми от 9 лет и старше), и для занятий альпинизмом и скалолазанием, если решите задержаться.',
    },
    {
      id: 5,
      title: 'Новогодний тур по Байкалу',
      duration: '8 дней',
      distance: '45 км',
      difficulty: '2/5',
      description:
        'За неделю мы сменим несколько видов транспорта, увидим самые знаменитые острова Ольхон и Огой, узнаем, для чего буддисты создавали ступы Просветления, и как прекрасна Ангара в лучах заходящего солнца. Нам не понадобятся тяжелые рюкзаки, все переходы и переезды будут налегке, а чтобы маршрут всем пришелся по душе, есть варианты досуга на выбор в свободное время.',
    },
  ];

  const openModal = (id) => {
    const selectedTour = tours.find((tour) => tour.id === id); // ID bo‘yicha ma'lumotni topamiz
    setCurrentTour(selectedTour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTour({});
  };

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
              <a className='orange-btn' href='#tour-booking'>
                забронировать
              </a>
              <button className='white-btn' onClick={() => openModal(1)}>
                <span>ПОДРОБНЕЕ О ТУРЕ</span>
                <img src={assets.nextUpArrow} alt='' />
              </button>
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
              <a className='orange-btn' href='#tour-booking'>
                забронировать
              </a>
              <button className='white-btn' onClick={() => openModal(2)}>
                <span>ПОДРОБНЕЕ О ТУРЕ</span>
                <img src={assets.nextUpArrow} alt='' />
              </button>
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
              <a className='orange-btn' href='#tour-booking'>
                забронировать
              </a>
              <button className='white-btn' onClick={() => openModal(3)}>
                <span>ПОДРОБНЕЕ О ТУРЕ</span>
                <img src={assets.nextUpArrow} alt='' />
              </button>
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
              <a className='orange-btn' href='#tour-booking'>
                забронировать
              </a>
              <button className='white-btn' onClick={() => openModal(4)}>
                <span>ПОДРОБНЕЕ О ТУРЕ</span>
                <img src={assets.nextUpArrow} alt='' />
              </button>
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
              <a className='orange-btn' href='#tour-booking'>
                забронировать
              </a>
              <button className='white-btn' onClick={() => openModal(5)}>
                <span>ПОДРОБНЕЕ О ТУРЕ</span>
                <img src={assets.nextUpArrow} alt='' />
              </button>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} data={currentTour} />
    </>
  );
};
