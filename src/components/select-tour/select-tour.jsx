import { useState, useRef } from 'react';
import assets from '../../assets';
import { Card } from '../card/card';
import { Title } from '../title';
import './select-tour.scss';
import { CallModal } from '../modal/call-modal';

export const SelectTour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    tel: false,
    email: false,
  });

  const formRef = useRef(null);

  // RegEx shablonlari
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

  // Umumiy input o‘zgarishi
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value.trim(),
    });

    if (value.trim()) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  // Telefon raqami uchun o‘zgarish
  // const handlePhoneChange = (e) => {
  //   let value = e.target.value.replace(/\D/g, ''); // Raqam bo‘lmagan belgilarni olib tashlash

  //   if (value.length > 11) value = value.slice(0, 11);

  //   const formattedPhone = value.replace(
  //     /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,
  //     '+$1 $2 $3-$4-$5'
  //   );

  //   setFormData({
  //     ...formData,
  //     tel: formattedPhone,
  //   });

  //   setErrors({
  //     ...errors,
  //     tel: !phoneRegex.test(formattedPhone), // Noto‘g‘ri format
  //   });
  // };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Raqam bo‘lmagan belgilarni olib tashlash

    // Faqat "7" raqamidan boshlansin
    if (!value.startsWith('7')) {
      value = '7' + value;
    }

    // Maksimal uzunlikni cheklash
    if (value.length > 11) value = value.slice(0, 11);

    // Formatlash
    const formattedPhone = value.replace(
      /^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/,
      '+$1 $2 $3-$4-$5'
    );

    setFormData({
      ...formData,
      tel: formattedPhone,
    });

    setErrors({
      ...errors,
      tel: !phoneRegex.test(formattedPhone), // Noto‘g‘ri format
    });
  };
  // Validatsiyani tekshirish
  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      tel: !phoneRegex.test(formData.tel),
      email: !emailRegex.test(formData.email),
    };

    setErrors(newErrors);

    const firstInvalidField = Object.keys(newErrors).find(
      (key) => newErrors[key]
    );

    if (firstInvalidField) {
      document.getElementsByName(firstInvalidField)[0].focus();
      return false;
    }
    return true;
  };

  // Modal ochish
  const openModal = () => {
    if (validateForm()) {
      setIsModalOpen(true);
      formRef.current.reset(); // Formani tozalash
      setFormData({ name: '', tel: '', email: '' });
    }
  };

  // Modal yopish
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className='select-tour' id='select-tour'>
        <div className='container'>
          <Title text='Выбрать' subText='тур' />

          <div className='maps'>
            {Array.from({ length: 5 }).map((_, i) => (
              <div className='map-img' key={i}>
                <img src={assets[`map${i + 1}`]} alt={`Map ${i + 1}`} />
              </div>
            ))}
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

            <form className='tour-booking__form' ref={formRef}>
              <input
                type='text'
                name='name'
                placeholder='Ваше имя'
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'danger' : ''}
              />
              <input
                type='text'
                name='tel'
                placeholder='Ваш номер телефона'
                value={formData.tel}
                onChange={handlePhoneChange}
                className={errors.tel ? 'danger' : ''}
              />
              <input
                type='email'
                name='email'
                placeholder='Ваш Email'
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'danger' : ''}
              />
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
