// import { useEffect } from 'react';
import { ModalBack, ModalCon } from './modal.styled';
import PropTypes from 'prop-types';

export default function Modal ({onModalClose,image}) {

//  componentDidMount() {
//     window.addEventListener('keydown', this.keyClose);
//   }

//   componentWillUnmount() {
//     window.addEventListener('keydown', this.keyClose);
//   }

  
 const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

// const keyClose = e => {
//     if (e.code === 'Escape') {
//       onModalClose();
//     }
//   };


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
