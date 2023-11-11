import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  handleImageLoad = () => {
    this.props.onImageLoaded();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, alt } = this.props;

    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={imageUrl} alt={alt} onLoad={this.handleImageLoad} />
        </div>
      </div>
    );
  }
}

export default Modal;
