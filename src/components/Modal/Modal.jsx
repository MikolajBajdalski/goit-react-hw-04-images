import React, { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ imageUrl, alt, onClose, onImageLoaded }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    onImageLoaded();
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={imageUrl} alt={alt} onLoad={handleImageLoad} />
      </div>
    </div>
  );
}

export default Modal;
