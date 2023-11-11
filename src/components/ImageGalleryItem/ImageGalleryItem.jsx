import React, { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import Loader from '../Loader/Loader';

function ImageGalleryItem({ image, onImageClick }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onImageClick(image, handleImageLoaded);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader isVisible={isLoading} />}
      <li className={styles.imageGalleryItem} onClick={handleClick}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.imageGalleryItemImage}
        />
      </li>
    </>
  );
}

export default ImageGalleryItem;
