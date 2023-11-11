import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import Loader from '../Loader/Loader';

class ImageGalleryItem extends Component {
  state = {
    isLoading: false,
  };

  handleClick = () => {
    const { onImageClick, image } = this.props;
    this.setState({ isLoading: true });
    onImageClick(image, this.handleImageLoaded);
  };

  handleImageLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { image } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        {isLoading && <Loader isVisible={isLoading} />}
        <li className={styles.imageGalleryItem} onClick={this.handleClick}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={styles.imageGalleryItemImage}
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
