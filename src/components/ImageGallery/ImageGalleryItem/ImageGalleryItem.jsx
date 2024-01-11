import { Component } from 'react';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const handleClick = e => {
    props.onClick(e.target);
  };

  const image = props.image;

  return (
    <li className={styles.item} onClick={handleClick}>
      <img
        className={styles.image}
        src={image.webformatURL}
        alt={image.user}
        datafullscreenurl={image.largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
