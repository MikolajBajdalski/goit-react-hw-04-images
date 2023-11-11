import React from 'react';
import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ isVisible }) => {
  const loaderClass = isVisible
    ? `${styles.loaderWrapper} ${styles.visible}`
    : styles.loaderWrapper;

  return (
    <div className={loaderClass}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
