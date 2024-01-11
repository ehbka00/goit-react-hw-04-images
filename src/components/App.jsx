import { useState, useEffect, useReducer } from 'react';
import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import { getGalleryItems } from '../api.js';

const toggleModal = prevState => !prevState;

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, dispatch] = useReducer(toggleModal, false);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    if (query === '') return;
    setIsLoading(true);

    const getImages = async () => {
      try {
        const response = await getGalleryItems(query, page);
        if (response.status === 200) {
          setImages(prevState => [...prevState, ...response.data.hits]);
          setIsLoading(false);
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };

    getImages();
  }, [page, query]);

  const handleSubmit = newQuery => {
    setImages([]);
    setQuery(newQuery);
    setIsLoading(false);
    setPage(1);
    setCurrentItem({});
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = item => {
    setCurrentItem(item);
    dispatch();
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {showModal && <Modal onClose={() => dispatch()} item={currentItem} />}
      {isLoading && <Loader />}
      {images.length > 0 && images.length % 2 === 0 && (
        <Button onClick={handleClick} />
      )}
    </>
  );
};
