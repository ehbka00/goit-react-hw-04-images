import ImageGalleryItem from './ImageGalleryItem';

import styles from './imageGallery.module.css';

const ImageGallery = props => {
  const handleImageClick = item => {
    props.onClick(item);
  };

  const { images } = props;
  return (
    <>
      {images.length > 0 && (
        <ul className={styles.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={handleImageClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
