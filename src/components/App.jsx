import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = useCallback(async () => {
    if (!searchQuery) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      setImages(prevImages =>
        currentPage === 1 ? data.hits : [...prevImages, ...data.hits]
      );
    } catch (error) {
      console.error('Błąd: ', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, currentPage]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const loadMoreImages = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Searchbar
        onSubmit={query => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && <Button onClick={loadMoreImages} />}
      {selectedImage && (
        <Modal
          imageUrl={selectedImage.largeImageURL}
          alt={selectedImage.tags}
          onClose={closeModal}
        />
      )}
      <Loader isVisible={isLoading} />
    </>
  );
}

export default App;
