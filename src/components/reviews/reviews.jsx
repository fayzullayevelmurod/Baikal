import assets from '../../assets';
import { Title } from '../title';
import './reviews.scss';
export const Reviews = () => {
  return (
    <section className='reviews' id='reviews'>
      <div className='reviews-container'>
        <Title text='Отзывы наших' subText='клиентов' />
        <div className='reviews-boxes'>
          <div className='reviews-img__box'>
            <img src={assets.reviewsImg} alt='reviews img' />
          </div>
          <div className='reviews-content'>
            <div className='reviews-rating'>
              <h3 className='reviews-rating__title'>
                4.8 <span>/</span> 5
              </h3>
              <div className='stars'>
                <img src={assets.star} alt='' />
                <img src={assets.star} alt='' />
                <img src={assets.star} alt='' />
                <img src={assets.star} alt='' />
                <img src={assets.emtyStar} alt='' />
              </div>
            </div>
            <div className='reviews-content__boxes'>
              <div className='reviews-box'>
                <div className='flex-box'>
                  <div>
                    <div className='stars'>
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.emtyStar} alt='' />
                    </div>
                    <h4 className='user-name'>Михаил Сергеев </h4>
                  </div>
                  <span className='comment-date'>14.05.2023</span>
                </div>
                <p className='user-comment'>
                  Всё было очень хорошо, несмотря на погодные сюрпризы. Я очень
                  благодарен координатору Ольге, она большая молодец, окружила
                  нас вниманием, всегда на связи, все проверит, все сверит!
                  Отдельно хочется отметить транспорт и водителя, Егор большой
                  профессионал и машины отличные! Гид Владимир Александрович —
                  это просто без комментариев, человек энциклопедия!
                </p>
              </div>
              <div className='reviews-box'>
                <div className='flex-box'>
                  <div>
                    <div className='stars'>
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.emtyStar} alt='' />
                    </div>
                    <h4 className='user-name'>Светлана Егорова </h4>
                  </div>
                  <span className='comment-date'>11.02.2024</span>
                </div>
                <p className='user-comment'>
                  Вообще честно говоря впечатлений масса, я очень много
                  путешествую, много что видела, но вот этот лед, это нечто
                  особенное, нереальное! А Владимир Александрович так
                  вдохновенно рассказывал про то как цветёт весной степь, что
                  непременно захотелось вернуться!
                </p>
              </div>
              <div className='reviews-box'>
                <div className='flex-box'>
                  <div>
                    <div className='stars'>
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.emtyStar} alt='' />
                    </div>
                    <h4 className='user-name'>Михаил Сергеев </h4>
                  </div>
                  <span className='comment-date'>14.05.2023</span>
                </div>
                <p className='user-comment'>
                  Всё было очень хорошо, несмотря на погодные сюрпризы. Я очень
                  благодарен координатору Ольге, она большая молодец, окружила
                  нас вниманием, всегда на связи, все проверит, все сверит!
                  Отдельно хочется отметить транспорт и водителя, Егор большой
                  профессионал и машины отличные! Гид Владимир Александрович —
                  это просто без комментариев, человек энциклопедия!
                </p>
              </div>
              <div className='reviews-box'>
                <div className='flex-box'>
                  <div>
                    <div className='stars'>
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.star} alt='' />
                      <img src={assets.emtyStar} alt='' />
                    </div>
                    <h4 className='user-name'>Наталья Сивак</h4>
                  </div>
                  <span className='comment-date'>07.09.2024</span>
                </div>
                <p className='user-comment'>
                  Вообще честно говоря впечатлений масса, я очень много
                  путешествую, много что видела, но вот этот лед, это нечто
                  особенное, нереальное! А Владимир Александрович так
                  вдохновенно рассказывал про то как цветёт весной степь, что
                  непременно захотелось вернуться!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
