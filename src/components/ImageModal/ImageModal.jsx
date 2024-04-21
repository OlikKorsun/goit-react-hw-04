import { useEffect } from 'react';
import css from "./ImageModal.module.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, selectedModalImage}){
  
    useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.key === 'Esc') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    }, [onClose]);

    const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.modal}
      onOverlayClick={handleOverlayClick}>
          <img src={selectedModalImage} alt="Modal image" className={css.modalImage} width="800" height="500" />
    </Modal>
  );
}