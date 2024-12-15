import { useEffect } from 'react';
import assets from '../../assets';
import './modal.scss';
export const Modal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='border-box'>
          <button className='close-modal' onClick={onClose}>
            <img src={assets.closeIcon} alt='' />
          </button>
          <div className='modal-header'>
            <h2 className='modal-title'>{data.title}</h2>
          </div>
          <div className='modal-info'>
            <div className='modal-info__box'>
              <span>Длительность</span>
              <div className='img-box'>
                <img src={assets.calendarIcon} alt='' />
              </div>
              <h3>{data.duration}</h3>
            </div>
            <div className='modal-info__box'>
              <span>длина</span>
              <div className='img-box'>
                <img src={assets.distance} alt='' />
              </div>
              <h3>{data.distance}</h3>
            </div>
            <div className='modal-info__box'>
              <span>сложность</span>
              <div className='img-box'>
                <img src={assets.difficulty} alt='' />
              </div>
              <h3>{data.difficulty}</h3>
            </div>
          </div>
          <p className='modal-desc'>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
