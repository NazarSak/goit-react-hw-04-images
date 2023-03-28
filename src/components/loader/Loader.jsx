import React from 'react';
import { Audio } from 'react-loader-spinner';
import { DivLoader } from './loader.styled';

export const Loader = () => {
  return (
    <DivLoader>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
      />
    </DivLoader>
  );
};
