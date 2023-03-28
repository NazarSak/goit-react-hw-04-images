import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoader,DivButton } from './button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <DivButton>
      <ButtonLoader type="button" onClick={onLoadMore}>
        Load More
      </ButtonLoader>
    </DivButton>
  );
};

Button.propTypes = {
  onLoadMore:PropTypes.func.isRequired,
}