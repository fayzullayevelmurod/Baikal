import React, { useState } from 'react';
import assets from '../../assets';
import { Title } from '../title';
import './journey.scss';

export const Journey = () => {
  const [activeImage, setActiveImage] = useState(assets.journeyImg1);

  const galleryImages = [
    assets.journeyImg4,
    assets.journeyImg5,
    assets.journeyImg6,
    assets.journeyImg7,
    assets.journeyImg8,
    assets.journeyImg9,
  ];

  return (
    <section className='journey' id='journey'>
      <div className='journey-container'>
        <Title text='Виртуальное' subText='путешествие' />
        <p className='sub-title'>
          Фото с наших мест <br /> <br /> Окунись в атмосферу наших маршрутов!
        </p>

        {/* Journey Slider */}
        <div className='journey-boxes'>
          <div className='journey-slider'>
            <img
              className='journey-slider__img left'
              src={assets.journeyImg2}
              alt=''
            />
            {/* Active rasm */}
            <img className='active-img' src={activeImage} alt='Active' />
            <img
              className='journey-slider__img right'
              src={assets.journeyImg3}
              alt=''
            />
          </div>

          {/* Journey Gallery */}
          <div className='journey-gallery'>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery-${index}`}
                className='gallery-img'
                onClick={() => setActiveImage(image)} // Bosilganda activeImage yangilanadi
              />
            ))}
          </div>
        </div>

        {/* Compas Section */}
        <div className='compas'>
          <div className='compas-content'>
            <p className='compas-content__desc'>
              <b>Мы строим маршрут</b> так, чтобы за неделю показать самые
              интересные места региона. Включаем в программу только лучшее
              проживание, транспорт, питание, людей и достопримечательности.
            </p>
            <img
              className='compas-content__img'
              src={assets.compas}
              alt='compas'
            />
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
