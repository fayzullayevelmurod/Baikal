import { useState } from 'react';
import assets from '../../assets';
import { Card } from '../card/card';
import { Title } from '../title';
import './select-tour.scss';
import { CallModal } from '../modal/call-modal';
export const SelectTour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (id) => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className='select-tour' id='selec-tour'>
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
          <div className='tour-booking' id='tour-booking'>
            <div className='tour-booking__head'>
              <h3 className='tour-booking__title'>Бронирование тура</h3>
              <p className='tour-booking__desc'>
                Оставьте ваши данные и мы перезвоним вам для уточнения всех
                деталей для более точного бронирования!
              </p>
            </div>
            <form className='tour-booking__form'>
              <input type='text' name='name' placeholder='Ваше имя' />
              <input
                type='number'
                name='tel'
                placeholder='Ваш номер телефона'
              />
              <input type='email' name='email' placeholder='Ваш Email' />
              <button type='button' className='send-btn' onClick={openModal}>
                заБронировать
              </button>
            </form>
          </div>
        </div>
      </section>
      <CallModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
