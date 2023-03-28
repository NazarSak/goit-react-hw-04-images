import { useEffect } from 'react';
import { ModalBack, ModalCon } from './modal.styled';
import PropTypes from 'prop-types';

export default function Modal({ onModalClose, image }) {
  useEffect(() => {

    const keyClose = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    document.addEventListener('keydown', keyClose);
    return () => {
      document.removeEventListener('keydown', keyClose);
    };
  }, [onModalClose]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };



  return (
    <ModalBack onClick={handleBackDropClick}>
      <ModalCon>
        <img src={image} alt="" />
      </ModalCon>
    </ModalBack>
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
