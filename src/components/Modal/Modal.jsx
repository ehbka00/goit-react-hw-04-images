import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import styles from './modal.module.css';

const modal = document.querySelector('#modal');

const Modal = ({ item, onClose }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const handleClickModal = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClickModal}>
      <div className={styles.modal}>
        <img
          src={item.getAttribute('datafullscreenurl')}
          alt={item.getAttribute('alt')}
        />
      </div>
    </div>,
    modal
  );
};

export default Modal;
