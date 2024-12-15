import { useEffect } from 'react';
import assets from '../../assets';
import './modal.scss';
export const CallModal = ({ isOpen, onClose }) => {
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
    <div className='call-modal modal' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='border-box'>
          <button className='close-modal' onClick={onClose}>
            <img src={assets.closeIcon} alt='' />
          </button>
          <h2 className='call-modal__title'>
            Мы перезвоним вам в ближайшее время
          </h2>
        </div>
      </div>
    </div>
  );
};
