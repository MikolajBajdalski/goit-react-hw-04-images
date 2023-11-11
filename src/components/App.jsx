import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    selectedImage: null,
  };

  fetchImages = async query => {
    const { searchQuery, currentPage } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=39482556-d60da0ad7dc5ab6f886d79ae4&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      this.setState(prevState => ({
        images:
          searchQuery !== query
            ? data.hits
            : [...prevState.images, ...data.hits],
        currentPage: prevState.currentPage + 1,
        searchQuery: query,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ isLoading: false });
      console.error('Błąd: ', error);
    }
  };

  loadMoreImages = () => {
    const { searchQuery } = this.state;
    this.fetchImages(searchQuery);
  };

  openModal = (image, onImageLoaded) => {
    this.setState({ selectedImage: image, onImageLoaded });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, onImageLoaded } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        {selectedImage && (
          <Modal
            imageUrl={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            onClose={this.closeModal}
            onImageLoaded={onImageLoaded}
          />
        )}
        <Loader isVisible={isLoading} />
      </>
    );
  }
}

export default App;
