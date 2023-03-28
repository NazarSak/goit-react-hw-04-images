import React from 'react';
import { UlGeneral } from './imageGallery.styled';

import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data,onImageClick }) => {
  return (
    <UlGeneral>
      {data.map(({ id, webformatURL,largeImageURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} openModal={onImageClick}  />
      ))}
    </UlGeneral>
  );
};


