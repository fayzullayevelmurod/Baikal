// import { useState } from 'react';
// import assets from '../../assets';
// import { CallModal } from '../modal/call-modal';
// import { Title } from '../title';
// import './contact.scss';
// export const Contact = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = (id) => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <section className='contact' id='contact'>
//         <div className='container'>
//           <div className='contact-top'>
//             <Title subText='контакты' />
//             <div className='contact-top__boxes'>
//               <div className='content-box'>
//                 <div className='box'>
//                   <img src={assets.bigLocation} alt='' />
//                   <h3>Адрес</h3>
//                 </div>
//                 <a href='#!'>г. Лучший, ул. Милая 6</a>
//               </div>
//               <div className='midle-boxes'>
//                 <div className='flex-box'>
//                   <div className='content-box'>
//                     <div className='box'>
//                       <img src={assets.tel} alt='' width={31} height={31} />
//                       <h3>Телефон</h3>
//                     </div>
//                     <a href='#!'>8 888 888 88 88</a>
//                     <a href='#!'>8 999 999 99 99</a>
//                   </div>
//                   <div className='content-box'>
//                     <div className='box'>
//                       <img src={assets.clock} alt='' width={31} height={31} />
//                       <h3>Время работы</h3>
//                     </div>
//                     <a href='#!'>
//                       Понедельник – Воскресенье <br />с 8:00 до 20:00
//                     </a>
//                   </div>
//                 </div>
//                 <div className='social-media'>
//                   <a href='#!'>
//                     <img src={assets.telegram} alt='' />
//                   </a>
//                   <a href='#!'>
//                     <img src={assets.whatsapp} alt='' />
//                   </a>
//                 </div>
//               </div>
//               <div className='content-box'>
//                 <div className='box'>
//                   <img src={assets.pochta} alt='' width={36} height={28} />
//                   <h3>Почта</h3>
//                 </div>
//                 <a href='#!'>pochta@mail.com</a>
//               </div>
//             </div>
//             <a className='yellow-btn' href='#!'>
//               Заказать звонок
//             </a>
//           </div>
//           <div className='contact-bottom' id='contact-bottom'>
//             <Title text='Остались вопросы?' />
//             <form>
//               <div className='inputs'>
//                 <input type='text' name='name' placeholder='ваше имя' />
//                 <input
//                   type='number'
//                   name='tel'
//                   placeholder='ваш номер телефона'
//                 />
//                 <input
//                   type='email'
//                   name='email'
//                   placeholder='ваша электронная почта'
//                 />
//               </div>
//               <button type='button' className='orange-btn' onClick={openModal}>
//                 отправить
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//       <CallModal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

import { useState, useRef } from 'react';
import assets from '../../assets';
import { CallModal } from '../modal/call-modal';
import { Title } from '../title';
import './contact.scss';

export const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    contactName: '',
    contactTel: '',
    contactEmail: '',
  });
  const [contactErrors, setContactErrors] = useState({
    contactName: false,
    contactTel: false,
    contactEmail: false,
  });

  const contactFormRef = useRef(null);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

  // Contact form input handling
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value.trim(),
    });

    if (value.trim()) {
      setContactErrors({
        ...contactErrors,
        [name]: false,
      });
    }
  };

  // Phone number formatting
  const handleContactPhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (!value.startsWith('7')) {
      value = '7' + value;
    }

    if (value.length > 11) value = value.slice(0, 11);

    const formattedPhone = value.replace(
      /^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/,
      '+$1 $2 $3-$4-$5'
    );

    setContactFormData({
      ...contactFormData,
      contactTel: formattedPhone,
    });

    setContactErrors({
      ...contactErrors,
      contactTel: !phonePattern.test(formattedPhone),
    });
  };

  // Validation check
  const validateContactForm = () => {
    const newErrors = {
      contactName: !contactFormData.contactName,
      contactTel: !phonePattern.test(contactFormData.contactTel),
      contactEmail: !emailPattern.test(contactFormData.contactEmail),
    };

    setContactErrors(newErrors);

    const firstInvalidField = Object.keys(newErrors).find(
      (key) => newErrors[key]
    );

    if (firstInvalidField) {
      document.getElementsByName(firstInvalidField)[0].focus();
      return false;
    }
    return true;
  };

  // Modal handling
  const openContactModal = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      setIsContactModalOpen(true);
      contactFormRef.current.reset();
      setContactFormData({ contactName: '', contactTel: '', contactEmail: '' });
    }
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <section className='contact' id='contact'>
        <div className='container'>
          {' '}
          <div className='contact-top'>
            <Title subText='контакты' />{' '}
            <div className='contact-top__boxes'>
              {' '}
              <div className='content-box'>
                {' '}
                <div className='box'>
                  <img src={assets.bigLocation} alt='' />
                  <h3>Адрес</h3>{' '}
                </div>
                <a href='#!'>г. Лучший, ул. Милая 6</a>{' '}
              </div>{' '}
              <div className='midle-boxes'>
                {' '}
                <div className='flex-box'>
                  {' '}
                  <div className='content-box'>
                    {' '}
                    <div className='box'>
                      <img src={assets.tel} alt='' width={31} height={31} />
                      <h3>Телефон</h3>{' '}
                    </div>
                    <a href='#!'>8 888 888 88 88</a>
                    <a href='#!'>8 999 999 99 99</a>{' '}
                  </div>{' '}
                  <div className='content-box'>
                    {' '}
                    <div className='box'>
                      {' '}
                      <img src={assets.clock} alt='' width={31} height={31} />
                      <h3>Время работы</h3>{' '}
                    </div>{' '}
                    <a href='#!'>
                      Понедельник – Воскресенье <br />с 8:00 до 20:00{' '}
                    </a>{' '}
                  </div>{' '}
                </div>{' '}
                <div className='social-media'>
                  {' '}
                  <a href='#!'>
                    <img src={assets.telegram} alt='' />{' '}
                  </a>{' '}
                  <a href='#!'>
                    <img src={assets.whatsapp} alt='' />{' '}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              <div className='content-box'>
                {' '}
                <div className='box'>
                  <img src={assets.pochta} alt='' width={36} height={28} />
                  <h3>Почта</h3>{' '}
                </div>
                <a href='#!'>pochta@mail.com</a>{' '}
              </div>{' '}
            </div>{' '}
            <a className='yellow-btn' href='#!'>
              Заказать звонок{' '}
            </a>{' '}
          </div>
          <div className=''>
            <Title text='Остались вопросы?' />
            <div className='contact-bottom'>
              <form ref={contactFormRef}>
                <div className='inputs'>
                  <input
                    type='text'
                    name='contactName'
                    placeholder='ваше имя'
                    value={contactFormData.contactName}
                    onChange={handleContactChange}
                    className={contactErrors.contactName ? 'danger' : ''}
                  />
                  <input
                    type='text'
                    name='contactTel'
                    placeholder='ваш номер телефона'
                    value={contactFormData.contactTel}
                    onChange={handleContactPhoneChange}
                    className={contactErrors.contactTel ? 'danger' : ''}
                  />
                  <input
                    type='email'
                    name='contactEmail'
                    placeholder='ваша электронная почта'
                    value={contactFormData.contactEmail}
                    onChange={handleContactChange}
                    className={contactErrors.contactEmail ? 'danger' : ''}
                  />
                </div>
                <button
                  type='button'
                  className='orange-btn'
                  onClick={openContactModal}
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CallModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
};
